# Shorts Intel Hub KB Integration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Allow PMMs to drop weekly Shorts Intel Hub approved-topics files into market KB directories, which the kb_analyzer agent automatically picks up, date-gates, and extracts into `content_trends` as premium supplementary context.

**Architecture:** A shared helper `_get_valid_kb_files(market)` filters stale `intel-hub-brief-*` files before they reach either the document loader or the fingerprint hasher — ensuring the KB cache correctly invalidates when a brief expires. The kb_analyzer and concept_generator prompts are updated to know what to do with these files when present.

**Tech Stack:** Python 3.12, pytest, pathlib, datetime, re (all already in use)

---

## File Map

| File | Action |
|---|---|
| `services/agent-collective-v2/tests/test_intel_hub_filter.py` | Create — unit tests for new helper functions |
| `services/agent-collective-v2/agent_collective/agent.py` | Modify — add `_parse_intel_hub_week`, `_get_valid_kb_files`; update `_load_kb_documents` and `_compute_kb_fingerprint` |
| `services/agent-collective-v2/agent_collective/prompts/discovery/kb_analyzer.md` | Modify — new doc type, `description` field in schema, extraction rule 10 |
| `services/agent-collective-v2/agent_collective/prompts/discovery/concept_generator.md` | Modify — one line on intel-hub-brief source weighting |

---

## Task 1: Write failing tests for `_parse_intel_hub_week`

**Files:**
- Create: `services/agent-collective-v2/tests/test_intel_hub_filter.py`

- [ ] **Step 1: Create the test file**

```python
# services/agent-collective-v2/tests/test_intel_hub_filter.py
import pytest
from datetime import date, timedelta
from pathlib import Path

from agent_collective.agent import _parse_intel_hub_week, _get_valid_kb_files


VALID_ISO = "**Week:** 2026-W19\n**Sent:** 2026-05-07\n"
VALID_HUMAN = "**Week:** Week of 04 May 2026\n**Sent:** 2026-05-07\n"
MISSING_WEEK = "**Sent:** 2026-05-07\n"
MALFORMED_WEEK = "**Week:** not-a-date\n"


class TestParseIntelHubWeek:
    def test_iso_week_format(self):
        assert _parse_intel_hub_week(VALID_ISO) == date(2026, 5, 4)

    def test_human_week_format(self):
        assert _parse_intel_hub_week(VALID_HUMAN) == date(2026, 5, 4)

    def test_missing_week_field_returns_none(self):
        assert _parse_intel_hub_week(MISSING_WEEK) is None

    def test_malformed_week_field_returns_none(self):
        assert _parse_intel_hub_week(MALFORMED_WEEK) is None

    def test_empty_content_returns_none(self):
        assert _parse_intel_hub_week("") is None


class TestGetValidKbFiles:
    def _write(self, directory, name, content):
        path = directory / name
        path.write_text(content, encoding="utf-8")
        return path

    def test_non_intel_hub_files_pass_through(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        self._write(market_dir, "content_trends_kr.md", "# Trends")
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        result = _get_valid_kb_files("kr")
        assert [f.name for f in result] == ["content_trends_kr.md"]

    def test_valid_intel_hub_brief_included(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        monday = date.today() - timedelta(days=date.today().weekday())
        self._write(market_dir, "intel-hub-brief-kr-2026-W19.md",
                    f"**Week:** {monday.strftime('Week of %d %B %Y')}\n")
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        result = _get_valid_kb_files("kr")
        assert len(result) == 1
        assert result[0].name == "intel-hub-brief-kr-2026-W19.md"

    def test_stale_intel_hub_brief_excluded(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        stale_monday = date.today() - timedelta(days=15)
        self._write(market_dir, "intel-hub-brief-kr-stale.md",
                    f"**Week:** {stale_monday.strftime('Week of %d %B %Y')}\n")
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        assert _get_valid_kb_files("kr") == []

    def test_unparseable_week_field_excluded(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        self._write(market_dir, "intel-hub-brief-kr-bad.md", "**Week:** ???\n")
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        assert _get_valid_kb_files("kr") == []

    def test_mixed_valid_stale_and_regular(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        valid_monday = date.today() - timedelta(days=7)
        stale_monday = date.today() - timedelta(days=15)
        self._write(market_dir, "content_trends_kr.md", "# Trends")
        self._write(market_dir, "intel-hub-brief-kr-valid.md",
                    f"**Week:** {valid_monday.strftime('Week of %d %B %Y')}\n")
        self._write(market_dir, "intel-hub-brief-kr-stale.md",
                    f"**Week:** {stale_monday.strftime('Week of %d %B %Y')}\n")
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        names = [f.name for f in _get_valid_kb_files("kr")]
        assert "content_trends_kr.md" in names
        assert "intel-hub-brief-kr-valid.md" in names
        assert "intel-hub-brief-kr-stale.md" not in names

    def test_exactly_14_days_old_included(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        boundary_monday = date.today() - timedelta(days=14)
        self._write(market_dir, "intel-hub-brief-kr-boundary.md",
                    f"**Week:** {boundary_monday.strftime('Week of %d %B %Y')}\n")
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        result = _get_valid_kb_files("kr")
        assert len(result) == 1

    def test_empty_market_dir_returns_empty(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        assert _get_valid_kb_files("kr") == []
```

- [ ] **Step 2: Run tests — expect import errors (functions not yet defined)**

```bash
cd services/agent-collective-v2
python -m pytest tests/test_intel_hub_filter.py -v 2>&1 | head -30
```

Expected: `ImportError: cannot import name '_parse_intel_hub_week' from 'agent_collective.agent'`

---

## Task 2: Implement `_parse_intel_hub_week` and `_get_valid_kb_files`

**Files:**
- Modify: `services/agent-collective-v2/agent_collective/agent.py`

- [ ] **Step 1: Update the datetime import at the top of agent.py**

Find line 22:
```python
from datetime import datetime
```
Replace with:
```python
from datetime import date, datetime
```

- [ ] **Step 2: Add `_parse_intel_hub_week` after the `_get_kb_cache_file` function (after line 73)**

Insert before the `# Prompt loading` comment block:

```python
def _parse_intel_hub_week(content: str) -> date | None:
    """Extract the **Week:** field from an intel hub brief and return the
    Monday of that week. Returns None if the field is missing or unparseable.

    Supports two formats:
      ISO week:    2026-W19
      Human label: Week of 04 May 2026  (always a Monday)
    """
    match = re.search(r'\*\*Week:\*\*\s+(.+)', content)
    if not match:
        return None
    week_str = match.group(1).strip()

    iso_match = re.fullmatch(r'(\d{4})-W(\d{1,2})', week_str)
    if iso_match:
        try:
            return date.fromisocalendar(int(iso_match.group(1)), int(iso_match.group(2)), 1)
        except ValueError:
            return None

    try:
        return datetime.strptime(week_str, "Week of %d %B %Y").date()
    except ValueError:
        return None


def _get_valid_kb_files(market: str) -> list[Path]:
    """Return sorted KB files for global and market dirs, excluding stale
    intel-hub-brief-* files (week Monday more than 14 days ago).

    Used by both _load_kb_documents and _compute_kb_fingerprint so the
    document loader and cache fingerprint always agree on which files are
    in scope.
    """
    today = date.today()
    valid: list[Path] = []
    for folder in _get_kb_dirs(market):
        for f in sorted(folder.iterdir()):
            if not f.is_file():
                continue
            if f.name.startswith("intel-hub-brief-"):
                content = f.read_text(encoding="utf-8")
                week_start = _parse_intel_hub_week(content)
                if week_start is None or (today - week_start).days > 14:
                    continue
            valid.append(f)
    return valid
```

- [ ] **Step 3: Run the tests — all should pass**

```bash
cd services/agent-collective-v2
python -m pytest tests/test_intel_hub_filter.py -v
```

Expected output:
```
tests/test_intel_hub_filter.py::TestParseIntelHubWeek::test_iso_week_format PASSED
tests/test_intel_hub_filter.py::TestParseIntelHubWeek::test_human_week_format PASSED
tests/test_intel_hub_filter.py::TestParseIntelHubWeek::test_missing_week_field_returns_none PASSED
tests/test_intel_hub_filter.py::TestParseIntelHubWeek::test_malformed_week_field_returns_none PASSED
tests/test_intel_hub_filter.py::TestParseIntelHubWeek::test_empty_content_returns_none PASSED
tests/test_intel_hub_filter.py::TestGetValidKbFiles::test_non_intel_hub_files_pass_through PASSED
tests/test_intel_hub_filter.py::TestGetValidKbFiles::test_valid_intel_hub_brief_included PASSED
tests/test_intel_hub_filter.py::TestGetValidKbFiles::test_stale_intel_hub_brief_excluded PASSED
tests/test_intel_hub_filter.py::TestGetValidKbFiles::test_unparseable_week_field_excluded PASSED
tests/test_intel_hub_filter.py::TestGetValidKbFiles::test_mixed_valid_stale_and_regular PASSED
tests/test_intel_hub_filter.py::TestGetValidKbFiles::test_exactly_14_days_old_included PASSED
tests/test_intel_hub_filter.py::TestGetValidKbFiles::test_empty_market_dir_returns_empty PASSED

12 passed
```

- [ ] **Step 4: Commit**

```bash
git add tests/test_intel_hub_filter.py agent_collective/agent.py
git commit -m "feat: add _parse_intel_hub_week and _get_valid_kb_files helpers"
```

---

## Task 3: Wire `_get_valid_kb_files` into `_load_kb_documents` and `_compute_kb_fingerprint`

**Files:**
- Modify: `services/agent-collective-v2/agent_collective/agent.py`

- [ ] **Step 1: Replace `_load_kb_documents` body**

Find and replace the entire function body of `_load_kb_documents` (lines ~85–113):

Old:
```python
def _load_kb_documents(market: str) -> str:
    """Read all files from kb/global/ and kb/{market}/ and format them as a
    block that gets appended to the kb_analyzer's instruction.

    Global documents are loaded first; market-specific documents follow so the
    agent understands that market-specific files take priority. Each file is
    wrapped with BEGIN/END markers so the agent knows where one document ends
    and the next begins.
    """
    kb_dirs = _get_kb_dirs(market)
    if not kb_dirs:
        return "\n\n--- NO KB DOCUMENTS FOUND ---\n"

    docs = []
    for folder in kb_dirs:
        for f in sorted(folder.iterdir()):
            if f.is_file():
                content = f.read_text(encoding="utf-8")
                docs.append(
                    f"--- BEGIN {f.name} ---\n{content}\n--- END {f.name} ---"
                )

    if not docs:
        return "\n\n--- NO KB DOCUMENTS FOUND ---\n"

    current_date = datetime.now().strftime("%Y-%m-%d")
    metadata = f"--- SYSTEM METADATA ---\ncurrent_date: {current_date}\n--- END SYSTEM METADATA ---"

    return "\n\n" + metadata + "\n\n--- KNOWLEDGE BASE DOCUMENTS ---\n\n" + "\n\n".join(docs)
```

New:
```python
def _load_kb_documents(market: str) -> str:
    """Read valid KB files for the market and format them as a block appended
    to the kb_analyzer's instruction. Intel-hub-brief-* files older than 14
    days are excluded by _get_valid_kb_files before reaching the LLM.

    Global documents are loaded first; market-specific documents follow so the
    agent understands that market-specific files take priority. Each file is
    wrapped with BEGIN/END markers so the agent knows where one document ends
    and the next begins.
    """
    valid_files = _get_valid_kb_files(market)
    if not valid_files:
        return "\n\n--- NO KB DOCUMENTS FOUND ---\n"

    docs = []
    for f in valid_files:
        content = f.read_text(encoding="utf-8")
        docs.append(f"--- BEGIN {f.name} ---\n{content}\n--- END {f.name} ---")

    current_date = datetime.now().strftime("%Y-%m-%d")
    metadata = f"--- SYSTEM METADATA ---\ncurrent_date: {current_date}\n--- END SYSTEM METADATA ---"

    return "\n\n" + metadata + "\n\n--- KNOWLEDGE BASE DOCUMENTS ---\n\n" + "\n\n".join(docs)
```

- [ ] **Step 2: Replace `_compute_kb_fingerprint` inner loop**

Find and replace the inner loop inside `_compute_kb_fingerprint` (lines ~350–354):

Old:
```python
    hasher.update(model.encode("utf-8"))
    for folder in _get_kb_dirs(market):
        for f in sorted(folder.iterdir()):
            if f.is_file():
                hasher.update(f.name.encode("utf-8"))
                hasher.update(f.read_bytes())
```

New:
```python
    hasher.update(model.encode("utf-8"))
    for f in _get_valid_kb_files(market):
        hasher.update(f.name.encode("utf-8"))
        hasher.update(f.read_bytes())
```

- [ ] **Step 3: Run full test suite to confirm no regressions**

```bash
cd services/agent-collective-v2
python -m pytest tests/test_intel_hub_filter.py -v
```

Expected: 12 passed, 0 failed.

- [ ] **Step 4: Commit**

```bash
git add agent_collective/agent.py
git commit -m "feat: wire _get_valid_kb_files into document loader and cache fingerprint"
```

---

## Task 4: Update `kb_analyzer.md` — new doc type, schema field, extraction rule

**Files:**
- Modify: `services/agent-collective-v2/agent_collective/prompts/discovery/kb_analyzer.md`

- [ ] **Step 1: Add `intel_hub_brief_*` to the Input section**

Find:
```
- `content_trends_*` - Qualitative trend analysis: narrative formats, hooks, and cultural shifts. Useful as supporting context and creative color, but trends change rapidly and should not be the primary driver of campaign themes. Market-specific files take priority over regional (APAC) files when both exist.
```

Replace with:
```
- `content_trends_*` - Qualitative trend analysis: narrative formats, hooks, and cultural shifts. Useful as supporting context and creative color, but trends change rapidly and should not be the primary driver of campaign themes. Market-specific files take priority over regional (APAC) files when both exist.
- `intel_hub_brief_*` - Human-approved trend signals from Shorts Intel Hub, published weekly by the PMM team. Contains ranked topics with quantitative scores and engagement data. Only valid files (within 2 weeks of their week's Monday) are ever provided — no date filtering needed here. Treat as premium supplementary context: higher confidence than `content_trends_*` because topics are human-curated and scored, but still supplementary to `content_insights_*` as the primary campaign anchor.
```

- [ ] **Step 2: Add `description` field to the `content_trends` schema**

Find:
```json
  "content_trends": [
    {
      "source": "Document filename the trend came from",
      "trend": "The trend or cultural shift, stated concisely",
      "relevance": "Why this matters for a campaign in this market targeting this audience. Note: trends are supplementary context, not primary theme drivers. They change rapidly and should be used for creative color, not as the foundation of campaign concepts.",
      "content_category": "The content category this trend belongs to (e.g. Food, Travel, Pets, Entertainment, Gaming, Beauty)"
    }
  ],
```

Replace with:
```json
  "content_trends": [
    {
      "source": "Document filename the trend came from",
      "trend": "The trend or cultural shift, stated concisely",
      "description": "Optional. For intel_hub_brief_* entries only: the trend description verbatim from the source file. Null or omitted for all other sources.",
      "relevance": "Why this matters for a campaign in this market targeting this audience. Note: trends are supplementary context, not primary theme drivers. They change rapidly and should be used for creative color, not as the foundation of campaign concepts.",
      "content_category": "The content category this trend belongs to (e.g. Food, Travel, Pets, Entertainment, Gaming, Beauty)"
    }
  ],
```

- [ ] **Step 3: Add extraction rule 10 after rule 9**

Find:
```
9. **Deliverables and ad_copy_constraints come from market_config.** Extract these exactly as specified. Do not infer or modify.
```

Replace with:
```
9. **Deliverables and ad_copy_constraints come from market_config.** Extract these exactly as specified. Do not infer or modify.

10. **Extract intel hub briefs into content_trends.** For `intel_hub_brief_*` files: extract each approved topic as a separate `content_trends` entry. Set `trend` to the topic title, `description` to the topic description verbatim from the source file, `relevance` to "Human-approved. Rank #[N], score [X], engagement [Y]%. Targets [demo]. [velocity] velocity. [GenAI: Yes/No].", and `content_category` to the value of the Trend bucket field. Set `source` to the exact filename. Each topic is its own entry — do not combine topics into a single entry.
```

- [ ] **Step 4: Commit**

```bash
cd services/agent-collective-v2
git add agent_collective/prompts/discovery/kb_analyzer.md
git commit -m "feat: update kb_analyzer prompt — intel_hub_brief doc type, description field, extraction rule"
```

---

## Task 5: Update `concept_generator.md` — weight intel hub entries higher

**Files:**
- Modify: `services/agent-collective-v2/agent_collective/prompts/discovery/concept_generator.md`

- [ ] **Step 1: Update the `content_trends` description in the Input section**

Find:
```
- `content_trends` - Qualitative trend analysis: narrative formats, hooks, and cultural shifts. Use as supplementary creative context and for cultural hooks, but not as the primary foundation for campaign themes. Trends change rapidly and may not reflect sustained audience behavior.
```

Replace with:
```
- `content_trends` - Qualitative trend analysis: narrative formats, hooks, and cultural shifts. Use as supplementary creative context and for cultural hooks, but not as the primary foundation for campaign themes. Trends change rapidly and may not reflect sustained audience behavior. **Exception:** entries with a `source` matching `intel-hub-brief-*` are PMM-validated, quantitatively-scored signals — treat as higher-confidence than general trend files and prefer them as creative departure points when they align with strategic priorities.
```

- [ ] **Step 2: Commit**

```bash
cd services/agent-collective-v2
git add agent_collective/prompts/discovery/concept_generator.md
git commit -m "feat: update concept_generator — weight intel-hub-brief content_trends entries higher"
```

---

## Task 6: Add sample intel hub brief and smoke test

**Files:**
- Create: `services/agent-collective-v2/agent_collective/kb/kr/intel-hub-brief-kr-2026-W19.md`

- [ ] **Step 1: Create the sample brief**

```bash
cat > services/agent-collective-v2/agent_collective/kb/kr/intel-hub-brief-kr-2026-W19.md << 'EOF'
# Shorts Intel Hub — Approved Topics (KR, 2026-W19)

**Source:** Shorts Intel Hub
**Market:** KR
**Week:** 2026-W19
**Sent:** 2026-05-07
**Topic count:** 3

The following topics were human-approved by the marketing team this week. Use them as the canonical brief inputs when generating creative concepts, prompts, or campaign strategies for this market.

---

## 1. AI Personal Aesthetic Diagnosis

Users leverage ChatGPT for a full aesthetic breakdown, including personal color, face type, and makeup analysis.

| Field | Value |
|---|---|
| Source | Vayner |
| Target demo | Females 18–34 |
| Primary markets | Global |
| Trend velocity | Emerging |
| Trend scale | Creation-Led |
| Creation complexity | Medium |
| Trend bucket | Creative Self-Expression |
| Sentiment | positive |
| Content quality | good |
| Brand safe | Yes |
| GenAI | Yes |
| AI tool | ChatGPT |
| Rank | #1 |
| Score | 100.0 |

**Performance**

- Engagement rate: 4.0%

---

## 2. AI-Generated Cat Meme

A trend where creators use AI-generated pet images combined with popular meme audio.

| Field | Value |
|---|---|
| Source | Vayner |
| Target demo | GenPop 25–34 |
| Primary markets | KR |
| Trend velocity | Emerging |
| Trend scale | Creation-Led |
| Creation complexity | Easy |
| Trend bucket | Creative Self-Expression |
| Sentiment | positive |
| Content quality | good |
| Brand safe | Yes |
| GenAI | Yes |
| AI tool | Unidentified |
| Rank | #2 |
| Score | 52.9 |

**Performance**

- Engagement rate: 3.0%

---

## 3. Barbie Doll AI

Creators use AI-generated Barbie dolls for POV content and dance challenges.

| Field | Value |
|---|---|
| Source | Vayner |
| Target demo | Females 25–34 |
| Primary markets | KR |
| Trend velocity | Niche |
| Trend scale | Viewer-led |
| Creation complexity | Medium |
| Trend bucket | Creative Self-Expression |
| Sentiment | positive |
| Content quality | potentiallyAISlop |
| Brand safe | Yes |
| GenAI | Yes |
| AI tool | Unidentified |
| Rank | #3 |
| Score | 12.8 |

**Performance**

- Engagement rate: 2.0%

---
EOF
```

- [ ] **Step 2: Verify the file is picked up by `_get_valid_kb_files`**

```bash
cd services/agent-collective-v2
python3 -c "
from agent_collective.agent import _get_valid_kb_files
files = _get_valid_kb_files('kr')
intel_files = [f.name for f in files if 'intel-hub' in f.name]
print('Intel hub files found:', intel_files)
assert len(intel_files) == 1, 'Expected 1 intel hub file'
print('OK')
"
```

Expected:
```
Intel hub files found: ['intel-hub-brief-kr-2026-W19.md']
OK
```

- [ ] **Step 3: Verify stale detection works (manual test)**

```bash
cd services/agent-collective-v2
python3 -c "
from datetime import date, timedelta
from agent_collective.agent import _parse_intel_hub_week

# W19 2026 = Monday May 4
content = '**Week:** 2026-W19\n'
week_start = _parse_intel_hub_week(content)
print('Week start:', week_start)
today = date.today()
days_old = (today - week_start).days
print('Days old:', days_old)
print('Stale (>14):', days_old > 14)
"
```

Expected (run on 2026-05-07):
```
Week start: 2026-05-04
Days old: 3
Stale (>14): False
```

- [ ] **Step 4: Commit**

```bash
cd services/agent-collective-v2
git add agent_collective/kb/kr/intel-hub-brief-kr-2026-W19.md
git commit -m "feat: add sample KR intel hub brief for 2026-W19"
```

- [ ] **Step 5: Push branch**

```bash
git push origin feat/shorts-intel-hub-kb-integration
```
