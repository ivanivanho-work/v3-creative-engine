import { useEffect, useState } from 'react';
import { Save, RotateCcw, Info } from 'lucide-react';
import { DEFAULT_SCORING_CONFIG, type ScoringConfig } from '@/types';
import { getRankingConfig, updateRankingConfig } from '@/services/api';

type NumberField = {
  label: string;
  description: string;
  path: (keyof ScoringConfig | string)[];
  step?: number;
  min?: number;
  max?: number;
};

type Section = {
  title: string;
  description: string;
  group: 'ERS' | 'IRS';
  fields: NumberField[];
};

const SECTIONS: Section[] = [
  {
    title: 'Velocity Multiplier',
    description: 'Multiplier applied based on Vayner Trend Velocity tag.',
    group: 'ERS',
    fields: [
      { label: 'Trending', description: 'Applied when Trend Velocity = Trending', path: ['velocity', 'trending'], step: 0.1 },
      { label: 'Emerging', description: 'Applied when Trend Velocity = Emerging', path: ['velocity', 'emerging'], step: 0.1 },
      { label: 'Niche', description: 'Applied when Trend Velocity = Niche', path: ['velocity', 'niche'], step: 0.1 },
    ],
  },
  {
    title: 'Breakout Multiplier',
    description: 'Boost based on views relative to creator subs.',
    group: 'ERS',
    fields: [
      { label: 'Heavy multiplier', description: 'Applied when views > subs × threshold', path: ['breakout', 'heavyMultiplier'], step: 0.1 },
      { label: 'Light multiplier', description: 'Applied when views > subs', path: ['breakout', 'lightMultiplier'], step: 0.1 },
      { label: 'Base multiplier', description: 'Applied otherwise', path: ['breakout', 'baseMultiplier'], step: 0.1 },
      { label: 'Heavy threshold', description: 'Multiple of subs for "heavy" breakout', path: ['breakout', 'heavyThreshold'], step: 1, min: 1 },
    ],
  },
  {
    title: 'Participation & Replicability',
    description: 'How trend scale and creation complexity affect the score.',
    group: 'ERS',
    fields: [
      { label: 'Creation-Led scale', description: 'Applied to Creation-Led / Creator-Led trends', path: ['scale', 'creatorLed'], step: 0.1 },
      { label: 'Viewer-led scale', description: 'Applied to Viewer-led trends', path: ['scale', 'viewerLed'], step: 0.1 },
      { label: 'Easy complexity', description: 'Easy or Low complexity', path: ['complexity', 'easy'], step: 0.1 },
      { label: 'Medium complexity', description: 'Medium complexity', path: ['complexity', 'medium'], step: 0.1 },
      { label: 'Hard complexity', description: 'Hard complexity', path: ['complexity', 'hard'], step: 0.1 },
    ],
  },
  {
    title: 'Distribution & Ubiquity',
    description: 'Boost per platform and per market the trend appears in.',
    group: 'ERS',
    fields: [
      { label: 'Per-platform boost', description: 'Added per platform listed (e.g. 0.2 = +20% per platform)', path: ['distribution', 'perPlatformBoost'], step: 0.05 },
      { label: 'Per-market boost', description: 'Added per primary market listed', path: ['distribution', 'perMarketBoost'], step: 0.05 },
    ],
  },
  {
    title: 'Freshness',
    description: 'Reward trends caught early; penalize stale ones.',
    group: 'ERS',
    fields: [
      { label: 'Recent days threshold', description: 'If identified within N days of publication, apply 1 + 1/days boost', path: ['freshness', 'recentDays'], step: 1, min: 1 },
      { label: 'Stale days threshold', description: 'Beyond N days, apply stale penalty', path: ['freshness', 'staleDays'], step: 1, min: 1 },
      { label: 'Stale penalty', description: 'Multiplier applied when stale', path: ['freshness', 'stalePenalty'], step: 0.05, max: 1 },
    ],
  },
  {
    title: 'Quality & Origin',
    description: 'Downweight Potential AI Slop and boost YT Shorts origin.',
    group: 'ERS',
    fields: [
      { label: 'Potential AI Slop multiplier', description: 'Applied to trends flagged Potential AI Slop', path: ['quality', 'potentialSlopMultiplier'], step: 0.05, max: 1 },
      { label: 'YT Shorts origin boost', description: 'Applied when Platform Origin includes YT Shorts', path: ['origin', 'youtubeShortsBoost'], step: 0.1 },
    ],
  },

  // IRS — Internal Ranking Score (Nyan Cat)
  {
    title: 'Monetization',
    description: 'Boost applied to CPM creators or videos with AVOD monetization enabled.',
    group: 'IRS',
    fields: [
      { label: 'Commercial multiplier', description: 'Applied when Is_CPM_Creator or monetization_enabled_avod is true', path: ['irs', 'monetization', 'commercialMultiplier'], step: 0.05 },
    ],
  },
  {
    title: 'Stickiness Ratio',
    description: 'Clamp range for watch_time / potential_watch_time ratio.',
    group: 'IRS',
    fields: [
      { label: 'Min stickiness', description: 'Lower clamp — raw ratios below this are pulled up', path: ['irs', 'stickiness', 'min'], step: 0.05, min: 0 },
      { label: 'Max stickiness', description: 'Upper clamp — raw ratios above this are pulled down', path: ['irs', 'stickiness', 'max'], step: 0.05, min: 0 },
    ],
  },
  {
    title: 'Quality Default',
    description: 'Fallback score used when a video has missing visual or audio quality signals.',
    group: 'IRS',
    fields: [
      { label: 'Default quality score', description: 'Used when visual_quality_score or audio_quality_score is missing (0–1)', path: ['irs', 'quality', 'defaultScore'], step: 0.05, min: 0, max: 1 },
    ],
  },
  {
    title: 'Creation Anchor',
    description: 'Additive bonus per downstream upload — rewards trends driving creator participation.',
    group: 'IRS',
    fields: [
      { label: 'Bonus per upload', description: 'Points added for each downstream_uploads_7d (additive, not multiplicative)', path: ['irs', 'creation', 'bonusPerUpload'], step: 1, min: 0 },
    ],
  },
  {
    title: 'Optional Booster: Creation Tools',
    description: 'Extra multiplier for creators who heavily use shorts creation tools.',
    group: 'IRS',
    fields: [
      { label: 'Uploads threshold', description: 'shorts_creation_tools_uploads_lifetime must exceed this to trigger', path: ['irs', 'boosters', 'tools', 'threshold'], step: 10, min: 0 },
      { label: 'Tools multiplier', description: 'Applied once threshold is met', path: ['irs', 'boosters', 'tools', 'multiplier'], step: 0.05, min: 1 },
    ],
  },
  {
    title: 'Optional Booster: Geo',
    description: 'Extra multiplier scaling with number of distinct creator countries.',
    group: 'IRS',
    fields: [
      { label: 'Per-country boost', description: 'Added to multiplier for each listed creator country', path: ['irs', 'boosters', 'geo', 'perCountryBoost'], step: 0.01, min: 0 },
      { label: 'Max multiplier', description: 'Ceiling for the geo booster regardless of country count', path: ['irs', 'boosters', 'geo', 'maxMultiplier'], step: 0.05, min: 1 },
    ],
  },
];

const ERS_SECTIONS = SECTIONS.filter((s) => s.group === 'ERS');
const IRS_SECTIONS = SECTIONS.filter((s) => s.group === 'IRS');

function getPath(obj: any, path: string[]): number {
  return path.reduce((acc, k) => (acc == null ? acc : acc[k]), obj) ?? 0;
}

function setPath(obj: any, path: string[], value: number): ScoringConfig {
  const next = JSON.parse(JSON.stringify(obj));
  let cursor = next;
  for (let i = 0; i < path.length - 1; i++) cursor = cursor[path[i]];
  cursor[path[path.length - 1]] = value;
  return next;
}

export function ScoringSettings() {
  const [config, setConfig] = useState<ScoringConfig>(DEFAULT_SCORING_CONFIG);
  const [initial, setInitial] = useState<ScoringConfig>(DEFAULT_SCORING_CONFIG);
  const [hasChanges, setHasChanges] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getRankingConfig()
      .then((res) => {
        if (cancelled) return;
        setConfig(res.config);
        setInitial(res.config);
      })
      .catch(() => {
        // Offline / backend unavailable — fall back to defaults silently.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const updateValue = (path: string[], value: number) => {
    setConfig((prev) => {
      const next = setPath(prev, path, value);
      setHasChanges(true);
      return next;
    });
  };

  const toggleSlopHidden = () => {
    setConfig((prev) => ({ ...prev, quality: { ...prev.quality, slopHidden: !prev.quality.slopHidden } }));
    setHasChanges(true);
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    setNotice(null);
    try {
      const res = await updateRankingConfig(config);
      setInitial(res.config);
      setConfig(res.config);
      setHasChanges(false);
      setNotice('Scoring config saved — ranking will update on next upload.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const handleReset = () => {
    setConfig(DEFAULT_SCORING_CONFIG);
    setHasChanges(JSON.stringify(DEFAULT_SCORING_CONFIG) !== JSON.stringify(initial));
  };

  return (
    <div className="max-w-4xl">
      {/* Info Banner */}
      <div className="mb-6 p-4 bg-card border border-border rounded-lg flex gap-3">
        <Info className="size-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-foreground font-medium mb-1">
            Ranking Scores — ERS (Vayner) + IRS (Nyan Cat)
          </h4>
          <p className="text-muted-foreground text-sm">
            Vayner trends are ranked by <strong>ERS</strong> (External Ranking
            Score) and Nyan Cat trends by <strong>IRS</strong> (Internal
            Ranking Score). Both pipelines apply the same hard safety filters
            upstream — Brand Safe=No, negative sentiment, or AI Slop → hidden.
            Tune the multipliers below; changes take effect on the next upload.
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg border border-red-500/50 bg-red-500/10 text-red-500 text-sm">
          {error}
        </div>
      )}
      {notice && (
        <div className="mb-4 p-3 rounded-lg border border-green-500/50 bg-green-500/10 text-green-600 text-sm">
          {notice}
        </div>
      )}

      {/* ERS Sections */}
      <div className="mb-3 pt-2">
        <h3 className="text-foreground font-semibold">ERS — External Ranking Score (Vayner)</h3>
        <p className="text-xs text-muted-foreground">
          Applied to curated Vayner trend-level rows.
        </p>
      </div>
      {ERS_SECTIONS.map((section) => (
        <div key={section.title} className="mb-6 bg-card border border-border rounded-lg p-5">
          <div className="mb-4">
            <h4 className="text-foreground font-medium mb-1">{section.title}</h4>
            <p className="text-muted-foreground text-sm">{section.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.fields.map((field) => {
              const path = field.path as string[];
              const value = getPath(config, path);
              return (
                <div key={path.join('.')} className="p-3 rounded-lg bg-muted">
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {field.label}
                  </label>
                  <p className="text-xs text-muted-foreground mb-2">{field.description}</p>
                  <input
                    type="number"
                    step={field.step ?? 0.01}
                    min={field.min}
                    max={field.max}
                    value={value}
                    onChange={(e) => updateValue(path, parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground"
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* IRS Sections */}
      <div className="mb-3 pt-4 border-t border-border">
        <h3 className="text-foreground font-semibold mt-4">IRS — Internal Ranking Score (Nyan Cat)</h3>
        <p className="text-xs text-muted-foreground">
          Scored per video then aggregated by audio_id. Core signals (performance,
          velocity, quality, stickiness) come straight from the Nyan Cat feed.
        </p>
      </div>
      {IRS_SECTIONS.map((section) => (
        <div key={section.title} className="mb-6 bg-card border border-border rounded-lg p-5">
          <div className="mb-4">
            <h4 className="text-foreground font-medium mb-1">{section.title}</h4>
            <p className="text-muted-foreground text-sm">{section.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.fields.map((field) => {
              const path = field.path as string[];
              const value = getPath(config, path);
              return (
                <div key={path.join('.')} className="p-3 rounded-lg bg-muted">
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {field.label}
                  </label>
                  <p className="text-xs text-muted-foreground mb-2">{field.description}</p>
                  <input
                    type="number"
                    step={field.step ?? 0.01}
                    min={field.min}
                    max={field.max}
                    value={value}
                    onChange={(e) => updateValue(path, parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground"
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Toggle: slop hidden */}
      <div className="mb-6 bg-card border border-border rounded-lg p-5 flex items-center justify-between">
        <div>
          <h4 className="text-foreground font-medium mb-1">Hide AI Slop by default</h4>
          <p className="text-muted-foreground text-sm">
            When on, trends tagged AI Slop are hidden from dashboards. Turn off to
            include them in the ranking regardless.
          </p>
        </div>
        <button
          onClick={toggleSlopHidden}
          className={`relative w-12 h-6 rounded-full transition-colors ${
            config.quality.slopHidden ? 'bg-primary' : 'bg-muted-foreground/30'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
              config.quality.slopHidden ? 'translate-x-6' : ''
            }`}
          />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleSave}
          disabled={!hasChanges || saving}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-opacity ${
            !hasChanges || saving
              ? 'bg-muted text-muted-foreground cursor-not-allowed'
              : 'bg-primary text-primary-foreground hover:opacity-90'
          }`}
        >
          <Save className="size-5" />
          {saving ? 'Saving…' : 'Save Changes'}
        </button>

        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
        >
          <RotateCcw className="size-5" />
          Reset to Defaults
        </button>
      </div>

      {/* ERS Formula explainer */}
      <div className="mt-8 p-5 bg-muted rounded-lg">
        <h4 className="text-foreground font-medium mb-3">ERS Formula (Vayner)</h4>
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed">
{`base_score = (likes + comments) / max(views, 1) * 100 * breakout_mult
context_bonus = scale × complexity × distribution × market × freshness × quality × origin
ERS = base_score × velocity × context_bonus

Hard filters → ERS = null (hidden):
  Brand Safe = No
  User Sentiment = Negative
  Content Quality = AI Slop

Soft filters → ERS reduced but visible with review pill:
  Content Quality = Potential AI Slop (× ${config.quality.potentialSlopMultiplier})`}
        </pre>
      </div>

      {/* IRS Formula explainer */}
      <div className="mt-6 p-5 bg-muted rounded-lg">
        <h4 className="text-foreground font-medium mb-3">IRS Formula (Nyan Cat)</h4>
        <pre className="text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed">
{`perf_efficiency   = log(watch_time_7D + 1) × engagement_7D × (Views_7D / max(subs, 1))
pred_velocity     = (Views_1D / max(Views_7D/7, 0.1)) × linear_reg_7d_pred
quality_scale     = (visual_quality + audio_quality) / 2
stickiness_mult   = clamp(watch_time / potential_watch_time, ${config.irs.stickiness.min}, ${config.irs.stickiness.max})
commercial_mult   = ${config.irs.monetization.commercialMultiplier} if CPM or monetized else 1.0

IRS_core  = perf_efficiency × pred_velocity × quality_scale × stickiness_mult × commercial_mult
IRS_final = IRS_core + (downstream_uploads_7d × ${config.irs.creation.bonusPerUpload})

Trend-level IRS = mean of per-video IRS across the audio_id group.

Same hard filters as ERS apply upstream (Brand Safe=No / AI Slop / Negative → hidden).`}
        </pre>
      </div>
    </div>
  );
}
