/**
 * Archive store — persists every successful match-and-rank result to
 * localStorage so past uploads stay browsable under the Archive tab.
 *
 * Key shape: `shorts-intel-archive-v1` → ArchiveEntry[] (newest first).
 * Entries are keyed by their `id` (timestamp-based) so deduping on rapid
 * re-runs is trivial.
 */

import type { MatchAndRankResponse, MatchPair } from './api';
import type { Trend } from '@/types';

const STORAGE_KEY = 'shorts-intel-archive-v1';
const MAX_ENTRIES = 52; // ~1 year at weekly cadence, but we keep every run

export interface ArchiveEntry {
  id: string;
  savedAt: string; // ISO
  market: string;
  nyanCatFileName: string | null;
  vaynerFileName: string | null;
  result: MatchAndRankResponse;
}

function readAll(): ArchiveEntry[] {
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

function writeAll(entries: ArchiveEntry[]) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // Quota exceeded or private mode — silently drop.
  }
}

export function getArchives(market?: string): ArchiveEntry[] {
  const all = readAll();
  return market ? all.filter((e) => e.market === market) : all;
}

export function addArchive(entry: Omit<ArchiveEntry, 'id' | 'savedAt'>): ArchiveEntry {
  const full: ArchiveEntry = {
    id: `arch-${Date.now()}`,
    savedAt: new Date().toISOString(),
    ...entry,
  };
  const existing = readAll();
  const next = [full, ...existing].slice(0, MAX_ENTRIES);
  writeAll(next);
  return full;
}

export function deleteArchive(id: string) {
  writeAll(readAll().filter((e) => e.id !== id));
}

export function clearArchives() {
  writeAll([]);
}

/**
 * Flatten an ArchiveEntry into a single ranked list — useful for rendering
 * a simple "top trends from this run" view.
 */
export function entryTopTrends(entry: ArchiveEntry, limit = 10): Trend[] {
  const { internal, matching, external } = entry.result;
  const fromMatching: Trend[] = matching.map((m: MatchPair) => ({
    ...m.internal,
    score: m.combinedScore,
    rank: m.rank,
  }));
  const combined: Trend[] = [...fromMatching, ...internal, ...external]
    .filter((t) => !t.hidden && typeof t.score === 'number')
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
    .slice(0, limit);
  return combined;
}
