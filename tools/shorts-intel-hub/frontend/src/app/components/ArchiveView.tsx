import { useEffect, useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Trash2, FileText, Play } from 'lucide-react';
import {
  subscribeToArchive,
  deleteArchiveEntry,
  type ArchiveEntryFs,
} from '@/services/sharedState';

interface ArchiveViewProps {
  market: string;
}

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

export function ArchiveView({ market: _market }: ArchiveViewProps) {
  const [entries, setEntries] = useState<ArchiveEntryFs[]>([]);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsub = subscribeToArchive((next) => {
      setEntries(next);
      setHydrated(true);
      setExpandedIds((prev) => {
        if (prev.size > 0 || next.length === 0) return prev;
        return new Set([next[0].id]);
      });
    });
    return unsub;
  }, []);

  const toggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleDelete = async (id: string) => {
    await deleteArchiveEntry(id);
  };

  return (
    <div>
      <div className="mb-6 p-4 bg-card border border-border rounded-lg flex gap-3">
        <Calendar className="size-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-foreground font-medium mb-1">Historical Archive</h4>
          <p className="text-muted-foreground text-sm">
            Every CSV upload and every matching run is auto-archived here and shared
            across all visitors. Raw CSVs remain downloadable; run results link to
            the stored JSON.
          </p>
        </div>
      </div>

      {!hydrated ? (
        <div className="p-8 text-center bg-card rounded-lg border border-border">
          <p className="text-muted-foreground">Loading archive…</p>
        </div>
      ) : entries.length === 0 ? (
        <div className="p-8 text-center bg-card rounded-lg border border-border">
          <Calendar className="size-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">
            No archived entries yet. Uploading a CSV or running matching creates
            archive entries automatically.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {entries.map((entry) => {
            const isExpanded = expandedIds.has(entry.id);
            const isUpload = entry.type === 'upload';
            const Icon = isUpload ? FileText : Play;
            const iconColor = isUpload ? 'text-purple-400' : 'text-cyan-400';
            const heading = isUpload
              ? `Upload — ${entry.kind === 'nyanCat' ? 'Nyan Cat' : 'Vayner'}`
              : 'Matching run';

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
                    <Icon className={`size-5 ${iconColor}`} />
                    <div>
                      <h3 className="text-foreground font-medium">
                        {formatSavedAt(entry.createdAt)} — {heading}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {isUpload
                          ? entry.nyanCatFile?.name || entry.vaynerFile?.name || '—'
                          : entry.summary
                          ? `${entry.summary.stats.cellCount} cells · ${entry.summary.weeks.length} weeks · ${entry.summary.markets.length} markets`
                          : '—'}
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
                  <div className="border-t border-border p-5 text-sm space-y-2">
                    {entry.nyanCatFile && (
                      <div className="text-muted-foreground">
                        <span className="text-foreground">Nyan Cat:</span> {entry.nyanCatFile.name} ({(entry.nyanCatFile.size / 1024).toFixed(1)} KB)
                      </div>
                    )}
                    {entry.vaynerFile && (
                      <div className="text-muted-foreground">
                        <span className="text-foreground">Vayner:</span> {entry.vaynerFile.name} ({(entry.vaynerFile.size / 1024).toFixed(1)} KB)
                      </div>
                    )}
                    {entry.summary && (
                      <>
                        <div className="text-muted-foreground">
                          <span className="text-foreground">Markets:</span> {entry.summary.markets.join(', ') || '—'}
                        </div>
                        <div className="text-muted-foreground">
                          <span className="text-foreground">Weeks:</span> {entry.summary.weeks.join(', ') || '—'}
                        </div>
                        <div className="text-muted-foreground">
                          <span className="text-foreground">Parsed:</span> {entry.summary.stats.internalParsed} internal · {entry.summary.stats.externalParsed} external
                          {entry.summary.stats.globalInternal + entry.summary.stats.globalExternal > 0 && (
                            <> · {entry.summary.stats.globalInternal + entry.summary.stats.globalExternal} Global</>
                          )}
                        </div>
                        {entry.summary.stats.internalSkippedNoWeek + entry.summary.stats.externalSkippedNoWeek > 0 && (
                          <div className="text-yellow-500">
                            {entry.summary.stats.internalSkippedNoWeek + entry.summary.stats.externalSkippedNoWeek} trends skipped (no date)
                          </div>
                        )}
                      </>
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
