/**
 * Agent Collective integration — uploads an approved-topics brief as a
 * Knowledge File that agents pick up automatically in the kb_analyzer phase.
 *
 * Endpoint: POST {AGENT_COLLECTIVE_URL}/api/kb/upload
 * Body: multipart form { scope: 'global'|'kr'|'in'|'jp'|'id', file: .md }
 */

import type { ApprovedBatch } from './approvedStore';
import type { Trend } from '@/types';

const AGENT_COLLECTIVE_URL =
  import.meta.env.VITE_AGENT_COLLECTIVE_URL ||
  'https://agent-collective-v2-vx7ggif5xa-uc.a.run.app';

/** Agent Collective only knows four markets. Intel Hub's AUNZ → global fallback. */
const MARKET_TO_KB_SCOPE: Record<string, string> = {
  JP: 'jp',
  KR: 'kr',
  IN: 'in',
  ID: 'id',
};

export function marketToKbScope(market: string): string {
  return MARKET_TO_KB_SCOPE[market] ?? 'global';
}

export function buildBriefFilename(batch: ApprovedBatch): string {
  return `intel-hub-brief-${batch.market.toLowerCase()}-${batch.weekId}.md`;
}

export function buildBriefMarkdown(batch: ApprovedBatch): string {
  const sentDate = new Date().toISOString().slice(0, 10);
  const lines: string[] = [];

  lines.push(`# Shorts Intel Hub — Approved Topics (${batch.market}, ${batch.weekId})`);
  lines.push('');
  lines.push(`**Source:** Shorts Intel Hub`);
  lines.push(`**Market:** ${batch.market}`);
  lines.push(`**Week:** ${batch.weekId}`);
  lines.push(`**Sent:** ${sentDate}`);
  lines.push(`**Topic count:** ${batch.trends.length}`);
  lines.push('');
  lines.push(
    'The following topics were human-approved by the APAC marketing team ' +
    'this week. Use them as the canonical brief inputs when generating ' +
    'creative concepts, prompts, or campaign strategies for this market.',
  );
  lines.push('');
  lines.push('---');
  lines.push('');

  batch.trends.forEach((t, i) => {
    lines.push(...renderTrend(t, i + 1));
    lines.push('');
    lines.push('---');
    lines.push('');
  });

  return lines.join('\n');
}

function renderTrend(t: Trend, n: number): string[] {
  const out: string[] = [];
  out.push(`## ${n}. ${t.topicName}`);
  out.push('');
  if (t.description) {
    out.push(t.description);
    out.push('');
  }

  const kv: Array<[string, string | undefined]> = [
    ['Source', t.source],
    ['Target demo', t.targetDemo],
    ['Primary markets', t.primaryMarkets?.join(', ')],
    ['Trend velocity', t.trendVelocity],
    ['Trend scale', t.trendScale],
    ['Creation complexity', t.creationComplexity],
    ['Trend bucket', t.trendBucket],
    ['Sentiment', t.sentiment],
    ['Content quality', t.contentQuality],
    ['Brand safe', t.brandSafe === undefined ? undefined : t.brandSafe ? 'Yes' : 'No'],
    ['GenAI', t.genAI ? 'Yes' : undefined],
    ['AI tool', t.aiTool],
    ['Audio track', t.audio],
    ['Rank', t.rank ? `#${t.rank}` : undefined],
    ['Score', typeof t.score === 'number' ? t.score.toFixed(1) : undefined],
  ];

  const present = kv.filter(([, v]) => v !== undefined && v !== null && v !== '');
  if (present.length) {
    out.push('| Field | Value |');
    out.push('|---|---|');
    for (const [k, v] of present) out.push(`| ${k} | ${v} |`);
    out.push('');
  }

  const metricsRaw: Array<[string, string | undefined]> = [
    ['Views', t.viewsVolume],
    ['Views velocity', t.viewsVelocity],
    ['Watchtime', t.watchtimeVolume],
    ['Watchtime velocity', t.watchtimeVelocity],
    ['Creation rate', t.creationRate],
    ['Engagement rate', t.engagementRate !== undefined ? `${(t.engagementRate * 100).toFixed(1)}%` : undefined],
  ];
  const metrics = metricsRaw.filter((r): r is [string, string] => r[1] !== undefined && r[1] !== '');
  if (metrics.length) {
    out.push('**Performance**');
    out.push('');
    for (const [k, v] of metrics) out.push(`- ${k}: ${v}`);
    out.push('');
  }

  if (t.hashtags && t.hashtags.length) {
    out.push(`**Hashtags:** ${t.hashtags.map((h) => (h.startsWith('#') ? h : `#${h}`)).join(' ')}`);
    out.push('');
  }
  if (t.referenceLink) {
    out.push(`**Reference:** ${t.referenceLink}`);
    out.push('');
  }
  return out;
}

export interface SendResult {
  ok: true;
  kbFilename: string;
  kbScope: string;
  markdown: string;
}

/**
 * Upload the approved-topics brief as a Knowledge File on Agent Collective.
 * Throws on non-2xx. Caller is responsible for marking the batch as sent.
 */
export async function sendBatchToAgentCollective(batch: ApprovedBatch): Promise<SendResult> {
  if (!batch.trends.length) {
    throw new Error('No approved topics to send.');
  }
  const markdown = buildBriefMarkdown(batch);
  const filename = buildBriefFilename(batch);
  const scope = marketToKbScope(batch.market);

  const form = new FormData();
  form.append('scope', scope);
  form.append('file', new Blob([markdown], { type: 'text/markdown' }), filename);

  const res = await fetch(`${AGENT_COLLECTIVE_URL}/api/kb/upload`, {
    method: 'POST',
    body: form,
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Agent Collective upload failed (${res.status}): ${detail || res.statusText}`);
  }

  return { ok: true, kbFilename: filename, kbScope: scope, markdown };
}

export function agentCollectiveUrl(): string {
  return AGENT_COLLECTIVE_URL;
}
