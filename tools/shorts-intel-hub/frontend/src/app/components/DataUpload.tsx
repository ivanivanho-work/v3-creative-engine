import { useRef, useState } from 'react';
import { Upload, Download, FileText, X, Loader2 } from 'lucide-react';
import {
  NYANCAT_TEMPLATE,
  VAYNER_TEMPLATE,
  buildCsv,
  buildMarkdownGuide,
  downloadText,
  type TemplateSpec,
} from '@/services/uploadTemplates';
import {
  uploadCsv,
  clearCurrentFile,
  type SharedState,
  type UploadKind,
  type UploadedFileRef,
} from '@/services/sharedState';

interface CsvSlotProps {
  title: string;
  subtitle: string;
  accept: string;
  fileRef: UploadedFileRef | null;
  kind: UploadKind;
}

function CsvSlot({ title, subtitle, accept, fileRef, kind }: CsvSlotProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePick = async (file: File | null) => {
    setError(null);
    if (!file) {
      setBusy(true);
      try {
        await clearCurrentFile(kind);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to clear file');
      } finally {
        setBusy(false);
      }
      return;
    }
    setBusy(true);
    try {
      await uploadCsv(kind, file);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Upload failed');
    } finally {
      setBusy(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) handlePick(dropped);
  };

  return (
    <div
      className={`flex-1 min-w-[280px] rounded-lg border-2 border-dashed p-6 transition-colors ${
        isDragging ? 'border-primary bg-primary/5' : 'border-border bg-card hover:border-primary/50'
      }`}
      onDragEnter={(e) => { e.preventDefault(); e.stopPropagation(); setIsDragging(true); }}
      onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
      onDragLeave={(e) => { e.preventDefault(); e.stopPropagation(); setIsDragging(false); }}
      onDrop={handleDrop}
    >
      <div className="mb-3">
        <h4 className="text-foreground font-medium mb-1">{title}</h4>
        <p className="text-muted-foreground text-xs">{subtitle}</p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handlePick(e.target.files?.[0] ?? null)}
      />

      {fileRef ? (
        <div className="flex items-center gap-3 p-3 rounded-md bg-muted">
          <FileText className="size-5 text-primary flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-sm text-foreground truncate">{fileRef.name}</div>
            <div className="text-xs text-muted-foreground">
              {(fileRef.size / 1024).toFixed(1)} KB · uploaded {new Date(fileRef.uploadedAt).toLocaleString()}
            </div>
          </div>
          <button
            type="button"
            onClick={() => handlePick(null)}
            disabled={busy}
            className="flex-shrink-0 p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground disabled:opacity-50"
            aria-label="Remove file"
          >
            {busy ? <Loader2 className="size-4 animate-spin" /> : <X className="size-4" />}
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
          className="w-full flex flex-col items-center gap-2 py-6 rounded-md border border-dashed border-border hover:border-primary/50 hover:bg-muted transition-colors disabled:opacity-60"
        >
          {busy ? (
            <>
              <Loader2 className="size-6 text-muted-foreground animate-spin" />
              <span className="text-sm text-foreground">Uploading…</span>
            </>
          ) : (
            <>
              <Upload className="size-6 text-muted-foreground" />
              <span className="text-sm text-foreground">Drop CSV here or click to browse</span>
            </>
          )}
        </button>
      )}

      {error && (
        <div className="mt-2 text-xs text-red-500">{error}</div>
      )}
    </div>
  );
}

interface DataUploadProps {
  state: SharedState;
  hydrated: boolean;
}

function FieldTable({ spec }: { spec: TemplateSpec }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs text-foreground">
        <thead>
          <tr className="border-b border-border text-muted-foreground">
            <th className="text-left py-2 pr-3 font-medium">Column</th>
            <th className="text-left py-2 pr-3 font-medium w-[70px]">Required</th>
            <th className="text-left py-2 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {spec.fields.map((f) => (
            <tr key={f.name} className="border-b border-border/40 align-top">
              <td className="py-2 pr-3 font-mono text-[11px] whitespace-nowrap">{f.name}</td>
              <td className="py-2 pr-3">
                {f.required ? (
                  <span className="px-1.5 py-0.5 rounded bg-primary/15 text-primary text-[10px] font-medium">Yes</span>
                ) : (
                  <span className="text-muted-foreground text-[10px]">No</span>
                )}
              </td>
              <td className="py-2 pr-3 text-muted-foreground">
                {f.description}
                {f.allowedValues && (
                  <div className="mt-1 flex flex-wrap gap-1">
                    {f.allowedValues.map((v) => (
                      <code key={v} className="px-1 py-0.5 rounded bg-muted text-foreground text-[10px]">
                        {v === '' ? '(blank)' : v}
                      </code>
                    ))}
                  </div>
                )}
                {f.example && !f.allowedValues && (
                  <div className="mt-1 text-[10px] text-muted-foreground/70">
                    e.g. <code className="text-foreground">{f.example}</code>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {spec.notes.length > 0 && (
        <div className="mt-4 space-y-1 text-xs text-muted-foreground">
          {spec.notes.map((n, i) => (
            <p key={i}>• {n}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export function DataUpload({ state, hydrated }: DataUploadProps) {
  const [activeSpec, setActiveSpec] = useState<'nyancat' | 'vayner'>('nyancat');
  const [showGuide, setShowGuide] = useState(false);

  const spec = activeSpec === 'nyancat' ? NYANCAT_TEMPLATE : VAYNER_TEMPLATE;
  const guideMarkdown = buildMarkdownGuide();

  const handleDownloadCsv = (s: TemplateSpec) => {
    downloadText(buildCsv(s), s.filename, 'text/csv');
  };

  const handleDownloadGuide = () => {
    downloadText(guideMarkdown, 'intel-hub-upload-guide.md', 'text/markdown');
  };

  return (
    <div className="px-6 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-card border border-border rounded-lg">
          <h3 className="text-foreground mb-2">Data Upload</h3>
          <p className="text-muted-foreground">
            Drop in the two CSVs that drive the three-track view: Nyan Cat (internal,
            video-level) and Vayner (external, trend-level). Files upload to shared
            storage — everyone viewing the Hub sees the same dataset. Switch to the
            Marketing Dashboard and click "Run Matching + Ranking" to process them.
          </p>
          {!hydrated && (
            <p className="text-muted-foreground text-xs mt-2">Loading latest shared state…</p>
          )}
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <CsvSlot
            title="Nyan Cat CSV (Internal)"
            subtitle={`Video-level export — ${NYANCAT_TEMPLATE.fields.length} columns, grouped by audio_id.`}
            accept=".csv,text/csv"
            fileRef={state.nyanCat}
            kind="nyanCat"
          />
          <CsvSlot
            title="Vayner CSV (External)"
            subtitle={`Trend-level export — ${VAYNER_TEMPLATE.fields.length} columns, one row per trend.`}
            accept=".csv,text/csv"
            fileRef={state.vayner}
            kind="vayner"
          />
        </div>

        <div className="mb-6 bg-card border border-border rounded-lg p-5">
          <div className="flex items-start justify-between mb-4 gap-4 flex-wrap">
            <div className="flex-1 min-w-[240px]">
              <h3 className="text-foreground mb-2">Upload Templates & Field Reference</h3>
              <p className="text-muted-foreground text-sm">
                Two separate CSV templates — one per format. Each template includes the
                exact header row the parser reads plus one example row. Column specs
                below are generated from the parsers directly, so they stay in sync as
                the schemas evolve.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleDownloadCsv(NYANCAT_TEMPLATE)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm"
              >
                <Download className="size-4" />
                Nyan Cat template (.csv)
              </button>
              <button
                onClick={() => handleDownloadCsv(VAYNER_TEMPLATE)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm"
              >
                <Download className="size-4" />
                Vayner template (.csv)
              </button>
              <button
                onClick={handleDownloadGuide}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors text-sm"
              >
                <Download className="size-4" />
                Full guide (.md)
              </button>
            </div>
          </div>

          <div className="mb-4 flex gap-2 border-b border-border">
            <button
              onClick={() => setActiveSpec('nyancat')}
              className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                activeSpec === 'nyancat' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Nyan Cat ({NYANCAT_TEMPLATE.fields.length})
              {activeSpec === 'nyancat' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveSpec('vayner')}
              className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                activeSpec === 'vayner' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Vayner ({VAYNER_TEMPLATE.fields.length})
              {activeSpec === 'vayner' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>

          <div className="mb-4">
            <h4 className="text-foreground text-sm font-medium mb-1">{spec.title}</h4>
            <p className="text-xs text-muted-foreground">{spec.subtitle}</p>
          </div>

          <FieldTable spec={spec} />

          <button
            onClick={() => setShowGuide(!showGuide)}
            className="mt-4 text-primary hover:underline text-sm"
          >
            {showGuide ? 'Hide' : 'Show'} markdown guide preview
          </button>

          {showGuide && (
            <div className="mt-3 p-4 bg-muted rounded-lg overflow-auto max-h-96">
              <pre className="text-xs text-foreground whitespace-pre-wrap">{guideMarkdown}</pre>
            </div>
          )}
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <h4 className="text-foreground mb-2">Need Help?</h4>
          <p className="text-muted-foreground text-sm">
            For questions about data format or submission guidelines, contact the APAC
            Shorts Intel Hub team at{' '}
            <span className="text-primary">shorts-intel@example.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
