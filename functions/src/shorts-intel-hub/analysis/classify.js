/**
 * Shared classification helpers: ISO-week id from a date string, primary
 * market normalization (with "Global" exception), and the fixed list of
 * supported markets.
 *
 * Keep in sync with the frontend `approvedStore.getWeekId` — same algorithm,
 * same `YYYY-Www` output.
 */

export const SUPPORTED_MARKETS = ['JP', 'KR', 'IN', 'ID'];
export const GLOBAL_MARKET = 'Global';

/**
 * ISO 8601 week id (Monday-based). Returns `YYYY-Www` or null for invalid input.
 */
export function getIsoWeek(dateLike) {
  if (!dateLike) return null;
  const d = new Date(dateLike);
  if (Number.isNaN(d.getTime())) return null;
  const target = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const dayNum = target.getUTCDay() || 7;
  target.setUTCDate(target.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((target.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${target.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

/**
 * Normalize a free-form market string to one of SUPPORTED_MARKETS or Global.
 * Accepts common aliases (country names, case variants). Unknown values are
 * treated as Global so data is not silently dropped.
 */
export function normalizeMarket(raw) {
  if (raw == null) return GLOBAL_MARKET;
  const s = String(raw).trim();
  if (!s) return GLOBAL_MARKET;
  const upper = s.toUpperCase();
  if (SUPPORTED_MARKETS.includes(upper)) return upper;
  const lc = s.toLowerCase();
  if (lc === 'global' || lc === 'worldwide' || lc === 'ww' || lc === 'intl' || lc === 'international') {
    return GLOBAL_MARKET;
  }
  if (lc.startsWith('jap')) return 'JP';
  if (lc.startsWith('kor') || lc === 'south korea') return 'KR';
  if (lc.startsWith('ind') && !lc.startsWith('indo')) return 'IN';
  if (lc.startsWith('indo')) return 'ID';
  return GLOBAL_MARKET;
}

/**
 * Resolve a single primary market from a Vayner/Nyan row. Takes the first
 * entry of a list of candidates; falls back to Global.
 */
export function resolvePrimaryMarket(candidates) {
  if (!candidates) return GLOBAL_MARKET;
  const list = Array.isArray(candidates) ? candidates : [candidates];
  for (const c of list) {
    const m = normalizeMarket(c);
    if (m) return m;
  }
  return GLOBAL_MARKET;
}

/**
 * True when a topic with `primaryMarket` should be visible in `selectedMarket`.
 * Global topics appear in every supported market; market-specific topics only
 * appear in their own market.
 */
export function topicVisibleInMarket(primaryMarket, selectedMarket) {
  if (primaryMarket === GLOBAL_MARKET) return true;
  return primaryMarket === selectedMarket;
}
