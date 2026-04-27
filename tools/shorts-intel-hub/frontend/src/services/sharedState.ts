/**
 * Shared Intel Hub state — every visitor sees the same uploads and last
 * match-and-rank result.
 *
 * Storage layout:
 *   Storage  shorts-intel-hub/uploads/{uploadId}/{kind}-{name}.csv   — raw CSVs
 *   Storage  shorts-intel-hub/results/{runId}.json                   — full match result
 *   Firestore shorts_intel_hub/current                               — refs + summary
 *   Firestore shorts_intel_hub_archive/{archiveId}                   — archive entries
 *
 * The match result lives in Storage because it can exceed Firestore's 1 MiB
 * document limit once per-(market, week) cells with dozens of trends each are
 * populated.
 */

import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  deleteField,
  deleteDoc,
  limit as fsLimit,
} from 'firebase/firestore';
import {
  ref as storageRef,
  uploadBytes,
  uploadString,
  getDownloadURL,
} from 'firebase/storage';
import { db, storage } from '@/config/firebase';
import type { MatchAndRankResponse } from './api';

export type UploadKind = 'nyanCat' | 'vayner';

export interface UploadedFileRef {
  name: string;
  storagePath: string;
  size: number;
  uploadedAt: string; // ISO
  uploadId: string;
}

export interface MatchResultSummary {
  version: number;
  storagePath: string;
  markets: string[];
  weeks: string[];
  stats: MatchAndRankResponse['stats'];
  nyanCatName: string | null;
  vaynerName: string | null;
  updatedAt: string; // ISO
}

export interface SharedState {
  nyanCat: UploadedFileRef | null;
  vayner: UploadedFileRef | null;
  matchSummary: MatchResultSummary | null;
  matchResult: MatchAndRankResponse | null; // lazily hydrated from Storage
}

export interface ArchiveEntryFs {
  id: string;
  type: 'upload' | 'run';
  createdAt: string; // ISO
  market?: string | null;
  nyanCatFile?: UploadedFileRef | null;
  vaynerFile?: UploadedFileRef | null;
  kind?: UploadKind;
  summary?: MatchResultSummary;
}

const CURRENT_DOC = doc(db, 'shorts_intel_hub', 'current');
const ARCHIVE_COL = collection(db, 'shorts_intel_hub_archive');

function emptyState(): SharedState {
  return { nyanCat: null, vayner: null, matchSummary: null, matchResult: null };
}

/**
 * Subscribe to shared state. Hydrates `matchResult` from Storage whenever the
 * summary's storagePath changes, so callers always receive a complete view.
 */
export function subscribeToCurrent(cb: (state: SharedState) => void): () => void {
  let hydratedPath: string | null = null;
  let latestSummary: MatchResultSummary | null = null;
  let latestResult: MatchAndRankResponse | null = null;

  return onSnapshot(
    CURRENT_DOC,
    async (snap) => {
      if (!snap.exists()) {
        hydratedPath = null;
        latestSummary = null;
        latestResult = null;
        cb(emptyState());
        return;
      }
      const data = snap.data() as Partial<SharedState> & {
        matchSummary?: MatchResultSummary;
      };
      latestSummary = data.matchSummary ?? null;

      const emit = () =>
        cb({
          nyanCat: data.nyanCat ?? null,
          vayner: data.vayner ?? null,
          matchSummary: latestSummary,
          matchResult: latestResult,
        });

      if (!latestSummary) {
        hydratedPath = null;
        latestResult = null;
        emit();
        return;
      }

      if (latestSummary.storagePath === hydratedPath && latestResult) {
        emit();
        return;
      }

      // Fetch full result from Storage.
      emit(); // emit summary immediately so UI can show progress
      try {
        const url = await getDownloadURL(storageRef(storage, latestSummary.storagePath));
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const json = (await resp.json()) as MatchAndRankResponse;
        hydratedPath = latestSummary.storagePath;
        latestResult = json;
        emit();
      } catch (err) {
        console.error('[sharedState] failed to load match result from Storage:', err);
        latestResult = null;
        emit();
      }
    },
    (err) => {
      console.error('[sharedState] subscribe failed:', err);
      cb(emptyState());
    },
  );
}

function uploadsPathFor(kind: UploadKind, uploadId: string, fileName: string): string {
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
  return `shorts-intel-hub/uploads/${uploadId}/${kind}-${safeName}`;
}

function resultPathFor(runId: string): string {
  return `shorts-intel-hub/results/${runId}.json`;
}

export async function uploadCsv(kind: UploadKind, file: File): Promise<UploadedFileRef> {
  const uploadId = `upl-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const path = uploadsPathFor(kind, uploadId, file.name);
  await uploadBytes(storageRef(storage, path), file, {
    contentType: file.type || 'text/csv',
  });
  const ref: UploadedFileRef = {
    name: file.name,
    storagePath: path,
    size: file.size,
    uploadedAt: new Date().toISOString(),
    uploadId,
  };
  await setDoc(
    CURRENT_DOC,
    { [kind]: ref, updatedAt: serverTimestamp() },
    { merge: true },
  );
  // Auto-archive the upload itself so historical CSVs are always recoverable.
  await writeArchiveUpload(kind, ref);
  return ref;
}

export async function clearCurrentFile(kind: UploadKind): Promise<void> {
  await updateDoc(CURRENT_DOC, { [kind]: deleteField(), updatedAt: serverTimestamp() });
}

/**
 * Persist a fresh match-and-rank result: JSON → Storage, summary → Firestore.
 * Also auto-archives the run.
 */
export async function setCurrentMatchResult(
  result: MatchAndRankResponse,
  ctx: { nyanCatFile: UploadedFileRef | null; vaynerFile: UploadedFileRef | null } = {
    nyanCatFile: null,
    vaynerFile: null,
  },
): Promise<MatchResultSummary> {
  const runId = `run-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const resultPath = resultPathFor(runId);
  await uploadString(
    storageRef(storage, resultPath),
    JSON.stringify(result),
    'raw',
    { contentType: 'application/json' },
  );
  const summary: MatchResultSummary = {
    version: result.version ?? 2,
    storagePath: resultPath,
    markets: result.markets ?? [],
    weeks: result.weeks ?? [],
    stats: result.stats,
    nyanCatName: ctx.nyanCatFile?.name ?? null,
    vaynerName: ctx.vaynerFile?.name ?? null,
    updatedAt: new Date().toISOString(),
  };
  await setDoc(
    CURRENT_DOC,
    { matchSummary: summary, updatedAt: serverTimestamp() },
    { merge: true },
  );
  await writeArchiveRun(summary, ctx);
  return summary;
}

export async function fetchCsvFile(ref: UploadedFileRef): Promise<File> {
  const url = await getDownloadURL(storageRef(storage, ref.storagePath));
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`Failed to download ${ref.name}: HTTP ${resp.status}`);
  }
  const blob = await resp.blob();
  return new File([blob], ref.name, { type: blob.type || 'text/csv' });
}

async function writeArchiveUpload(kind: UploadKind, fileRef: UploadedFileRef): Promise<void> {
  const id = `upload-${fileRef.uploadId}-${kind}`;
  const entry: ArchiveEntryFs = {
    id,
    type: 'upload',
    kind,
    createdAt: fileRef.uploadedAt,
    nyanCatFile: kind === 'nyanCat' ? fileRef : null,
    vaynerFile: kind === 'vayner' ? fileRef : null,
  };
  await setDoc(doc(ARCHIVE_COL, id), entry);
}

async function writeArchiveRun(
  summary: MatchResultSummary,
  ctx: { nyanCatFile: UploadedFileRef | null; vaynerFile: UploadedFileRef | null },
): Promise<void> {
  const id = `run-${summary.updatedAt}-${Math.random().toString(36).slice(2, 6)}`;
  const entry: ArchiveEntryFs = {
    id,
    type: 'run',
    createdAt: summary.updatedAt,
    nyanCatFile: ctx.nyanCatFile,
    vaynerFile: ctx.vaynerFile,
    summary,
  };
  await setDoc(doc(ARCHIVE_COL, id), entry);
}

/**
 * Subscribe to the archive, newest first. Pass a soft cap to limit payload.
 */
export function subscribeToArchive(
  cb: (entries: ArchiveEntryFs[]) => void,
  max = 100,
): () => void {
  const q = query(ARCHIVE_COL, orderBy('createdAt', 'desc'), fsLimit(max));
  return onSnapshot(
    q,
    (snap) => {
      const entries: ArchiveEntryFs[] = [];
      snap.forEach((d) => entries.push(d.data() as ArchiveEntryFs));
      cb(entries);
    },
    (err) => {
      console.error('[sharedState] archive subscribe failed:', err);
      cb([]);
    },
  );
}

export async function deleteArchiveEntry(id: string): Promise<void> {
  await deleteDoc(doc(ARCHIVE_COL, id));
}

/**
 * Download the full match result for an archived run (Storage JSON).
 */
export async function loadArchivedResult(summary: MatchResultSummary): Promise<MatchAndRankResponse> {
  const url = await getDownloadURL(storageRef(storage, summary.storagePath));
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return (await resp.json()) as MatchAndRankResponse;
}
