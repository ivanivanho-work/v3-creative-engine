import { useMemo, useState } from 'react';
import {
  Loader2, Sparkles, Link2, ExternalLink, CheckCircle2, EyeOff, AlertTriangle,
  ChevronDown, ChevronRight, Music, Hash, Users, Globe, Zap, ShieldCheck, ShieldOff,
} from 'lucide-react';
import { matchAndRank, cellKey, type MatchCell, type MatchPair } from '@/services/api';
import {
  approveTrend as storeApprove,
  getCurrentBatch,
} from '@/services/approvedStore';
import { ApprovedSidebar } from '@/app/components/ApprovedSidebar';
import { fetchCsvFile, setCurrentMatchResult, type SharedState } from '@/services/sharedState';
import type { Trend } from '@/types';

function formatCompact(n: number | undefined): string | null {
  if (n === undefined || n === null || !Number.isFinite(n)) return null;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(Math.round(n));
}

function SentimentPill({ s }: { s: Trend['sentiment'] }) {
  if (!s) return null;
  const cls =
    s === 'positive' ? 'bg-green-500/20 text-green-400' :
    s === 'negative' ? 'bg-red-500/20 text-red-400' :
    s === 'mixed' ? 'bg-orange-500/20 text-orange-400' :
    'bg-gray-500/20 text-gray-400';
  return <span className={`px-1.5 py-0.5 rounded-full text-[10px] capitalize ${cls}`}>{s}</span>;
}

function VelocityPill({ v }: { v: Trend['trendVelocity'] }) {
  if (!v) return null;
  const cls =
    v === 'Trending' ? 'bg-red-500/20 text-red-400' :
    v === 'Emerging' ? 'bg-yellow-500/20 text-yellow-400' :
    'bg-gray-500/20 text-gray-400';
  return <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${cls}`}>{v}</span>;
}

function CompactTrendCard({ trend, onApprove, isApproved }: {
  trend: Trend;
  onApprove: (id: string) => void;
  isApproved: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const needsReview = trend.contentQuality === 'potentiallyAISlop';
  const borderClass = trend.hidden
    ? 'border-dashed border-muted-foreground/40 opacity-70'
    : isApproved
    ? 'border-green-500 bg-green-500/5'
    : 'border-border hover:border-primary/50';

  const viewsStr = trend.viewsVolume || formatCompact(trend.views);
  const watchtimeStr = trend.watchtimeVolume || formatCompact((trend as any).watchtimeHours);
  const engagementPct = trend.engagementRate !== undefined
    ? `${(trend.engagementRate * 100).toFixed(1)}%`
    : null;

  return (
    <div className={`bg-card border rounded-md transition-all ${borderClass}`}>
      {/* Collapsed header — always visible, clickable to expand */}
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="w-full p-2.5 text-left"
        aria-expanded={expanded}
      >
        <div className="flex items-start gap-2">
          <div className="flex-shrink-0 size-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
            #{trend.rank}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-sm text-foreground font-medium leading-tight line-clamp-2 flex-1 min-w-0">
                {trend.topicName}
              </h4>
              <div className="flex-shrink-0 flex items-center gap-1">
                <div className="text-right">
                  <div className="text-sm font-bold text-foreground leading-none">{trend.score}</div>
                  <div className="text-[10px] text-muted-foreground">ERS</div>
                </div>
                {expanded
                  ? <ChevronDown className="size-4 text-muted-foreground" />
                  : <ChevronRight className="size-4 text-muted-foreground" />}
              </div>
            </div>

            {/* Pills row — always shown, compact */}
            <div className="flex flex-wrap gap-1 mt-1">
              <VelocityPill v={trend.trendVelocity} />
              <SentimentPill s={trend.sentiment} />
              {trend.brandSafe === false && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px]">
                  <ShieldOff className="size-2.5" />
                  Unsafe
                </span>
              )}
              {needsReview && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[10px]">
                  <AlertTriangle className="size-2.5" />
                  Review
                </span>
              )}
              {trend.hidden && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px]">
                  <EyeOff className="size-2.5" />
                  Hidden
                </span>
              )}
              {trend.genAI && (
                <span className="px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-[10px]">
                  GenAI
                </span>
              )}
            </div>
          </div>
        </div>
      </button>

      {/* Expanded detail panel */}
      {expanded && (
        <div className="px-2.5 pb-2.5 pt-1 border-t border-border space-y-2 text-[11px]">
          {trend.description && (
            <p className="text-foreground leading-snug">{trend.description}</p>
          )}

          <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-muted-foreground">
            {trend.targetDemo && (
              <div className="flex items-center gap-1 min-w-0">
                <Users className="size-3 flex-shrink-0" />
                <span className="truncate">{trend.targetDemo}</span>
              </div>
            )}
            {trend.primaryMarkets && trend.primaryMarkets.length > 0 && (
              <div className="flex items-center gap-1 min-w-0">
                <Globe className="size-3 flex-shrink-0" />
                <span className="truncate">{trend.primaryMarkets.join(', ')}</span>
              </div>
            )}
            {trend.audio && (
              <div className="flex items-center gap-1 col-span-2 min-w-0">
                <Music className="size-3 flex-shrink-0" />
                <span className="truncate">{trend.audio}</span>
              </div>
            )}
            {trend.brandSafe === true && (
              <div className="flex items-center gap-1 text-green-400">
                <ShieldCheck className="size-3 flex-shrink-0" />
                Brand safe
              </div>
            )}
            {trend.creationComplexity && (
              <div className="flex items-center gap-1">
                <Zap className="size-3 flex-shrink-0" />
                {trend.creationComplexity}
              </div>
            )}
          </div>

          {(viewsStr || watchtimeStr || trend.creationRate || engagementPct) && (
            <div className="grid grid-cols-4 gap-1 pt-1">
              {viewsStr && <Metric label="Views" value={viewsStr} />}
              {watchtimeStr && <Metric label="Watch" value={watchtimeStr} />}
              {trend.creationRate && <Metric label="Creates" value={trend.creationRate} />}
              {engagementPct && <Metric label="Eng." value={engagementPct} />}
            </div>
          )}

          {trend.hashtags && trend.hashtags.length > 0 && (
            <div className="flex items-start gap-1 text-muted-foreground">
              <Hash className="size-3 flex-shrink-0 mt-0.5" />
              <span className="leading-snug break-words">
                {trend.hashtags.slice(0, 6).map((h) => h.replace(/^#/, '')).join(' · ')}
              </span>
            </div>
          )}

          {trend.trendBucket && (
            <div className="text-muted-foreground">
              <span className="text-[10px] uppercase">Bucket:</span> {trend.trendBucket}
            </div>
          )}
        </div>
      )}

      {/* Actions — always visible */}
      <div className="flex items-center gap-1 px-2.5 pb-2.5">
        {trend.referenceLink && (
          <a
            href={trend.referenceLink}
            target="_blank"
            rel="noopener noreferrer"
            title="View reference"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary text-secondary-foreground hover:bg-accent text-[11px]"
          >
            <ExternalLink className="size-3" />
            Ref
          </a>
        )}
        {isApproved ? (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-600 text-white text-[11px]">
            <CheckCircle2 className="size-3" />
            Approved
          </span>
        ) : (
          <button
            onClick={(e) => { e.stopPropagation(); onApprove(trend.id); }}
            title="Approve for campaign"
            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-primary text-primary-foreground hover:opacity-90 text-[11px]"
          >
            <CheckCircle2 className="size-3" />
            Approve
          </button>
        )}
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-1 rounded bg-muted/50 text-center">
      <div className="text-[9px] uppercase text-muted-foreground">{label}</div>
      <div className="text-[11px] text-foreground font-medium leading-tight">{value}</div>
    </div>
  );
}

function MatchedPairCard({ pair, onApprove, approvedIds }: {
  pair: MatchPair;
  onApprove: (id: string) => void;
  approvedIds: Set<string>;
}) {
  return (
    <div className="rounded-md border border-cyan-500/30 bg-card p-2">
      <div className="flex items-center gap-2 mb-2">
        <div className="size-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
          #{pair.rank}
        </div>
        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px]">
          <Link2 className="size-2.5" />
          {pair.matchStage} · {Math.round(pair.matchScore * 100)}%
        </span>
        <div className="ml-auto text-right">
          <div className="text-sm font-bold text-foreground leading-none">{pair.combinedScore.toFixed(1)}</div>
          <div className="text-[10px] text-muted-foreground">Combined</div>
        </div>
      </div>
      <div className="space-y-1.5">
        <div>
          <div className="text-[10px] uppercase text-purple-400 mb-0.5">Internal</div>
          <CompactTrendCard
            trend={pair.internal}
            onApprove={onApprove}
            isApproved={approvedIds.has(pair.internal.id)}
          />
        </div>
        <div>
          <div className="text-[10px] uppercase text-cyan-400 mb-0.5">External</div>
          <CompactTrendCard
            trend={pair.external}
            onApprove={onApprove}
            isApproved={approvedIds.has(pair.external.id)}
          />
        </div>
      </div>
    </div>
  );
}

function TrackColumn({ title, count, accentClass, accentText, children }: {
  title: string;
  count: number;
  accentClass: string;
  accentText: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col rounded-lg border ${accentClass} bg-card min-h-0`}>
      <div className="px-3 py-2.5 border-b border-border flex-shrink-0">
        <h3 className={`font-medium text-sm ${accentText}`}>
          {title} <span className="text-muted-foreground font-normal">({count})</span>
        </h3>
      </div>
      <div className="p-2 space-y-2 overflow-y-auto flex-1 min-h-0">
        {count === 0 ? (
          <p className="text-xs text-muted-foreground italic text-center py-6">No trends in this track.</p>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

interface ThreeTrackViewProps {
  state: SharedState;
  hydrated: boolean;
  market: string;
  week: string | null;
}

export function ThreeTrackView({ state, hydrated, market, week }: ThreeTrackViewProps) {
  const { nyanCat: nyanCatRef, vayner: vaynerRef, matchResult } = state;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showHidden, setShowHidden] = useState(false);
  // Bump to force re-reads of the approved store after mutations.
  const [approvedVersion, setApprovedVersion] = useState(0);

  const isStaleShape = !!matchResult && matchResult.version !== 2;
  const cell: MatchCell | null = useMemo(() => {
    if (!matchResult || !week) return null;
    return matchResult.cells?.[cellKey(market, week)] ?? null;
  }, [matchResult, market, week]);

  const approvedIds = useMemo(() => {
    const batch = getCurrentBatch(market);
    return new Set(batch.trends.map((t) => t.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [market, approvedVersion]);
  const allTrends = useMemo(() => {
    if (!cell) return new Map<string, Trend>();
    const map = new Map<string, Trend>();
    for (const t of cell.internal) map.set(t.id, t);
    for (const t of cell.external) map.set(t.id, t);
    for (const p of cell.matching) {
      map.set(p.internal.id, p.internal);
      map.set(p.external.id, p.external);
    }
    return map;
  }, [cell]);

  const handleApprove = (id: string) => {
    const trend = allTrends.get(id);
    if (!trend) return;
    storeApprove(market, trend);
    setApprovedVersion((v) => v + 1);
  };

  const handleRun = async () => {
    if (!nyanCatRef && !vaynerRef) {
      setError('Upload at least one CSV on the Data Upload page (ideally both for matching to work).');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const [nyanFile, vaynerFile] = await Promise.all([
        nyanCatRef ? fetchCsvFile(nyanCatRef) : Promise.resolve(null),
        vaynerRef ? fetchCsvFile(vaynerRef) : Promise.resolve(null),
      ]);
      const res = await matchAndRank(nyanFile, vaynerFile);
      await setCurrentMatchResult(res, {
        nyanCatFile: nyanCatRef,
        vaynerFile: vaynerRef,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Matching failed');
    } finally {
      setLoading(false);
    }
  };

  const filterVisible = (trends: Trend[]) => showHidden ? trends : trends.filter((t) => !t.hidden);

  const fileStatus = (() => {
    if (!hydrated) return 'Loading latest shared state…';
    const parts: string[] = [];
    if (nyanCatRef) parts.push(`Nyan Cat: ${nyanCatRef.name}`);
    if (vaynerRef) parts.push(`Vayner: ${vaynerRef.name}`);
    return parts.length ? parts.join(' · ') : 'No CSVs uploaded yet — head to the Data Upload tab.';
  })();

  return (
    <div className="flex gap-3 items-start">
      <div className="flex-1 min-w-0">
      {/* Run controls */}
      <div className="mb-4 p-4 rounded-lg border border-border bg-card">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="size-5 text-primary" />
          <h3 className="text-foreground font-medium">Run Topic Matching + ERS</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{fileStatus}</p>
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={handleRun}
            disabled={loading || !hydrated || (!nyanCatRef && !vaynerRef)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50"
          >
            {loading ? <Loader2 className="size-4 animate-spin" /> : <Sparkles className="size-4" />}
            {loading ? 'Matching + ranking…' : 'Run Matching + Ranking'}
          </button>
          <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
            <input
              type="checkbox"
              checked={showHidden}
              onChange={(e) => setShowHidden(e.target.checked)}
              className="size-4"
            />
            Show hidden trends
          </label>
        </div>
        {error && (
          <div className="mt-3 p-3 rounded-lg border border-red-500/50 bg-red-500/10 text-red-500 text-sm">
            {error}
          </div>
        )}
      </div>

      {/* Stale shape notice */}
      {isStaleShape && (
        <div className="mb-4 p-3 rounded-lg border border-yellow-500/40 bg-yellow-500/10 text-yellow-500 text-sm">
          The cached result uses an older format. Click <strong>Run Matching + Ranking</strong> to
          refresh with per-market, per-week filtering + normalization.
        </div>
      )}

      {/* Dataset-level summary (across all markets/weeks in this upload) */}
      {matchResult && !isStaleShape && (
        <div className="mb-4 p-3 rounded-lg border border-border bg-card text-sm">
          <div className="text-muted-foreground mb-1">This upload</div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-foreground">
            <span><strong>{matchResult.stats.internalParsed}</strong> Nyan Cat parsed</span>
            <span><strong>{matchResult.stats.externalParsed}</strong> Vayner parsed</span>
            <span><strong>{matchResult.markets.length}</strong> markets · <strong>{matchResult.weeks.length}</strong> weeks · <strong>{matchResult.stats.cellCount}</strong> cells</span>
            {matchResult.stats.globalInternal + matchResult.stats.globalExternal > 0 && (
              <span className="text-cyan-400">{matchResult.stats.globalInternal + matchResult.stats.globalExternal} tagged Global</span>
            )}
          </div>
          {(matchResult.stats.internalSkippedNoWeek > 0 || matchResult.stats.externalSkippedNoWeek > 0) && (
            <div className="mt-2 p-2 rounded bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs">
              <strong>⚠ {matchResult.stats.internalSkippedNoWeek} Nyan Cat + {matchResult.stats.externalSkippedNoWeek} Vayner</strong> trends were skipped because their date column
              (Nyan: <code>shorts_video_published_date</code>, Vayner: <code>Date Identified</code>) was missing or unparseable.
              Check that column in your CSV — week filtering requires a valid date.
            </div>
          )}
          {matchResult.stats.internalParsed === 0 && (
            <div className="mt-2 p-2 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
              <strong>⚠ No Nyan Cat trends parsed.</strong> Check that the CSV has an <code>audio_id</code> (or <code>Song_title</code>) column
              per row and that the file was uploaded into the Nyan Cat slot on the Data Upload tab.
            </div>
          )}
          {matchResult.weeks.length === 0 && matchResult.stats.internalParsed + matchResult.stats.externalParsed > 0 && (
            <div className="mt-2 p-2 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
              <strong>⚠ No weeks found in either CSV.</strong> Every trend is missing its date field, so nothing falls into a week cell.
            </div>
          )}
        </div>
      )}

      {/* Missing-cell notice */}
      {matchResult && !isStaleShape && !cell && week && (
        <div className="mb-4 p-3 rounded-lg border border-muted bg-muted/40 text-muted-foreground text-sm">
          No topics for {market} in {week}. Try a different market or week.
        </div>
      )}

      {/* Results */}
      {cell && (
        <>
          <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-2">
            <Stat label="Internal parsed" value={cell.stats.internalParsed} />
            <Stat label="External parsed" value={cell.stats.externalParsed} />
            <Stat
              label="Matched"
              value={cell.stats.matched}
              sub={`${cell.stats.matchedByKeyword} kw · ${cell.stats.matchedBySemantic} sem`}
            />
            <Stat
              label="Unique"
              value={cell.stats.internalOnly + cell.stats.externalOnly}
              sub={`${cell.stats.internalOnly} int · ${cell.stats.externalOnly} ext`}
            />
          </div>

          {/* Three vertical tracks */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
            style={{ height: 'calc(100vh - 320px)', minHeight: '500px' }}
          >
            <TrackColumn
              title="Internal (Nyan Cat)"
              count={filterVisible(cell.internal).length}
              accentClass="border-purple-500/30"
              accentText="text-purple-400"
            >
              {filterVisible(cell.internal).map((t) => (
                <CompactTrendCard
                  key={t.id}
                  trend={t}
                  onApprove={handleApprove}
                  isApproved={approvedIds.has(t.id)}
                />
              ))}
            </TrackColumn>

            <TrackColumn
              title="Matched Topics"
              count={cell.matching.length}
              accentClass="border-cyan-500/30"
              accentText="text-cyan-400"
            >
              {cell.matching.map((pair) => (
                <MatchedPairCard
                  key={`${pair.internal.id}::${pair.external.id}`}
                  pair={pair}
                  onApprove={handleApprove}
                  approvedIds={approvedIds}
                />
              ))}
            </TrackColumn>

            <TrackColumn
              title="External (Vayner)"
              count={filterVisible(cell.external).length}
              accentClass="border-cyan-500/30"
              accentText="text-cyan-400"
            >
              {filterVisible(cell.external).map((t) => (
                <CompactTrendCard
                  key={t.id}
                  trend={t}
                  onApprove={handleApprove}
                  isApproved={approvedIds.has(t.id)}
                />
              ))}
            </TrackColumn>
          </div>
        </>
      )}
      </div>

      <ApprovedSidebar
        market={market}
        version={approvedVersion}
        onChanged={() => setApprovedVersion((v) => v + 1)}
      />
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: number; sub?: string }) {
  return (
    <div className="p-3 rounded-lg bg-muted">
      <div className="text-[10px] uppercase text-muted-foreground mb-1">{label}</div>
      <div className="text-xl font-bold text-foreground leading-none">{value}</div>
      {sub && <div className="text-[10px] text-muted-foreground mt-1">{sub}</div>}
    </div>
  );
}
