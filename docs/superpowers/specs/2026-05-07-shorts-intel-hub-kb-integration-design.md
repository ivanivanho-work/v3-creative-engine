# Shorts Intel Hub → Agent Collective KB Integration

**Date:** 2026-05-07
**Branch:** feat/shorts-intel-hub-kb-integration
**Status:** Approved

## Overview

PMMs publish weekly approved trend lists from Shorts Intel Hub as markdown files dropped into the market's KB directory. The agent collective's `kb_analyzer` picks these up automatically, extracts each approved topic into the `content_trends` section of `kb_insights`, and flags them as premium supplementary context. Stale briefs (older than 2 weeks) are filtered out in Python before the LLM ever sees them.

---

## Architecture

### New file type

```
kb/{market}/intel-hub-brief-{market}-YYYY-WXX.md
```

One file per market per week, dropped manually by PMMs. Applies to all markets: `kr`, `id`, `in`, `jp`. No code change needed to support new markets — the filter logic is market-agnostic.

### Components changed

| Component | Change |
|---|---|
| `kb/{market}/intel-hub-brief-{market}-YYYY-WXX.md` | New file type per market, dropped by PMMs |
| `agent.py: _get_valid_kb_files(market)` | New shared helper — returns sorted file list with stale intel hub briefs excluded |
| `agent.py: _load_kb_documents` | Uses `_get_valid_kb_files` instead of raw `folder.iterdir()` |
| `agent.py: _compute_kb_fingerprint` | Uses `_get_valid_kb_files` instead of raw `folder.iterdir()` |
| `prompts/discovery/kb_analyzer.md` | New doc type description + extraction rule for `intel_hub_brief_*` |
| `prompts/discovery/concept_generator.md` | One line: weight intel hub source entries higher in `content_trends` |

Everything else is unchanged — `brief_generator`, `brief_checker`, and all other downstream agents read `kb_insights` as before.

---

## Data Flow

```
PMM drops intel-hub-brief-kr-2026-W19.md into kb/kr/
                    ↓
Pipeline starts → _get_valid_kb_files("kr")
                    ↓
        For each intel-hub-brief-* file:
          Parse **Week:** field (ISO week or "Week of DD MONTH YYYY")
          Compute Monday of that week
          (today - monday).days > 14 → exclude
          Unparseable or missing field → exclude
                    ↓
        Valid files passed to both:
          ├── _load_kb_documents → formatted doc block → kb_analyzer instruction
          └── _compute_kb_fingerprint → hash → cache lookup
                    ↓
        Cache hit?  → kb_insights served from disk (no LLM call)
        Cache miss? → kb_analyzer LLM runs
                    ↓
        kb_analyzer extracts each approved topic → content_trends[] entry
                    ↓
        concept_generator reads content_trends[]
        Sees source = intel-hub-brief-* → treats as PMM-validated,
        higher-confidence than content_trends_kr entries
```

### Multiple valid briefs

If W18 and W19 are both within the 2-week window, both are included. Each approved topic becomes its own `content_trends` entry. The source filename differentiates them.

---

## Output Schema

Each approved topic in an intel hub brief is extracted into the existing `content_trends` array in `kb_insights`. A new optional `description` field is added to the schema (null or omitted for non-intel-hub entries):

```json
{
  "source": "intel-hub-brief-kr-2026-W19.md",
  "trend": "AI-Generated Cat Meme",
  "description": "A trend where creators use AI-generated pet images combined with popular meme audio.",
  "relevance": "Human-approved. Rank #2, score 52.9, engagement 3.0%. Targets GenPop 25-34. Emerging velocity. GenAI-native.",
  "content_category": "Creative Self-Expression"
}
```

Field mapping from source file:
- `trend` ← topic title (e.g. "AI-Generated Cat Meme")
- `description` ← topic description, verbatim
- `relevance` ← constructed from Rank, Score, Engagement rate, Target demo, Trend velocity, GenAI field
- `content_category` ← Trend bucket field

---

## Ranking

Intel hub briefs are **premium supplementary context** — higher confidence than `content_trends_*` files because topics are human-curated and quantitatively scored, but still supplementary to `content_insights_*` as the primary campaign anchor.

| Source | Role |
|---|---|
| `content_insights_*` | Primary anchor — proven creation volume + view engagement data |
| `intel_hub_brief_*` | Premium supplementary — human-approved, scored, time-bounded |
| `content_trends_*` | Supplementary color — qualitative editorial trend analysis |

---

## Date Gating

Handled entirely in Python. The LLM never sees stale files.

### Staleness check

```
week_start = Monday of the week in **Week:** field
stale = (today - week_start).days > 14
```

### Week field format support

Two formats supported, tried in order:

1. ISO week: `2026-W19` → `date.fromisocalendar(2026, 19, 1)`
2. Human label: `Week of 04 May 2026` → `datetime.strptime(..., "Week of %d %B %Y").date()`

The "Week of DD MONTH YYYY" format is not yet in use but will be adopted in future. Supporting both now means zero code changes at migration time. The Monday guarantee applies to both formats.

If the `**Week:**` field is missing or matches neither format, the file is excluded (safe default).

### KB cache correctness

Both `_load_kb_documents` and `_compute_kb_fingerprint` call the same `_get_valid_kb_files(market)` helper. When a brief expires, it drops out of the valid file list → the fingerprint changes → cache miss → fresh `kb_insights` without stale trends.

In the steady-state weekly cadence, the expiry-triggered cache miss typically coincides with the addition of the next week's brief, so no extra latency in practice.

---

## Prompt Changes

### kb_analyzer.md — Input section addition

```
- `intel_hub_brief_*` — Human-approved trend signals from Shorts Intel Hub,
  published weekly by the PMM team. Contains ranked topics with quantitative
  scores and engagement data. Only valid files (within 2 weeks of their week's
  Monday) are ever provided — no date filtering needed here. Treat as premium
  supplementary context: higher confidence than `content_trends_*` because
  topics are human-curated and scored, but still supplementary to
  `content_insights_*` as the primary campaign anchor.
```

### kb_analyzer.md — Extraction rule addition

```
10. **Extract intel hub briefs into content_trends.** For `intel_hub_brief_*`
    files: extract each approved topic as a separate `content_trends` entry.
    Populate `trend` with the topic title, `description` with the topic
    description verbatim from the source, `relevance` with
    "Human-approved. Rank #[N], score [X], engagement [Y]%. Targets [demo].
    [velocity] velocity. [GenAI: Yes/No].", and `content_category` from the
    Trend bucket field. Source must be the exact filename.
```

### concept_generator.md — Addition

```
When `content_trends` entries have a source matching `intel-hub-brief-*`,
treat them as PMM-validated, quantitatively-scored trend signals — higher
confidence than `content_trends_kr` entries. Prefer these as creative
departure points when they align with strategic priorities.
```

---

## Error Handling

| Case | Behaviour |
|---|---|
| `**Week:**` field missing | Exclude file, log warning |
| `**Week:**` field unparseable | Exclude file, log warning |
| Multiple valid briefs for same market | Both included; source filename differentiates |
| No intel hub brief present | No change — `content_trends` populated from `content_trends_*` only |
| Brief expires mid-week | kb_analyzer re-runs once; one-time latency hit |
