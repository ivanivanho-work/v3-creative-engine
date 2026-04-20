/**
 * Upload template specs — MUST stay in sync with the backend parsers:
 *   functions/src/shorts-intel-hub/analysis/parseVayner.js
 *   functions/src/shorts-intel-hub/analysis/parseNyanCat.js
 *
 * When parsers gain or rename a column, update this file in the same PR.
 */

export interface TemplateField {
  name: string;             // Exact CSV header the parser reads
  required: boolean;
  description: string;
  allowedValues?: string[]; // Closed enum — rows with other values are coerced/ignored
  example?: string;
}

export interface TemplateSpec {
  id: 'vayner' | 'nyancat';
  title: string;
  subtitle: string;
  filename: string;
  rowGranularity: string;
  groupedBy?: string;
  fields: TemplateField[];
  notes: string[];
}

// ---------------------------------------------------------------------------
// Vayner (trend-level, curated)
// ---------------------------------------------------------------------------
export const VAYNER_TEMPLATE: TemplateSpec = {
  id: 'vayner',
  title: 'Vayner CSV (External, trend-level)',
  subtitle: 'One row per curated trend.',
  filename: 'vayner-template.csv',
  rowGranularity: 'One row per trend.',
  fields: [
    { name: 'Topic Name', required: true, description: 'Short name of the trend', example: 'Eid Modest Fashion Transitions' },
    { name: 'Description', required: true, description: 'One-liner summary of the trend', example: 'GRWM-style transitions showcasing modest Eid outfits' },
    { name: 'Target Demo', required: false, description: 'Primary demo (free text)', example: 'Females 18-34' },
    { name: 'Reference Links', required: false, description: 'Direct link to a reference video', example: 'https://youtube.com/shorts/abc123' },
    { name: 'Hashtags (comma-separated)', required: false, description: 'Comma-separated hashtags', example: '#eid, #modest, #grwm' },
    { name: 'Audio Track', required: false, description: 'Audio track name if applicable', example: 'Aashiqui (Abdul Hannan)' },
    { name: 'Content Quality', required: true, description: 'Quality gate — controls AI slop filtering', allowedValues: ['Not AI Slop', 'Potential AI Slop', 'AI Slop', ''] },
    { name: 'Brand Safe', required: true, description: 'Hard filter — No hides the trend from default view', allowedValues: ['Yes', 'No'] },
    { name: 'User Sentiment', required: true, description: 'Audience sentiment — Negative hides the trend', allowedValues: ['Positive', 'Mix-Sentiment', 'Negative', 'Neutral'] },
    { name: 'Trend Velocity', required: true, description: 'ERS velocity multiplier input', allowedValues: ['Trending', 'Emerging', 'Niche'] },
    { name: 'Trend Bucket', required: false, description: 'Free-text category bucket', example: 'Lifestyle' },
    { name: 'Creation Complexity (Ease of Participation)', required: false, description: 'How hard it is for creators to participate', allowedValues: ['Easy', 'Medium', 'Hard'] },
    { name: 'Trend Scale (Creation-led/Viewer-led)', required: false, description: 'Who drives the trend', allowedValues: ['Creation-Led', 'Viewer-led'] },
    { name: 'Platforms Trending', required: false, description: 'Comma-separated platforms', example: 'YT Shorts, TikTok, IG Reels' },
    { name: 'Primary Markets', required: false, description: 'Comma-separated ISO / region codes', example: 'JP, KR' },
    { name: 'Secondary Markets', required: false, description: 'Comma-separated ISO / region codes', example: 'ID, IN' },
    { name: 'Platform Origin', required: false, description: 'Originating platform — triggers ERS origin boost if "YT Shorts"', example: 'YT Shorts' },
    { name: 'AI Tool', required: false, description: 'AI tool referenced in the trend (if any)', example: 'Sora' },
    { name: 'GenAI/non-GenAI', required: false, description: 'Whether the trend is AI-generated', allowedValues: ['GenAI', 'non-GenAI'] },
    { name: 'Initial Trigger', required: false, description: 'What kicked the trend off', example: 'Viral TikTok from @creator' },
    { name: 'Engagement Rate', required: false, description: 'Decimal engagement rate (e.g. 0.085 = 8.5%)', example: '0.085' },
    { name: 'Views', required: true, description: 'Aggregate view count', example: '2500000' },
    { name: 'Likes', required: true, description: 'Aggregate likes', example: '180000' },
    { name: 'Comments', required: true, description: 'Aggregate comments', example: '12000' },
    { name: 'Shares (TT-only', required: false, description: 'TikTok shares (header includes leading paren as-is)', example: '5400' },
    { name: 'Saves (TT-only)', required: false, description: 'TikTok saves', example: '3200' },
    { name: 'Creator Subscriber Count', required: false, description: 'Subscribers of the primary creator (drives breakout multiplier)', example: '120000' },
    { name: 'Publication Date', required: false, description: 'Anything Date.parse understands — "March 25, 2026", ISO, etc.', example: '2026-03-25' },
    { name: 'Date Identified', required: false, description: 'When the trend was first curated', example: '2026-03-28' },
  ],
  notes: [
    'Hard filters — rows matching any of these are scored 0 and hidden: `Brand Safe=No`, `Content Quality=AI Slop`, `User Sentiment=Negative`.',
    '`Content Quality=Potential AI Slop` surfaces the trend with a "For quality review" pill and applies the Potential AI Slop multiplier from Scoring Settings.',
    '`Creator Subscriber Count` drives the breakout multiplier: views > subs × heavyThreshold → heavy; views > subs → light.',
    'A blank cell is treated as "missing" — the scorer falls back to neutral defaults for that signal.',
  ],
};

// ---------------------------------------------------------------------------
// Nyan Cat (video-level, raw)
// ---------------------------------------------------------------------------
export const NYANCAT_TEMPLATE: TemplateSpec = {
  id: 'nyancat',
  title: 'Nyan Cat CSV (Internal, video-level)',
  subtitle: 'One row per YouTube Short. Rows are grouped by audio_id into trends.',
  filename: 'nyancat-template.csv',
  rowGranularity: 'One row per YouTube Short.',
  groupedBy: 'audio_id',
  fields: [
    // Identity
    { name: 'external_video_id', required: true, description: 'Unique YouTube video ID', example: 'dQw4w9WgXcQ' },
    { name: 'audio_id', required: true, description: 'Audio / sound ID — videos are grouped by this into trends', example: 'aud_abc123' },
    { name: 'Song_title', required: true, description: 'Human-readable audio name — becomes the trend name', example: 'Aashiqui (Abdul Hannan)' },
    { name: 'Song_link', required: false, description: 'Link to the audio reference', example: 'https://youtube.com/shorts/xyz' },
    { name: 'Shorts_link', required: false, description: 'Link to this video (used as the reference link for the trend)', example: 'https://youtube.com/shorts/abc' },
    { name: 'title', required: false, description: 'Video title — used as description if the audio group has a single video', example: 'My Eid GRWM ✨' },
    { name: 'shorts_video_published_date', required: true, description: 'ISO date the video was published', example: '2026-03-22' },
    { name: 'Hashtags', required: false, description: 'JSON array string, e.g. ["#eid","#grwm"]', example: '["#eid","#grwm"]' },

    // Creator demographics
    { name: 'creator_age_bucket', required: false, description: 'Creator age bucket', allowedValues: ['AGE_13_17', 'AGE_18_24', 'AGE_25_34', 'AGE_35_44', 'AGE_45_54'] },
    { name: 'creator_gender', required: false, description: 'Creator gender code', allowedValues: ['f', 'm'] },
    { name: 'shorts_video_upload_country', required: false, description: 'ISO country code — JP/KR/IN/ID/AU/NZ are mapped to market regions', example: 'JP' },

    // Safety / quality
    { name: 'elmo_bucket', required: true, description: 'Safety classifier bucket — anything not TRUSTED or LOW_RISK marks the trend unsafe', allowedValues: ['TRUSTED', 'LOW_RISK', 'MEDIUM_RISK', 'HIGH_RISK', 'UNKNOWN'] },
    { name: 'visual_quality_score', required: true, description: '0–1 score. Group avg <0.3 → AI Slop (hidden); <0.45 → Potential AI Slop', example: '0.72' },
    { name: 'audio_quality_score', required: true, description: '0–1 score used by IRS quality gate', example: '0.81' },

    // Current 3D window metrics (used by trend aggregation)
    { name: 'Views_3D', required: true, description: 'Views in the first 3 days (summed across the audio group)', example: '125000' },
    { name: 'watch_time_hour_3D', required: true, description: 'Watch-time hours in the first 3 days', example: '6200' },
    { name: 'engagement_3D', required: true, description: 'Engagement count (likes + comments, approx) over 3 days', example: '14500' },
    { name: 'downstream_uploads_3d_by_shorts_video_published_date', required: true, description: 'Downstream uploads in 3 days — drives Trending/Emerging/Niche classification', example: '48' },
    { name: 'Total_followers_at_video_published_date', required: true, description: 'Subscribers the creator had when publishing — drives reach ratio', example: '82000' },

    // IRS window metrics (required for accurate Internal Ranking Score)
    { name: 'Views_1D', required: true, description: 'Views on day 1 — IRS predictive velocity input', example: '38000' },
    { name: 'Views_7D', required: true, description: 'Views in the first 7 days — IRS performance efficiency input', example: '240000' },
    { name: 'watch_time_hour_7D', required: true, description: 'Watch-time hours in the first 7 days', example: '11500' },
    { name: 'engagement_7D', required: true, description: 'Engagement count over 7 days', example: '28000' },
    { name: 'potential_watch_time_hour_7D', required: true, description: 'Max possible watch-time — denominator for IRS stickiness ratio', example: '16000' },
    { name: 'downstream_uploads_7d_by_shorts_video_published_date', required: true, description: 'Downstream uploads in 7 days — IRS additive creation bonus', example: '112' },
    { name: 'linear_reg_7d_pred', required: false, description: 'Linear-regression prediction multiplier for IRS velocity (defaults to 1.0)', example: '1.15' },
    { name: 'Is_CPM_Creator', required: false, description: 'Monetization flag — triggers IRS commercial multiplier', allowedValues: ['true', 'false', 'yes', 'no', '1', '0'] },
    { name: 'monetization_enabled_avod', required: false, description: 'AVOD monetization flag — also triggers IRS commercial multiplier', allowedValues: ['true', 'false', 'yes', 'no', '1', '0'] },

    // Optional IRS boosters
    { name: 'shorts_creation_tools_uploads_lifetime', required: false, description: 'Optional IRS booster — triggers tools multiplier when above threshold', example: '240' },
    { name: 'creator_country_code', required: false, description: 'Optional IRS geo booster — comma-separated ISO codes scale the multiplier', example: 'JP,KR' },
  ],
  notes: [
    'Rows are grouped by `audio_id` into trends; `Song_title` becomes the trend name.',
    'Hard safety filters match Vayner — any non-TRUSTED/LOW_RISK `elmo_bucket` in the group marks the trend as unsafe; avg `visual_quality_score` <0.3 hides the trend.',
    'IRS scores each row then averages across the audio group. Missing IRS fields fall back to neutral defaults (visual/audio quality default to 0.5, monetization to 1.0).',
    '`Hashtags` must be a JSON-array string — rows with malformed JSON are skipped rather than failing the upload.',
  ],
};

// ---------------------------------------------------------------------------
// Helpers — emit real CSVs from the spec
// ---------------------------------------------------------------------------

/**
 * CSV-escape a cell: wrap in quotes if it contains comma, quote, or newline.
 */
function csvCell(v: string): string {
  if (v === undefined || v === null) return '';
  const s = String(v);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

/**
 * Build a two-row CSV (header row + example row) from a TemplateSpec.
 */
export function buildCsv(spec: TemplateSpec): string {
  const headers = spec.fields.map((f) => csvCell(f.name)).join(',');
  const example = spec.fields.map((f) => csvCell(f.example ?? '')).join(',');
  return `${headers}\n${example}\n`;
}

/**
 * Build a human-readable markdown guide covering both formats.
 */
export function buildMarkdownGuide(): string {
  const section = (spec: TemplateSpec) => {
    const lines: string[] = [];
    lines.push(`## ${spec.title}`);
    lines.push('');
    lines.push(spec.subtitle);
    if (spec.groupedBy) lines.push(`Grouped by: \`${spec.groupedBy}\``);
    lines.push('');
    lines.push('| Column | Required | Description |');
    lines.push('|---|---|---|');
    for (const f of spec.fields) {
      const desc = f.allowedValues
        ? `${f.description} (values: ${f.allowedValues.map((v) => v === '' ? '*(blank)*' : `\`${v}\``).join(', ')})`
        : f.description;
      lines.push(`| \`${f.name}\` | ${f.required ? 'Yes' : 'No'} | ${desc} |`);
    }
    lines.push('');
    lines.push('### Notes');
    for (const n of spec.notes) lines.push(`- ${n}`);
    lines.push('');
    return lines.join('\n');
  };

  return [
    '# Shorts Intel Hub — CSV Upload Spec',
    '',
    'Two CSV formats are supported. The server auto-detects the format from the headers — there is no source flag to set.',
    '',
    '---',
    '',
    section(NYANCAT_TEMPLATE),
    '---',
    '',
    section(VAYNER_TEMPLATE),
    '---',
    '',
    '## Tips',
    '',
    '1. Export directly from your pipeline — the parser handles quoted/multi-line fields per RFC 4180.',
    '2. CSV only. JSON is not supported.',
    '3. After uploading both files, switch to the Marketing Dashboard and click "Run Matching + Ranking" to generate the three-track view.',
    '4. These templates are kept in sync with the backend parsers. If your export has extra columns the parser ignores them; if it is missing required columns those signals fall back to neutral defaults.',
    '',
  ].join('\n');
}

/**
 * Trigger a browser download for a given text blob.
 */
export function downloadText(content: string, filename: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
