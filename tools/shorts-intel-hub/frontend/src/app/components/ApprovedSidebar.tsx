import { useMemo, useState } from 'react';
import {
  CheckCircle2, ChevronRight, ChevronLeft, Send, X, ExternalLink,
  Loader2, FileText, Check,
} from 'lucide-react';
import type { ApprovedBatch } from '@/services/approvedStore';
import {
  getBatches, unapproveTrend, markBatchSent, getCurrentBatch,
} from '@/services/approvedStore';
import {
  sendBatchToAgentCollective, buildBriefMarkdown, buildBriefFilename,
  marketToKbScope, agentCollectiveUrl,
} from '@/services/agentCollective';

interface ApprovedSidebarProps {
  market: string;
  /** Bumped by parent whenever an approve/unapprove happens so we re-read. */
  version: number;
  onChanged: () => void;
}

export function ApprovedSidebar({ market, version, onChanged }: ApprovedSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  const { current, history } = useMemo(() => {
    const all = getBatches(market);
    const currentBatch = getCurrentBatch(market);
    const latest = all.find((b) => b.id === currentBatch.id) ?? currentBatch;
    const hist = all.filter((b) => b.id !== latest.id && b.sentAt);
    return { current: latest, history: hist };
    // version forces recompute after mutations
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [market, version]);

  const kbScope = marketToKbScope(market);
  const frozen = !!current.sentAt;

  const handleSend = async () => {
    setSending(true);
    setError(null);
    try {
      const res = await sendBatchToAgentCollective(current);
      markBatchSent(market, res.kbFilename, res.kbScope);
      onChanged();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Send failed');
    } finally {
      setSending(false);
    }
  };

  const handleUnapprove = (id: string) => {
    unapproveTrend(market, id);
    onChanged();
  };

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={() => setCollapsed(false)}
        className="flex flex-col items-center gap-2 px-2 py-3 rounded-l-lg border border-border bg-card hover:bg-accent"
        title="Open approved topics"
      >
        <ChevronLeft className="size-4 text-muted-foreground" />
        <CheckCircle2 className="size-5 text-green-500" />
        <span className="text-[10px] text-muted-foreground [writing-mode:vertical-rl]">
          Approved ({current.trends.length})
        </span>
      </button>
    );
  }

  return (
    <aside className="w-80 flex-shrink-0 rounded-lg border border-border bg-card flex flex-col min-h-0">
      {/* Header */}
      <div className="px-3 py-2.5 border-b border-border flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <CheckCircle2 className="size-4 text-green-500 flex-shrink-0" />
          <h3 className="text-sm font-medium text-foreground truncate">
            Approved — {current.weekId}
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setCollapsed(true)}
          className="p-1 rounded hover:bg-accent text-muted-foreground"
          aria-label="Collapse sidebar"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* Current week body */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-3 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">
              {current.trends.length} topic{current.trends.length === 1 ? '' : 's'} · {market}
            </span>
            {frozen && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px]">
                <Check className="size-2.5" />
                Sent
              </span>
            )}
          </div>

          {current.trends.length === 0 ? (
            <p className="text-xs text-muted-foreground italic py-2">
              Click Approve on any trend card to add it to this week's batch.
            </p>
          ) : (
            <ul className="space-y-1.5">
              {current.trends.map((t, i) => (
                <li
                  key={t.id}
                  className="group flex items-start gap-2 p-2 rounded bg-muted/40 text-xs"
                >
                  <span className="text-muted-foreground flex-shrink-0 w-4 text-right">
                    {i + 1}.
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-foreground font-medium leading-snug">
                      {t.topicName}
                    </div>
                    <div className="text-muted-foreground mt-0.5 truncate">
                      {t.source}{t.targetDemo ? ` · ${t.targetDemo}` : ''}
                    </div>
                  </div>
                  {!frozen && (
                    <button
                      type="button"
                      onClick={() => handleUnapprove(t.id)}
                      className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-accent text-muted-foreground flex-shrink-0"
                      aria-label={`Remove ${t.topicName}`}
                      title="Remove"
                    >
                      <X className="size-3" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sent state vs send button */}
        <div className="px-3 py-3 border-b border-border space-y-2">
          {frozen ? (
            <>
              <div className="text-[11px] text-muted-foreground">
                Sent {current.sentAt ? new Date(current.sentAt).toLocaleString() : ''}
              </div>
              {current.sentKbFilename && (
                <div className="flex items-center gap-1.5 text-[11px] text-foreground">
                  <FileText className="size-3 flex-shrink-0 text-muted-foreground" />
                  <code className="truncate">{current.sentKbFilename}</code>
                </div>
              )}
              <a
                href={agentCollectiveUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-secondary text-secondary-foreground hover:bg-accent text-xs w-full justify-center"
              >
                <ExternalLink className="size-3" />
                Open Agent Collective
              </a>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleSend}
                disabled={sending || current.trends.length === 0}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 text-xs w-full justify-center"
              >
                {sending ? <Loader2 className="size-3 animate-spin" /> : <Send className="size-3" />}
                {sending ? 'Sending…' : 'Send batch to Agent Collective'}
              </button>
              <button
                type="button"
                onClick={() => setPreviewOpen((p) => !p)}
                className="text-[11px] text-primary hover:underline"
              >
                {previewOpen ? 'Hide' : 'Preview'} brief markdown
              </button>
              <div className="text-[10px] text-muted-foreground">
                Uploads as <code>{buildBriefFilename(current)}</code> under KB scope <code>{kbScope}</code>.
              </div>
              {error && (
                <div className="p-2 rounded border border-red-500/50 bg-red-500/10 text-red-400 text-[11px]">
                  {error}
                </div>
              )}
              {previewOpen && current.trends.length > 0 && (
                <pre className="mt-2 p-2 bg-muted rounded text-[10px] text-foreground whitespace-pre-wrap max-h-64 overflow-auto">
                  {buildBriefMarkdown(current)}
                </pre>
              )}
            </>
          )}
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="px-3 py-3">
            <div className="text-[10px] uppercase text-muted-foreground mb-2">
              Past weeks
            </div>
            <ul className="space-y-1">
              {history.map((b) => (
                <HistoryRow key={b.id} batch={b} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}

function HistoryRow({ batch }: { batch: ApprovedBatch }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="rounded border border-border/60 bg-muted/30 text-[11px]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-2 py-1.5 text-left"
      >
        <span className="text-foreground">{batch.weekId}</span>
        <span className="text-muted-foreground">
          {batch.trends.length} · {batch.sentAt ? '✓' : '—'}
        </span>
      </button>
      {open && (
        <ul className="px-2 pb-2 space-y-0.5 text-muted-foreground">
          {batch.trends.slice(0, 10).map((t) => (
            <li key={t.id} className="truncate">• {t.topicName}</li>
          ))}
          {batch.trends.length > 10 && (
            <li className="italic">…{batch.trends.length - 10} more</li>
          )}
        </ul>
      )}
    </li>
  );
}
