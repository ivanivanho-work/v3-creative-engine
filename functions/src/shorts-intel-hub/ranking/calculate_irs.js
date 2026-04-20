/**
 * Internal Ranking Score (IRS)
 *
 * Ported from calculate_irs_v2 (Python reference). IRS scores Nyan Cat
 * video-level rows on performance, predictive velocity, quality, stickiness,
 * monetization, and creation anchor. At trend-level (aggregated by audio_id),
 * we score each video and take the mean as the trend's IRS.
 *
 * Hard safety filters (brandSafe / AI Slop) run upstream in rankInternalTrends
 * — IRS itself assumes input is already safety-filtered.
 */

export const DEFAULT_IRS_CONFIG = {
  monetization: { commercialMultiplier: 1.15 },
  stickiness: { min: 0.5, max: 1.5 },
  quality: { defaultScore: 0.5 },
  creation: { bonusPerUpload: 10 },
  boosters: {
    tools: { threshold: 100, multiplier: 1.25 },
    geo: { perCountryBoost: 0.05, maxMultiplier: 1.5 },
  },
};

const num = (v, fallback = 0) => {
  if (v === null || v === undefined || v === '' || v === 'null') return fallback;
  const n = typeof v === 'number' ? v : parseFloat(String(v).replace(/,/g, ''));
  return Number.isFinite(n) ? n : fallback;
};

const truthy = (v) => {
  const s = String(v ?? '').trim().toLowerCase();
  return s === 'true' || s === 'yes' || s === '1';
};

const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

/**
 * Score a single video row. Returns a finite non-negative number.
 *
 * @param {object} row - raw Nyan Cat video row
 * @param {object} opts
 * @param {string[]} [opts.boosters] - ['tools', 'geo'] to enable optional multipliers
 * @param {object} [opts.config]
 */
export function calculateIRS(row, { boosters = [], config = DEFAULT_IRS_CONFIG } = {}) {
  // 1. Performance Efficiency
  const watchTime7d = num(row.watch_time_hour_7D);
  const eng7d = num(row.engagement_7D);
  const views7d = num(row.Views_7D);
  const subsAtPublish = num(row.Total_followers_at_video_published_date, 1);

  const watchTimeBase = Math.log(watchTime7d + 1);
  const reachRatio = views7d / Math.max(subsAtPublish, 1);
  const perfEfficiency = watchTimeBase * eng7d * reachRatio;

  // 2. Predictive Velocity
  const views1d = num(row.Views_1D);
  const avgDailyViews = views7d / 7.0;
  const currentMomentum = views1d / Math.max(avgDailyViews, 0.1);
  const predictionMult = num(row.linear_reg_7d_pred, 1.0);
  const predVelocity = currentMomentum * predictionMult;

  // 3. Quality Gate
  const vQual = num(row.visual_quality_score, config.quality.defaultScore);
  const aQual = num(row.audio_quality_score, config.quality.defaultScore);
  const qualityScale = (vQual + aQual) / 2.0;

  // 4. Stickiness Ratio (assumes 7D-suffixed fields if present, else unsuffixed)
  const potentialWT = num(row.potential_watch_time_hour_7D ?? row.potential_watch_time_hour, 0.01);
  const actualWT = num(row.watch_time_hour_7D ?? row.watch_time_hour);
  const rawStickiness = potentialWT > 0 ? actualWT / potentialWT : 1.0;
  const stickinessMult = clamp(rawStickiness, config.stickiness.min, config.stickiness.max);

  // 5. Monetization
  const isCpm = truthy(row.Is_CPM_Creator);
  const isMonetized = truthy(row.monetization_enabled_avod);
  const commercialMult = isCpm || isMonetized ? config.monetization.commercialMultiplier : 1.0;

  // 6. Core
  let irsCore = perfEfficiency * predVelocity * qualityScale * stickinessMult * commercialMult;

  // 7. Optional boosters
  if (boosters.includes('tools')) {
    const toolsUploads = num(row.shorts_creation_tools_uploads_lifetime);
    if (toolsUploads > config.boosters.tools.threshold) {
      irsCore *= config.boosters.tools.multiplier;
    }
  }
  if (boosters.includes('geo')) {
    const countries = String(row.creator_country_code ?? '')
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean);
    const geoMult = Math.min(
      1 + config.boosters.geo.perCountryBoost * countries.length,
      config.boosters.geo.maxMultiplier
    );
    irsCore *= geoMult;
  }

  // 8. Creation Anchor (additive)
  const ds7d = num(row.downstream_uploads_7d_by_shorts_video_published_date);
  const creationBonus = ds7d * config.creation.bonusPerUpload;

  const finalIRS = irsCore + creationBonus;
  return Number.isFinite(finalIRS) && finalIRS > 0 ? finalIRS : 0;
}

/**
 * Score an aggregated trend: run IRS per constituent video, return the mean.
 * Expects the trend to carry its raw videos via `trend.videos` (set by
 * parseNyanCatRows).
 *
 * Returns { irs, hidden, hiddenReason }. Hard safety filters live upstream;
 * a trend arriving here is assumed safety-passing.
 */
export function calculateTrendIRS(trend, opts = {}) {
  // Mirror ERS's hard filters so direct callers stay safe even without the
  // upstream wrapper.
  const brandSafe = trend.brandSafe;
  const contentQuality = String(trend.contentQuality ?? '').toLowerCase();
  const sentiment = String(trend.sentiment ?? '').toLowerCase();

  if (
    brandSafe === false ||
    contentQuality === 'aislop' ||
    contentQuality === 'ai slop' ||
    sentiment === 'negative'
  ) {
    const reasons = [];
    if (brandSafe === false) reasons.push('non-brand-safe');
    if (contentQuality === 'aislop' || contentQuality === 'ai slop') reasons.push('ai-slop');
    if (sentiment === 'negative') reasons.push('negative-sentiment');
    return { irs: null, hidden: true, hiddenReason: reasons.join(', ') };
  }

  const videos = Array.isArray(trend.videos) ? trend.videos : [];
  if (videos.length === 0) {
    return { irs: 0, hidden: false, hiddenReason: null };
  }

  const scores = videos.map((v) => calculateIRS(v, opts));
  const mean = scores.reduce((a, b) => a + b, 0) / scores.length;

  return {
    irs: Math.round(mean * 100) / 100,
    hidden: false,
    hiddenReason: null,
  };
}

/**
 * Batch: rank a list of aggregated Nyan Cat trends by descending IRS.
 * Signature mirrors rankTrends so upload.js can swap in this function.
 */
export function rankInternalTrends(trends, opts = {}) {
  const scored = trends.map((t) => {
    const result = calculateTrendIRS(t, opts);
    return { ...t, ...result };
  });

  const visible = scored
    .filter((r) => !r.hidden && r.irs !== null)
    .sort((a, b) => (b.irs ?? 0) - (a.irs ?? 0));

  visible.forEach((r, i) => {
    r.rank = i + 1;
    r.score = r.irs;
    // Expose as `ers` too so downstream UI/stats that key on `ers` still work.
    r.ers = r.irs;
  });

  const hidden = scored
    .filter((r) => r.hidden || r.irs === null)
    .map((r) => ({ ...r, rank: null, score: 0, ers: null }));

  return [...visible, ...hidden];
}
