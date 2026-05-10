# Template Integration in Agent Collective

**Date:** 2026-05-06
**Status:** Approved

## Problem

The template stamper renders final Shorts videos using Remotion templates with named asset slots. The creative generator (downstream of agent collective) needs to know which generated asset maps to which slot. Currently the `generation_manifest` produced by agent collective has no template awareness — slot mapping is implicit and would require guesswork in the creative generator.

Additionally, at the storyboarding phase, the user has no visibility that their concept will be produced via a specific template with a fixed structure.

## Scope

Agent collective changes only. Creative generator changes to consume the new manifest fields and produce the template stamper handoff are tracked in [issue #17](https://github.com/ivanivanho-work/v3-creative-engine/issues/17).

## Design

### Template catalog

A `TEMPLATE_CATALOG` dict in `agent.py` maps Shorts Creation Tool feature names to their template schema. 1:1 mapping for now; extensible to 1:many later by making the value a list.

```python
TEMPLATE_CATALOG = {
    "Photo to Video": {
        "template_id": "veo_shorts_v1",
        "template_version": "1.0",
        "selected_image_count": 2,
        "has_generated_video": True,
        "has_prompt_text": True,
    }
}
```

**Trigger rule:** whenever `marketing_brief.proposition.featured_tool.feature_name` matches a catalog key, the template is active. No opt-out. For Photo to Video this always maps to `veo_shorts_v1`.

### Session state

A `before_agent_callback` on `creative_phase` reads `marketing_brief` from session state, extracts `featured_tool.feature_name`, looks it up in `TEMPLATE_CATALOG`, and writes the result as `template_schema` to session state. If no match, writes `None`. All downstream prompt conditionals gate on this key.

### Global default change: camera roll photo count 6 → 9

The `creative_director.md` prompt currently hardcodes "camera roll scenes always use exactly 6 nested images." This changes to **9** unconditionally. This aligns the default with the `veo_shorts_v1` slot count and prevents drift for all future concepts regardless of template.

### `creative_director.md` additions

New section active when `template_schema` is present in session state:

- Generate exactly 9 `ui_nested_asset` elements in the camera roll scene (already the new default — this section reinforces it)
- Select `template_schema.selected_image_count` (2) of the 9 photos as the hero inputs to the AI video generation. Selection must be creatively motivated: which photos would produce the most compelling transformation? Mark each selected photo with `"selected": true` and a `"selection_rationale"` string explaining the creative choice.
- The `promptText` (what the user typed into Photo to Video) is a `text_overlay` element in the UI scene. Write creative direction for what that prompt should convey — the actual copy is written by the creative_prompter.

### `creative_presenter.md` addition

When `template_schema` is present, prepend one line to the storyboard presentation:

> "This concept will be produced using the **veo_shorts_v1** template."

### `creative_prompter.md` additions

When `template_schema` is present:

**Manifest top level** — add two new fields:
```json
{
  "template_id": "veo_shorts_v1",
  "template_version": "1.0"
}
```

**Per job** — add `slot_id` field (null for non-template runs):
- Camera roll photos (`ui_nested_asset` elements): assigned `gridImage1` through `gridImage9` in order
- Veo payoff video (climax scene): `generatedVideo`
- End card video: locked asset, no generation job, no slot_id needed
- All other jobs: `slot_id: null`

**New top-level manifest block** — `selected_slot_mapping`:
```json
"selected_slot_mapping": {
  "selectedImage1": "job_003",
  "selectedImage2": "job_007"
}
```
Points to the job IDs of the 2 selected photos. The creative generator reads this to know which generated file URLs to use for `selectedImage1/2` in the stamper handoff. The selected images are a subset of the grid images — no additional generation needed.

**`promptText`** flows through `text_items` as `purpose: "in_ui_prompt_text"` — no change.

### Generation manifest schema changes (additive, non-breaking)

New optional fields — absent (or null) on non-template runs:

| Location | Field | Type |
|---|---|---|
| Top level | `template_id` | `string \| null` |
| Top level | `template_version` | `string \| null` |
| Top level | `selected_slot_mapping` | `object \| null` |
| Per job | `slot_id` | `string \| null` |

Non-template campaigns produce manifests identical to today. The creative generator's existing intake is unaffected until it is updated per issue #17.

## What is not changing

- Generation manifest format (extended, not replaced)
- Creative generator intake (reads the same `generation_manifest` key)
- Non-Photo-to-Video campaign paths
- Quality loop, adaptation pipeline, full campaign pipeline
