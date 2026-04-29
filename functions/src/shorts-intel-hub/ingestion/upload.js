/**
 * Upload dispatcher — detects Vayner vs Nyan Cat CSV format, parses, scores,
 * and returns ranked trends. The batch path (`processBatch`) buckets parsed
 * trends into per-(market, week) cells, so matching + ranking + normalization
 * all run within a single market/week scope.
 */

import { parseCSV, detectFormat } from '../analysis/csv.js';
import { parseVaynerRows } from '../analysis/parseVayner.js';
import { parseNyanCatRows } from '../analysis/parseNyanCat.js';
import { rankTrends, DEFAULT_SCORING_CONFIG } from '../ranking/calculate.js';
import { rankInternalTrends } from '../ranking/calculate_irs.js';
import { matchTopics } from '../analysis/matchTopics.js';
import {
  SUPPORTED_MARKETS,
  GLOBAL_MARKET,
  topicVisibleInMarket,
} from '../analysis/classify.js';
import { normalizeCell } from '../processing/normalize.js';

/**
 * Source-aware ranking. Nyan Cat (internal) → IRS; Vayner (external) → ERS.
 * Accepts a list of already-normalized trend rows and infers source from the
 * `source` field set by each parser.
 */
function rankBySource(trends, config = DEFAULT_SCORING_CONFIG, irsOpts = {}) {
  if (!trends.length) return [];
  const isNyanCat = trends.every((t) => t?.source === 'Nyan Cat');
  if (isNyanCat) {
    const merged = config?.irs ? { ...irsOpts, config: config.irs } : irsOpts;
    return rankInternalTrends(trends, merged);
  }
  return rankTrends(trends, config);
}

/**
 * Accepts raw CSV text, detects the source format, normalizes rows, applies
 * ERS, and returns { format, trends, stats }.
 */
export function processUpload(csvText, config = DEFAULT_SCORING_CONFIG) {
  const { headers, rows } = parseCSV(csvText);
  const format = detectFormat(headers);

  let normalized = [];
  if (format === 'vayner') {
    normalized = parseVaynerRows(rows);
  } else if (format === 'nyancat') {
    normalized = parseNyanCatRows(rows);
  } else {
    throw new Error(
      `Unrecognized CSV format. Expected Vayner (Topic Name, Trend Velocity, Content Quality) or Nyan Cat (external_video_id, audio_id) headers.`
    );
  }

  const ranked = rankBySource(normalized, config);
  const stats = {
    total: ranked.length,
    visible: ranked.filter((t) => !t.hidden).length,
    hidden: ranked.filter((t) => t.hidden).length,
    forQualityReview: ranked.filter((t) => t.contentQuality === 'potentiallyAISlop').length,
  };

  return { format, trends: ranked, stats };
}

/**
 * Legacy signature — kept for callers that pass a file buffer.
 */
export async function handleUpload(file, _source, _market) {
  const text = typeof file === 'string' ? file : file?.toString('utf8') ?? '';
  return processUpload(text);
}

/**
 * Build matching + ranked + normalized output for a single (market, week)
 * cell. Exported for testability; `processBatch` wraps it per cell.
 */
async function buildCell({ marketInternals, marketExternals, config, matchOpts }) {
  const { matches, internalOnlyIds, externalOnlyIds } = await matchTopics(
    marketInternals,
    marketExternals,
    matchOpts,
  );

  const internalById = new Map(marketInternals.map((t) => [t.id, t]));
  const externalById = new Map(marketExternals.map((t) => [t.id, t]));

  const internalOnly = rankBySource(
    internalOnlyIds.map((id) => internalById.get(id)).filter(Boolean),
    config,
  );
  const externalOnly = rankBySource(
    externalOnlyIds.map((id) => externalById.get(id)).filter(Boolean),
    config,
  );

  const rawPairs = matches.map((m) => ({
    internal: internalById.get(m.internalId),
    external: externalById.get(m.externalId),
    matchScore: m.score,
    matchStage: m.stage,
  }));

  const rankedIntInMatches = rankBySource(rawPairs.map((p) => p.internal).filter(Boolean), config);
  const rankedExtInMatches = rankBySource(rawPairs.map((p) => p.external).filter(Boolean), config);
  const rankedIntById = new Map(rankedIntInMatches.map((t) => [t.id, t]));
  const rankedExtById = new Map(rankedExtInMatches.map((t) => [t.id, t]));

  const matching = rawPairs
    .map((p) => {
      const i = rankedIntById.get(p.internal?.id) ?? p.internal;
      const e = rankedExtById.get(p.external?.id) ?? p.external;
      const combinedScore = (i?.ers ?? 0) + (e?.ers ?? 0);
      return { ...p, internal: i, external: e, combinedScore };
    })
    .sort((a, b) => b.combinedScore - a.combinedScore)
    .map((p, idx) => ({ ...p, rank: idx + 1 }));

  const cell = {
    internal: internalOnly,
    matching,
    external: externalOnly,
    stats: {
      internalParsed: marketInternals.length,
      externalParsed: marketExternals.length,
      matched: matches.length,
      matchedByKeyword: matches.filter((m) => m.stage === 'keyword').length,
      matchedBySemantic: matches.filter((m) => m.stage === 'semantic').length,
      internalOnly: internalOnly.length,
      externalOnly: externalOnly.length,
    },
  };

  // FINAL STEP: normalize scores within this cell so visitors get a
  // comparable 0–100 scale per (market, week) without cross-cell contamination.
  normalizeCell(cell);
  return cell;
}

function collectWeeks(trends) {
  const set = new Set();
  for (const t of trends) if (t.isoWeek) set.add(t.isoWeek);
  return set;
}

/**
 * Dual-CSV batch. Parses both CSVs, buckets trends by (primary market, ISO
 * week), then runs matching + ranking + normalization within each cell. The
 * response is a cell dictionary keyed by `${market}|${week}` plus the axes
 * available so the UI can render market + week selectors.
 */
export async function processBatch({ nyanCatCsv, vaynerCsv, config = DEFAULT_SCORING_CONFIG, matchOpts = {} }) {
  if (!nyanCatCsv && !vaynerCsv) {
    throw new Error('processBatch requires at least one of nyanCatCsv or vaynerCsv');
  }

  const internalTrends = nyanCatCsv ? parseNyanCatRows(parseCSV(nyanCatCsv).rows) : [];
  const externalTrends = vaynerCsv ? parseVaynerRows(parseCSV(vaynerCsv).rows) : [];

  const internalWeekable = internalTrends.filter((t) => !!t.isoWeek);
  const externalWeekable = externalTrends.filter((t) => !!t.isoWeek);
  const internalSkippedNoWeek = internalTrends.length - internalWeekable.length;
  const externalSkippedNoWeek = externalTrends.length - externalWeekable.length;

  const weeks = Array.from(
    new Set([...collectWeeks(internalWeekable), ...collectWeeks(externalWeekable)]),
  ).sort().reverse(); // newest first

  const cells = {};
  const markets = [...SUPPORTED_MARKETS];

  for (const market of markets) {
    for (const week of weeks) {
      const marketInternals = internalWeekable.filter(
        (t) => t.isoWeek === week && topicVisibleInMarket(t.primaryMarket, market),
      );
      const marketExternals = externalWeekable.filter(
        (t) => t.isoWeek === week && topicVisibleInMarket(t.primaryMarket, market),
      );
      if (!marketInternals.length && !marketExternals.length) continue;

      // Deep clone so per-cell ranking + normalization mutations don't bleed
      // across cells (Global trends appear in multiple cells).
      const cloneTrend = (t) => JSON.parse(JSON.stringify(t));
      const cell = await buildCell({
        marketInternals: marketInternals.map(cloneTrend),
        marketExternals: marketExternals.map(cloneTrend),
        config,
        matchOpts,
      });
      cells[`${market}|${week}`] = cell;
    }
  }

  const globalInternalCount = internalWeekable.filter((t) => t.primaryMarket === GLOBAL_MARKET).length;
  const globalExternalCount = externalWeekable.filter((t) => t.primaryMarket === GLOBAL_MARKET).length;

  return {
    version: 2,
    markets,
    weeks,
    cells,
    stats: {
      internalParsed: internalTrends.length,
      externalParsed: externalTrends.length,
      internalSkippedNoWeek,
      externalSkippedNoWeek,
      globalInternal: globalInternalCount,
      globalExternal: globalExternalCount,
      cellCount: Object.keys(cells).length,
    },
  };
}
