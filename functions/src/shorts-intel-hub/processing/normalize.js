/**
 * Score normalization — runs as the FINAL pipeline step within a single
 * (market, week) cell. Rescales raw ERS/IRS scores to 0–100 so visitors can
 * compare trends across tracks within the same cell without cross-market or
 * cross-week contamination.
 *
 * Important invariant: this function MUST only be called on a slice that has
 * already been filtered to a single market (with its Global overlay) and a
 * single week. Normalizing across markets or weeks breaks the comparability
 * guarantee the product promises.
 */

/**
 * Min-max rescale a numeric field across `trends` to [0, 100] and write the
 * result back as `${field}Normalized`. Leaves hidden trends and null scores
 * untouched (they remain null / unranked).
 */
function normalizeField(trends, field) {
  const values = [];
  for (const t of trends) {
    if (!t || t.hidden) continue;
    const v = t[field];
    if (typeof v === 'number' && Number.isFinite(v)) values.push(v);
  }
  if (values.length === 0) return;

  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min;

  for (const t of trends) {
    if (!t || t.hidden) continue;
    const v = t[field];
    if (typeof v !== 'number' || !Number.isFinite(v)) continue;
    t[`${field}Normalized`] = span === 0 ? 100 : Math.round(((v - min) / span) * 1000) / 10;
  }
}

/**
 * Normalize a cell's ranked trends. Mutates trends in place, adding
 * `ersNormalized` and `irsNormalized` where applicable, then also sets `score`
 * to the normalized ERS (or IRS, for Nyan Cat) so UI consumers that read
 * `trend.score` get a comparable 0–100 value.
 */
export function normalizeCell({ internal = [], matching = [], external = [] } = {}) {
  const internalsOnly = [
    ...internal,
    ...matching.map((m) => m.internal).filter(Boolean),
  ];
  const externalsOnly = [
    ...external,
    ...matching.map((m) => m.external).filter(Boolean),
  ];

  normalizeField(internalsOnly, 'irs');
  normalizeField(externalsOnly, 'ers');
  normalizeField(internalsOnly, 'ers'); // Nyan Cat trends may also carry ers alias

  // Rewrite `score` to use the normalized value so the frontend card UI
  // reflects per-cell comparability without extra plumbing.
  for (const t of internalsOnly) {
    if (!t || t.hidden) continue;
    if (typeof t.ersNormalized === 'number') t.score = t.ersNormalized;
    else if (typeof t.irsNormalized === 'number') t.score = t.irsNormalized;
  }
  for (const t of externalsOnly) {
    if (!t || t.hidden) continue;
    if (typeof t.ersNormalized === 'number') t.score = t.ersNormalized;
  }

  // Recompute combinedScore on matching pairs using normalized components so
  // the matched track sort reflects the same per-cell scale.
  for (const pair of matching) {
    const i = pair.internal;
    const e = pair.external;
    const iScore = i?.ersNormalized ?? i?.irsNormalized ?? 0;
    const eScore = e?.ersNormalized ?? 0;
    pair.combinedScore = Math.round((iScore + eScore) * 10) / 10;
  }
  matching.sort((a, b) => (b.combinedScore ?? 0) - (a.combinedScore ?? 0));
  matching.forEach((pair, idx) => { pair.rank = idx + 1; });
}

/**
 * Legacy no-op kept for any scheduled jobs that import it. The real
 * normalization is now `normalizeCell`, invoked from `processBatch`.
 */
export async function normalizeTopics(_rawData) {
  return { normalized: [], duplicates: [] };
}
