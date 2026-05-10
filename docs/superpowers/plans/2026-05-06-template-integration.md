# Template Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** When a Photo to Video concept reaches the creative phase, agent collective constrains the storyboard to the veo_shorts_v1 template structure, surfaces the template to the user, and embeds slot IDs in the generation manifest so the creative generator can produce the correct template stamper handoff.

**Architecture:** A `TEMPLATE_CATALOG` dict in `agent.py` maps feature names to template schemas. A `before_agent_callback` on `creative_phase` looks up the active featured tool and writes the matching schema to session state. Three prompt files read `template_schema` from session state via template injection and adapt their output accordingly.

**Tech Stack:** Python 3.12, Google ADK (`google-adk==1.28.0`), pytest, Markdown prompt files injected via `{template_schema}` state substitution.

---

## File Map

| File | Change |
|---|---|
| `services/agent-collective-v2/agent_collective/agent.py` | Add `TEMPLATE_CATALOG` constant; add `_make_creative_phase_before_callback()`; wire callback to `creative_phase` |
| `services/agent-collective-v2/agent_collective/prompts/creative/creative_director.md` | Change camera roll count 6→9; add template-aware selected photo section |
| `services/agent-collective-v2/agent_collective/prompts/creative/creative_presenter.md` | Surface template name when template_schema is present |
| `services/agent-collective-v2/agent_collective/prompts/production/creative_prompter.md` | Add template_id/slot_id/selected_slot_mapping to manifest output schema |
| `services/agent-collective-v2/tests/test_template_catalog.py` | New — unit tests for catalog lookup and callback state-writing logic |

---

## Task 1: Add TEMPLATE_CATALOG and creative_phase callback to agent.py

**Files:**
- Modify: `services/agent-collective-v2/agent_collective/agent.py`
- Create: `services/agent-collective-v2/tests/test_template_catalog.py`

- [ ] **Step 1: Create test file and write failing tests**

Create `services/agent-collective-v2/tests/__init__.py` (empty) and `services/agent-collective-v2/tests/test_template_catalog.py`:

```python
import json
import pytest
import sys
from pathlib import Path

# Allow importing agent_collective without a full ADK environment
sys.path.insert(0, str(Path(__file__).parent.parent))


# ---------------------------------------------------------------------------
# Minimal stubs so agent.py can be imported without google-adk installed
# in the test environment. If google-adk IS installed these are ignored.
# ---------------------------------------------------------------------------
try:
    from agent_collective.agent import TEMPLATE_CATALOG, _make_creative_phase_before_callback
except ImportError:
    pytest.skip("google-adk not available", allow_module_level=True)


class _FakeState(dict):
    pass


class _FakeSession:
    id = "test-session"


class _FakeCallbackContext:
    def __init__(self, state: dict):
        self.state = _FakeState(state)
        self.session = _FakeSession()


# ---------------------------------------------------------------------------
# TEMPLATE_CATALOG tests
# ---------------------------------------------------------------------------

def test_catalog_has_photo_to_video():
    assert "Photo to Video" in TEMPLATE_CATALOG


def test_photo_to_video_maps_to_veo_shorts_v1():
    entry = TEMPLATE_CATALOG["Photo to Video"]
    assert entry["template_id"] == "veo_shorts_v1"
    assert entry["template_version"] == "1.0"


def test_photo_to_video_has_selected_image_count_2():
    assert TEMPLATE_CATALOG["Photo to Video"]["selected_image_count"] == 2


# ---------------------------------------------------------------------------
# _make_creative_phase_before_callback tests
# ---------------------------------------------------------------------------

def _make_brief(feature_name: str) -> str:
    return json.dumps({
        "proposition": {
            "featured_tool": {
                "feature_name": feature_name
            }
        }
    })


@pytest.mark.asyncio
async def test_callback_writes_template_schema_for_photo_to_video():
    ctx = _FakeCallbackContext({"marketing_brief": _make_brief("Photo to Video")})
    cb = _make_creative_phase_before_callback()
    await cb(ctx)
    assert ctx.state.get("template_schema") is not None
    schema = json.loads(ctx.state["template_schema"])
    assert schema["template_id"] == "veo_shorts_v1"
    assert schema["selected_image_count"] == 2


@pytest.mark.asyncio
async def test_callback_writes_none_for_unknown_tool():
    ctx = _FakeCallbackContext({"marketing_brief": _make_brief("Add Audio")})
    cb = _make_creative_phase_before_callback()
    await cb(ctx)
    assert ctx.state.get("template_schema") is None


@pytest.mark.asyncio
async def test_callback_handles_missing_brief_gracefully():
    ctx = _FakeCallbackContext({})
    cb = _make_creative_phase_before_callback()
    await cb(ctx)  # must not raise
    assert ctx.state.get("template_schema") is None
```

- [ ] **Step 2: Run tests to confirm they fail**

```bash
cd services/agent-collective-v2
.venv/bin/pytest tests/test_template_catalog.py -v 2>&1 | head -30
```

Expected: `ImportError` or `FAILED` — `TEMPLATE_CATALOG` and `_make_creative_phase_before_callback` don't exist yet.

- [ ] **Step 3: Add TEMPLATE_CATALOG to agent.py**

In `agent_collective/agent.py`, after the `MARKET_OUTPUT_DIR` and `KB_CACHE_DIR` lines (around line 57), add:

```python
# =========================================================================
# Template catalog
# =========================================================================
# Maps Shorts Creation Tool feature_name → Remotion template schema.
# 1:1 for now. Extend to a list per key when multiple templates exist per tool.

TEMPLATE_CATALOG: dict[str, dict] = {
    "Photo to Video": {
        "template_id": "veo_shorts_v1",
        "template_version": "1.0",
        "selected_image_count": 2,
        "has_generated_video": True,
        "has_prompt_text": True,
    },
}
```

- [ ] **Step 4: Add _make_creative_phase_before_callback to agent.py**

In `agent_collective/agent.py`, add this function in the callbacks section (after `_make_timing_before_callback`, around line 578):

```python
def _make_creative_phase_before_callback():
    """Before-callback for creative_phase.

    Reads marketing_brief from session state, looks up the featured tool in
    TEMPLATE_CATALOG, and writes the matching template schema (or None) as
    template_schema to session state. All downstream prompt conditionals gate
    on this key.
    """
    async def callback(callback_context) -> None:
        brief_raw = callback_context.state.get("marketing_brief")
        if not brief_raw:
            callback_context.state["template_schema"] = None
            return
        brief = _parse_state_value(brief_raw)
        feature_name = (
            brief.get("proposition", {})
                 .get("featured_tool", {})
                 .get("feature_name", "")
        ) or ""
        template = TEMPLATE_CATALOG.get(feature_name)
        callback_context.state["template_schema"] = (
            json.dumps(template) if template else None
        )
    return callback
```

- [ ] **Step 5: Wire callback to creative_phase**

Find the `creative_phase` SequentialAgent definition (around line 2036) and add the callback:

```python
creative_phase = SequentialAgent(
    name="creative_phase",
    sub_agents=[creative_director, creative_presenter],
    before_agent_callback=_make_creative_phase_before_callback(),
)
```

- [ ] **Step 6: Run tests — expect pass**

```bash
cd services/agent-collective-v2
.venv/bin/pytest tests/test_template_catalog.py -v
```

Expected output:
```
tests/test_template_catalog.py::test_catalog_has_photo_to_video PASSED
tests/test_template_catalog.py::test_photo_to_video_maps_to_veo_shorts_v1 PASSED
tests/test_template_catalog.py::test_photo_to_video_has_selected_image_count_2 PASSED
tests/test_template_catalog.py::test_callback_writes_template_schema_for_photo_to_video PASSED
tests/test_template_catalog.py::test_callback_writes_none_for_unknown_tool PASSED
tests/test_template_catalog.py::test_callback_handles_missing_brief_gracefully PASSED
```

- [ ] **Step 7: Commit**

```bash
git add agent_collective/agent.py tests/__init__.py tests/test_template_catalog.py
git commit -m "feat: add TEMPLATE_CATALOG and creative_phase template detection callback"
```

---

## Task 2: Update creative_director.md — camera roll 6→9 and selected photo markup

**Files:**
- Modify: `services/agent-collective-v2/agent_collective/prompts/creative/creative_director.md`

- [ ] **Step 1: Change camera roll count from 6 to 9 (two occurrences)**

In `creative_director.md` line 172, change:
```
"string | null - camera roll scenes always list exactly 6 photos (camera_roll_photo_01 through camera_roll_photo_06)"
```
to:
```
"string | null - camera roll scenes always list exactly 9 photos (camera_roll_photo_01 through camera_roll_photo_09)"
```

In `creative_director.md` line 222, change:
```
**Camera roll scenes always use exactly 6 nested images** (`camera_roll_photo_01` through `camera_roll_photo_06`) to match the locked UI template. List all 6 individually so each gets its own generation job. Do not use a different count.
```
to:
```
**Camera roll scenes always use exactly 9 nested images** (`camera_roll_photo_01` through `camera_roll_photo_09`) to match the locked UI template. List all 9 individually so each gets its own generation job. Do not use a different count.
```

- [ ] **Step 2: Add template-aware selected photo section**

Append the following section to `creative_director.md` immediately before the `## ADK Integration Postscript` heading:

```markdown
## Template-aware storyboarding

The session state key `template_schema` tells you whether the selected concept maps to a Remotion template. Check its value before designing the storyboard.

Current value: `{template_schema}`

If `template_schema` is not null, parse it and apply these additional rules:

### Selected photos (Photo to Video template)

When `template_schema.selected_image_count` is present (value: 2), you must designate exactly that many of the 9 camera roll photos as the **selected inputs** for AI video generation. The selection must be creatively motivated: choose the photos whose subjects would produce the most compelling and narratively coherent transformation.

For each selected photo element, add two extra fields alongside the existing ones:

```json
{
  "element_id": "camera_roll_photo_03",
  "element_type": "ui_nested_asset",
  "description": "...",
  "creative_direction": "...",
  "selected": true,
  "selection_rationale": "This photo's subject — [brief reason] — will produce the strongest transformation payoff."
}
```

Non-selected photos omit `selected` and `selection_rationale` entirely (do not set `selected: false`).

The selection rationale is read by the creative_presenter to explain to the user why these two photos anchor the video generation.
```

- [ ] **Step 3: Verify the file looks right**

```bash
grep -n "camera_roll_photo_0\|selected_image\|template_schema\|Template-aware" services/agent-collective-v2/agent_collective/prompts/creative/creative_director.md
```

Expected: lines reference `camera_roll_photo_09`, `template_schema`, `selected_image_count`, `Template-aware storyboarding`.

- [ ] **Step 4: Commit**

```bash
git add agent_collective/prompts/creative/creative_director.md
git commit -m "feat: update creative_director — 9 camera roll photos, template-aware selected photo markup"
```

---

## Task 3: Update creative_presenter.md — surface template name

**Files:**
- Modify: `services/agent-collective-v2/agent_collective/prompts/creative/creative_presenter.md`

- [ ] **Step 1: Add template surface to the opening context section**

In `creative_presenter.md`, find the `### 1. Opening context (one line)` section and replace it with:

```markdown
### 1. Opening context

If `template_schema` is not null (current value: `{template_schema}`), open with exactly this line before anything else:

> "This concept will be produced using the **[template_schema.template_id]** template."

Then on the next line, add the standard one-line campaign context (e.g., "Here are the creative concepts for the Korea campaign, ready for your review.").

If `template_schema` is null, open with the standard one-line campaign context only.
```

- [ ] **Step 2: Add template_schema to the Session Data section**

At the bottom of `creative_presenter.md`, append to the `## Session Data` section:

```markdown
### template_schema
{template_schema}
```

- [ ] **Step 3: Verify**

```bash
grep -n "template_schema\|template_id\|Session Data" services/agent-collective-v2/agent_collective/prompts/creative/creative_presenter.md
```

Expected: lines reference `template_schema` in the opening context rule and in Session Data.

- [ ] **Step 4: Commit**

```bash
git add agent_collective/prompts/creative/creative_presenter.md
git commit -m "feat: creative_presenter surfaces template name when template_schema is active"
```

---

## Task 4: Update creative_prompter.md — slot IDs and template manifest fields

**Files:**
- Modify: `services/agent-collective-v2/agent_collective/prompts/production/creative_prompter.md`

- [ ] **Step 1: Add template-aware manifest section**

In `creative_prompter.md`, append the following section immediately before `## What to avoid`:

```markdown
## Template-aware manifest generation

The session state key `template_schema` tells you whether this run maps to a Remotion template.

Current value: `{template_schema}`

If `template_schema` is not null, apply these additional rules when building the manifest:

### Top-level template fields

Add two fields at the root of the manifest object:

```json
{
  "template_id": "<template_schema.template_id>",
  "template_version": "<template_schema.template_version>",
  ...
}
```

### slot_id per job

For every job, add a `slot_id` field. Set it according to these rules:

- **Camera roll photos** (`element_type: "ui_nested_asset"`, `element_id` matching `camera_roll_photo_01` through `camera_roll_photo_09`): assign `slot_id` values `gridImage1` through `gridImage9` in the same order (photo_01 → gridImage1, photo_02 → gridImage2, … photo_09 → gridImage9).
- **Veo payoff video** (the climax scene's video job, `asset_type: "video"` from a `hook`/`body`/`climax`/`resolution` scene that is not a camera roll photo): assign `slot_id: "generatedVideo"`.
- **All other jobs**: assign `slot_id: null`.

### selected_slot_mapping

After the `jobs` array, add a `selected_slot_mapping` object. Read the creative_package storyboard and find the 2 camera roll photos that have `"selected": true`. Map their template slot IDs to their job IDs:

```json
"selected_slot_mapping": {
  "selectedImage1": "job_003",
  "selectedImage2": "job_007"
}
```

Where `job_003` and `job_007` are the `job_id` values of the two selected camera roll photo jobs. The order is the order the selected photos appear in the storyboard element list.

If `template_schema` is null, omit `template_id`, `template_version`, and `selected_slot_mapping` from the manifest entirely, and set `slot_id: null` on all jobs.
```

- [ ] **Step 2: Update the Output Schema section to include the new fields**

In the `## Output Schema` section of `creative_prompter.md`, find the opening of the JSON schema block and add the two new optional top-level fields and the `selected_slot_mapping` field:

```json
{
  "manifest_version": "1.1",
  "brief_id": "string - carried from marketing_brief.brief_id",
  "brief_name": "string - carried from marketing_brief.brief_name",
  "market": "string - country code from marketing_brief.market.country_code",
  "market_nationality": "string - carried from marketing_brief.market.market_nationality",
  "created_at": "ISO 8601 timestamp",
  "template_id": "string | null - veo_shorts_v1 when template active, else omit",
  "template_version": "string | null - e.g. 1.0 when template active, else omit",
  "total_reference_images": 0,
  "total_jobs": 0,
  "total_text_items": 0,
  "reference_images": [ ... ],
  "jobs": [
    {
      "job_id": "string - e.g. job_001",
      "slot_id": "string | null - e.g. gridImage1, generatedVideo, or null",
      ...
    }
  ],
  "selected_slot_mapping": {
    "selectedImage1": "string - job_id of the first selected camera roll photo",
    "selectedImage2": "string - job_id of the second selected camera roll photo"
  },
  "text_items": [ ... ]
}
```

(Leave all existing fields in `reference_images`, `jobs`, and `text_items` unchanged. Only add `template_id`, `template_version`, `slot_id` on jobs, and `selected_slot_mapping`.)

- [ ] **Step 3: Add template_schema to the Session Data section**

At the bottom of `creative_prompter.md`, append to the `## Session Data` section:

```markdown
### template_schema
{template_schema}
```

- [ ] **Step 4: Update the ADK Integration Postscript State reads**

In the `## ADK Integration Postscript` section, find the `**State reads:**` list and add:

```
- `template_schema` - Template schema if active featured tool maps to a Remotion template, else null
```

- [ ] **Step 5: Verify**

```bash
grep -n "template_schema\|template_id\|template_version\|slot_id\|selected_slot_mapping\|gridImage\|generatedVideo" services/agent-collective-v2/agent_collective/prompts/production/creative_prompter.md
```

Expected: multiple hits across the new section, schema block, and Session Data.

- [ ] **Step 6: Commit**

```bash
git add agent_collective/prompts/production/creative_prompter.md
git commit -m "feat: creative_prompter emits template_id, slot_id, and selected_slot_mapping when template active"
```

---

## Task 5: Push branch and open PR

- [ ] **Step 1: Run all tests one final time**

```bash
cd services/agent-collective-v2
.venv/bin/pytest tests/test_template_catalog.py -v
```

Expected: 6 tests passing.

- [ ] **Step 2: Push branch**

```bash
git push origin feat/template-stamper-integration
```

- [ ] **Step 3: Open PR**

```bash
gh pr create \
  --title "feat: veo_shorts_v1 template integration in agent collective" \
  --body "$(cat <<'EOF'
## Summary

- Adds `TEMPLATE_CATALOG` in `agent.py` mapping Shorts Creation Tool names to Remotion template schemas
- `creative_phase` callback detects Photo to Video and writes `template_schema` to session state
- `creative_director` generates 9 camera roll photos (up from 6) and marks 2 as selected inputs when template is active
- `creative_presenter` surfaces the template name at the top of the storyboard presentation
- `creative_prompter` embeds `template_id`, `slot_id` per job, and `selected_slot_mapping` in the generation manifest — additive, non-breaking for non-template runs

## Related

- Creative generator changes to consume slot IDs and produce template stamper handoff: #17

## Test plan

- [ ] Run `pytest tests/test_template_catalog.py -v` — 6 tests pass
- [ ] Run a Photo to Video campaign end-to-end via `adk web` — storyboard presentation opens with template name, manifest includes slot IDs
- [ ] Run a non-Photo-to-Video campaign — manifest identical to pre-change format (no template fields)
EOF
)"
```
