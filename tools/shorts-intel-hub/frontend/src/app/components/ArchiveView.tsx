import { useEffect, useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Trash2, ExternalLink } from 'lucide-react';
import {
  getArchives,
  deleteArchive,
  entryTopTrends,
  type ArchiveEntry,
} from '@/services/archiveStore';

interface ArchiveViewProps {
  market: string;
}

const MARKET_NAMES: Record<string, string> = {
  JP: 'Japan',
  KR: 'South Korea',
  IN: 'India',
  ID: 'Indonesia',
};

function formatSavedAt(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch {
    return iso;
  }
}

function getSourceBadgeColor(source: string) {
  switch (source) {
    case 'Nyan Cat':
      return 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
    case 'Vayner':
      return 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
  }
}

export function ArchiveView({ market }: ArchiveViewProps) {
  const [entries, setEntries] = useState<ArchiveEntry[]>([]);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const refresh = () => {
    const all = getArchives(market);
    setEntries(all);
    // Auto-expand the newest entry so the user sees content immediately.
    if (all[0]) setExpandedIds(new Set([all[0].id]));
  };

  useEffect(() => {
    refresh();
  }, [market]);

  const toggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleDelete = (id: string) => {
    deleteArchive(id);
    refresh();
  };

  const marketName = MARKET_NAMES[market] ?? market;

  return (
    <div>
      <div className="mb-6 p-4 bg-card border border-border rounded-lg flex gap-3">
        <Calendar className="size-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-foreground font-medium mb-1">Historical Archive</h4>
          <p className="text-muted-foreground text-sm">
            Every successful matching run is auto-saved here. Switch the market
            filter above to browse archives for a different region.
          </p>
        </div>
      </div>

      {entries.length === 0 ? (
        <div className="p-8 text-center bg-card rounded-lg border border-border">
          <Calendar className="size-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">
            No archived runs yet for {marketName}. Run matching on the Top Topics
            & Trends tab to create an archive entry.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {entries.map((entry) => {
            const isExpanded = expandedIds.has(entry.id);
            const top = entryTopTrends(entry, 10);
            const stats = entry.result.stats;

            return (
              <div
                key={entry.id}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <div className="w-full px-5 py-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => toggle(entry.id)}
                    className="flex items-center gap-3 flex-1 text-left hover:opacity-80 transition-opacity"
                  >
                    <Calendar className="size-5 text-muted-foreground" />
                    <div>
                      <h3 className="text-foreground font-medium">
                        {formatSavedAt(entry.savedAt)} — {marketName}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {stats.internalParsed} internal · {stats.externalParsed} external ·{' '}
                        {stats.matched} matched
                      </p>
                    </div>
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="p-2 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Delete archive entry"
                    >
                      <Trash2 className="size-4" />
                    </button>
                    <button
                      onClick={() => toggle(entry.id)}
                      className="p-1 rounded hover:bg-muted text-muted-foreground"
                      aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    >
                      {isExpanded ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t border-border p-5">
                    {(entry.nyanCatFileName || entry.vaynerFileName) && (
                      <div className="mb-4 text-xs text-muted-foreground">
                        {entry.nyanCatFileName && <div>Nyan Cat: {entry.nyanCatFileName}</div>}
                        {entry.vaynerFileName && <div>Vayner: {entry.vaynerFileName}</div>}
                      </div>
                    )}

                    {top.length === 0 ? (
                      <p className="text-sm text-muted-foreground italic">
                        This run had no visible trends.
                      </p>
                    ) : (
                      <div className="space-y-3">
                        {top.map((trend) => (
                          <div
                            key={trend.id}
                            className="p-4 bg-muted/50 rounded-lg"
                          >
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                                #{trend.rank}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                  <h4 className="text-foreground font-medium">{trend.topicName}</h4>
                                  <div className="text-right flex-shrink-0">
                                    <div className="text-xl font-bold text-foreground">
                                      {typeof trend.score === 'number' ? Math.round(trend.score) : '—'}
                                    </div>
                                    <div className="text-xs text-muted-foreground">Score</div>
                                  </div>
                                </div>
                                {trend.description && (
                                  <p className="text-foreground text-sm mb-3 line-clamp-2">
                                    {trend.description}
                                  </p>
                                )}
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className={`px-2 py-1 rounded-full text-xs ${getSourceBadgeColor(trend.source)}`}>
                                    {trend.source}
                                  </span>
                                  {trend.targetDemo && (
                                    <span className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                                      {trend.targetDemo}
                                    </span>
                                  )}
                                  {trend.referenceLink && (
                                    <a
                                      href={trend.referenceLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-primary hover:underline text-xs"
                                    >
                                      <ExternalLink className="size-3" />
                                      View reference
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
