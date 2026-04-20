/**
 * Approved-topics store — weekly batches of trends flagged for Agent Collective.
 *
 * Keyed per (market, ISO-week) in localStorage under `shorts-intel-approved-v1`.
 * Once a batch is sent, it is frozen (read-only) but remains visible as history.
 */

import type { Trend } from '@/types';

const STORAGE_KEY = 'shorts-intel-approved-v1';
const MAX_BATCHES = 52;

export interface ApprovedBatch {
  id: string;              // `${market}-${weekId}`
  market: string;
  weekId: string;          // e.g. "2026-W16"
  createdAt: string;       // ISO
  trends: Trend[];         // snapshot at time of approval
  sentAt: string | null;
  sentKbFilename: string | null;
  sentKbScope: string | null; // 'global' | 'kr' | 'in' | 'jp' | 'id'
}

/** ISO 8601 week number — Monday-based, matches `YYYY-Www` convention. */
export function getWeekId(d: Date = new Date()): string {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

function batchId(market: string, weekId: string) {
  return `${market}-${weekId}`;
}

function readAll(): ApprovedBatch[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAll(batches: ApprovedBatch[]) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(batches));
  } catch {
    // Quota exceeded — silently drop.
  }
}

/** Get-or-create the current-week batch for this market. */
function ensureCurrentBatch(market: string): ApprovedBatch {
  const weekId = getWeekId();
  const id = batchId(market, weekId);
  const all = readAll();
  const existing = all.find((b) => b.id === id);
  if (existing) return existing;
  const fresh: ApprovedBatch = {
    id,
    market,
    weekId,
    createdAt: new Date().toISOString(),
    trends: [],
    sentAt: null,
    sentKbFilename: null,
    sentKbScope: null,
  };
  writeAll([fresh, ...all].slice(0, MAX_BATCHES));
  return fresh;
}

export function getCurrentBatch(market: string): ApprovedBatch {
  return ensureCurrentBatch(market);
}

export function getBatches(market?: string): ApprovedBatch[] {
  const all = readAll();
  const filtered = market ? all.filter((b) => b.market === market) : all;
  return filtered.sort((a, b) => (a.weekId < b.weekId ? 1 : -1));
}

function mutateCurrent(market: string, fn: (b: ApprovedBatch) => ApprovedBatch | null): ApprovedBatch {
  const weekId = getWeekId();
  const id = batchId(market, weekId);
  const all = readAll();
  let current = all.find((b) => b.id === id);
  if (!current) {
    current = {
      id, market, weekId,
      createdAt: new Date().toISOString(),
      trends: [], sentAt: null, sentKbFilename: null, sentKbScope: null,
    };
  }
  const updated = fn(current) ?? current;
  const next = [updated, ...all.filter((b) => b.id !== id)].slice(0, MAX_BATCHES);
  writeAll(next);
  return updated;
}

export function approveTrend(market: string, trend: Trend): ApprovedBatch {
  return mutateCurrent(market, (b) => {
    if (b.sentAt) return b; // frozen
    if (b.trends.some((t) => t.id === trend.id)) return b;
    return { ...b, trends: [...b.trends, trend] };
  });
}

export function unapproveTrend(market: string, trendId: string): ApprovedBatch {
  return mutateCurrent(market, (b) => {
    if (b.sentAt) return b;
    return { ...b, trends: b.trends.filter((t) => t.id !== trendId) };
  });
}

export function markBatchSent(market: string, kbFilename: string, kbScope: string): ApprovedBatch {
  return mutateCurrent(market, (b) => ({
    ...b,
    sentAt: new Date().toISOString(),
    sentKbFilename: kbFilename,
    sentKbScope: kbScope,
  }));
}

/** True if the trend is in the current-week batch for this market. */
export function isTrendApproved(market: string, trendId: string): boolean {
  const current = ensureCurrentBatch(market);
  return current.trends.some((t) => t.id === trendId);
}
