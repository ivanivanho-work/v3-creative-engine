import { useRef, useState } from 'react';
import { Upload, Download, FileText, X } from 'lucide-react';

const templateMarkdown = `# Shorts Intel Hub - Data Upload Template

Two CSV formats are supported. The server auto-detects format from the headers.

---

## 1. Vayner (trend-level, curated)

One row per trend. Required headers:

\`\`\`
Date Identified, GenAI/non-GenAI, Topic Name, Trend Velocity, Description,
Creation Complexity (Ease of Participation), Trend Scale (Creation-led/Viewer-led),
Trend Bucket, AI Tool, Brand Safe, Content Quality, Initial Trigger,
Reference Links, Publication Date, Length of Video (sec), Creator Subscriber Count,
Views, Likes, Comments, Reposts (IG or X), Shares (TT-only, Saves (TT-only),
Engagement Rate, Hashtags (comma-separated), Audio Track, Audio Track URL,
Creation Volume, Platform Origin, Platforms Trending, Primary Markets,
Secondary Markets, Target Demo, User Sentiment, Score Ranking, Normalized
\`\`\`

### Quality gate values
- **Brand Safe**: \`Yes\` | \`No\`
- **Content Quality**: \`Not AI Slop\` | \`Potential AI Slop\` | \`AI Slop\` | (blank)
- **User Sentiment**: \`Positive\` | \`Mix-Sentiment\` | \`Negative\`
- **Trend Velocity**: \`Trending\` | \`Emerging\` | \`Niche\`
- **Creation Complexity**: \`Easy\` | \`Medium\` | \`Hard\`
- **Trend Scale**: \`Creation-Led\` | \`Viewer-led\`

Trends with \`Brand Safe=No\`, \`Content Quality=AI Slop\`, or \`User Sentiment=Negative\`
are scored as 0 and hidden by default. \`Potential AI Slop\` trends appear with a
"For quality review" pill.

---

## 2. Nyan Cat (video-level, raw)

One row per YouTube Short. The server groups by \`audio_id\` and aggregates
views, watchtime, and quality signals into trend-level rows.

Required headers:

\`\`\`
external_video_id, Shorts_link, audio_id, Song_link, Song_title,
shorts_video_published_date, title, description, Hashtags, Is_CPM_Creator,
Is_influencer, shorts_video_upload_country, yearr, length_sec,
has_video_shorts_creation, first_level_vertical_name, second_level_vertical_name,
third_level_vertical_name, lego_level_1_name, lego_level_2_name, lego_level_3_name,
creator_age_bucket, creator_gender, elmo_bucket, subs_bucket,
downstream_uploads_1d_by_shorts_video_published_date,
downstream_uploads_2d_by_shorts_video_published_date,
downstream_uploads_3d_by_shorts_video_published_date,
Views_1D, watch_time_hour_1D, potential_watch_time_hour_1D, engagement_1D,
Views_2D, watch_time_hour_2D, potential_watch_time_hour_2D, engagement_2D,
Views_3D, watch_time_hour_3D, potential_watch_time_hour_3D, engagement_3D,
Total_followers_at_video_published_date, Net_Likes_at_video_published_date,
visual_quality_score, audio_quality_score,
Net_Likes_last_30d_from_video_published_date, monetization_enabled_avod,
linear_reg_7d_pred
\`\`\`

### Inferred quality signals
- \`elmo_bucket\` not in \`TRUSTED\`/\`LOW_RISK\` anywhere in the group → Brand Safe = No
- Average \`visual_quality_score\` < 0.30 → AI Slop (hidden)
- Average \`visual_quality_score\` < 0.45 → Potential AI Slop (flagged for review)

---

## Tips

1. Export directly from your pipeline — the server handles quoted/multi-line
   fields per RFC 4180.
2. CSV only. JSON support is deprecated for batch uploads.
3. After uploading both files, switch to the Marketing Dashboard and click
   "Run Matching + Ranking" to generate the three-track view.
`;

interface CsvSlotProps {
  title: string;
  subtitle: string;
  accept: string;
  file: File | null;
  onPick: (f: File | null) => void;
}

function CsvSlot({ title, subtitle, accept, file, onPick }: CsvSlotProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) onPick(dropped);
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
        onChange={(e) => onPick(e.target.files?.[0] ?? null)}
      />

      {file ? (
        <div className="flex items-center gap-3 p-3 rounded-md bg-muted">
          <FileText className="size-5 text-primary flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-sm text-foreground truncate">{file.name}</div>
            <div className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</div>
          </div>
          <button
            type="button"
            onClick={() => onPick(null)}
            className="flex-shrink-0 p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground"
            aria-label="Remove file"
          >
            <X className="size-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-full flex flex-col items-center gap-2 py-6 rounded-md border border-dashed border-border hover:border-primary/50 hover:bg-muted transition-colors"
        >
          <Upload className="size-6 text-muted-foreground" />
          <span className="text-sm text-foreground">Drop CSV here or click to browse</span>
        </button>
      )}
    </div>
  );
}

interface DataUploadProps {
  nyanCatFile: File | null;
  vaynerFile: File | null;
  onNyanCatFileChange: (f: File | null) => void;
  onVaynerFileChange: (f: File | null) => void;
}

export function DataUpload({
  nyanCatFile,
  vaynerFile,
  onNyanCatFileChange,
  onVaynerFileChange,
}: DataUploadProps) {
  const [showTemplate, setShowTemplate] = useState(false);

  const downloadTemplate = () => {
    const blob = new Blob([templateMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'intel-hub-upload-template.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="px-6 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-card border border-border rounded-lg">
          <h3 className="text-foreground mb-2">Data Upload</h3>
          <p className="text-muted-foreground">
            Drop in the two CSVs that drive the three-track view: Nyan Cat (internal,
            video-level) and Vayner (external, trend-level). Files stay in this session —
            switch to the Marketing Dashboard and click "Run Matching + Ranking" to
            process them.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <CsvSlot
            title="Nyan Cat CSV (Internal)"
            subtitle="Video-level export. Headers: video_id, audio_id, views, watchtime…"
            accept=".csv,text/csv"
            file={nyanCatFile}
            onPick={onNyanCatFileChange}
          />
          <CsvSlot
            title="Vayner CSV (External)"
            subtitle="Trend-level export. Headers: Topic Name, Trend Velocity, Content Quality…"
            accept=".csv,text/csv"
            file={vaynerFile}
            onPick={onVaynerFileChange}
          />
        </div>

        <div className="mb-6 bg-card border border-border rounded-lg p-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-foreground mb-2">Upload Template & Guidelines</h3>
              <p className="text-muted-foreground">
                Full column specs for both Vayner and Nyan Cat CSV formats.
              </p>
            </div>
            <button
              onClick={downloadTemplate}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Download className="size-4" />
              Download Template
            </button>
          </div>

          <button
            onClick={() => setShowTemplate(!showTemplate)}
            className="text-primary hover:underline"
          >
            {showTemplate ? 'Hide' : 'Show'} Template Preview
          </button>

          {showTemplate && (
            <div className="mt-4 p-4 bg-muted rounded-lg overflow-auto max-h-96">
              <pre className="text-sm text-foreground whitespace-pre-wrap">{templateMarkdown}</pre>
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
