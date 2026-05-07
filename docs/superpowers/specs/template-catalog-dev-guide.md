# Template Catalog Developer Guide
# How to register a Remotion template with the Agent Collective pipeline

## Overview

The Agent Collective generates campaign assets through a multi-agent pipeline. When a campaign's featured tool maps to a Remotion template, the pipeline switches into **template mode** — the creative director designs a storyboard locked to the template's scene structure, and the manifest emitter assigns every generated asset to a named slot that Remotion reads.

Your job as the template developer is to **fill out a catalog entry** in `agent.py`. Once the entry is complete and correct, the pipeline handles everything automatically — no prompt edits needed.

---

## Where the catalog lives

```
services/agent-collective-v2/agent_collective/agent.py
```

Look for `TEMPLATE_CATALOG` near the top of the file. Add your template as a new key under the dict. The key is the exact `feature_name` string from the KB creation tools file (e.g. `"Photo to Video"`).

---

## Full catalog entry schema

```python
TEMPLATE_CATALOG: dict[str, dict] = {
    "Your Feature Name": {
        "template_id": "your_template_id",        # Remotion template identifier — must match exactly
        "template_version": "1.0",                # Semver string
        "selected_image_count": 2,                # OPTIONAL — only if users pick photos as AI inputs
        "scene_structure": [                      # Ordered list of every scene the template renders
            {
                "scene_type": "body",             # Matches storyboard scene_type field exactly
                "label": "Camera roll grid",      # Human label for docs/debugging
                "generates": True,                # True = new assets generated here
                "slots": [                        # Required when generates: True
                    {
                        "slot_id": "gridImage1",  # The Remotion slot name the asset lands in
                        "element_id": "camera_roll_photo_01",  # Storyboard element_id that maps to this slot
                        "asset_type": "image",    # "image" or "video"
                    },
                    # ... one entry per slot in this scene
                ],
                "note": "Guidance for the creative director on what this scene shows.",
            },
            {
                "scene_type": "selection",
                "label": "Selected photos highlight",
                "generates": False,               # False = no new generation jobs
                "reuses_from": "body",            # OPTIONAL — which scene's assets this scene displays
                "note": "Shows selected photos at larger size. No new assets — reuses body slots.",
            },
            {
                "scene_type": "loading",
                "label": "AI generation progress",
                "generates": False,
                "note": "Locked UI frame. Nothing to generate.",
            },
            {
                "scene_type": "climax",
                "label": "Generated video reveal",
                "generates": True,
                "slots": [
                    {
                        "slot_id": "generatedVideo",
                        "element_id": "generated_video",
                        "asset_type": "video",
                    },
                ],
                "note": "The AI-generated video payoff. One video job.",
            },
            {
                "scene_type": "end_card",
                "label": "Brand end card",
                "generates": False,
                "note": "Locked brand assets. Tagline adaptable, CTA and logo locked.",
            },
        ],
    },
}
```

---

## Field reference

### Top-level fields

| Field | Required | Type | Description |
|---|---|---|---|
| `template_id` | Yes | string | The Remotion template identifier. Must match exactly what Remotion expects. |
| `template_version` | Yes | string | Semver string (e.g. `"1.0"`). Increment minor when slots change, major when scene_structure changes. |
| `selected_image_count` | No | int | Number of photos the user selects as inputs for AI generation (e.g. Photo to Video takes 2). Omit entirely if your template has no photo selection mechanic. |
| `scene_structure` | Yes | list | Ordered list of scene entries. The creative director will produce exactly these scene types in this order for the V1 deliverable. |

### Per-scene fields

| Field | Required | Type | Description |
|---|---|---|---|
| `scene_type` | Yes | string | The scene identifier. Must be one of: `hook`, `body`, `selection`, `loading`, `climax`, `resolution`, `end_card`. Use a consistent vocabulary — the storyboard, scene map, and manifest all reference this value. |
| `label` | Yes | string | Human-readable name for this scene. Used in docs and debug output. |
| `generates` | Yes | bool | `True` if this scene produces new generation jobs (images or video). `False` for locked UI frames, asset-reuse scenes, and progress screens. |
| `reuses_from` | No | string | `scene_type` of the scene whose assets this scene re-displays. When set, the creative director uses the same `element_id` values from that scene and the prompter produces no new jobs. |
| `slots` | Required when `generates: True` | list | Explicit slot definitions (see below). |
| `note` | Yes | string | Guidance text injected into the creative director's prompt. Explain what this scene looks like and any design constraints. |

### Per-slot fields (inside `slots`)

| Field | Required | Type | Description |
|---|---|---|---|
| `slot_id` | Yes | string | The Remotion slot name this asset lands in. Must match the slot name in your Remotion template exactly (case-sensitive). |
| `element_id` | Yes | string | The storyboard `element_id` the creative director must use for this slot. The prompter maps `element_id → slot_id` directly from this table — if these don't match the storyboard, the slot won't be filled. |
| `asset_type` | Yes | string | `"image"` or `"video"`. Determines which generation model is used. |

---

## What the pipeline does with your catalog entry

Once your entry is in the catalog, the pipeline automatically:

1. **Creative director** — receives `scene_structure` and designs a storyboard with exactly those scene types in that order. It uses your `element_id` values verbatim, and marks `selected_image_count` elements as `selected: true`.

2. **Creative prompter** — reads `scene_structure` to determine which scenes generate jobs (`generates: true`) and which don't (`generates: false`). Assigns `slot_id` to each job by looking up the element's `slot_id` from your `slots` table. Builds `selected_slot_mapping` from the selected elements.

3. **Variation generators (FC pipeline)** — same slot assignment logic applied to each audience variation.

4. **Remotion** — receives a manifest with `template_id`, `template_version`, per-job `slot_id`, and `selected_slot_mapping`. Slots are filled in order. The template renders.

---

## Rules to follow when building your Remotion template

### 1. Slot IDs must be stable

Once you publish a slot name (e.g. `gridImage1`, `generatedVideo`), do not rename it. The catalog entry maps `element_id → slot_id`, and the manifest references these by name. A renamed slot in Remotion that isn't updated in the catalog will silently produce an empty slot at render time.

### 2. Every renderable slot must be in the catalog

If Remotion renders something, it needs a slot. If a slot has no catalog entry, the pipeline won't generate an asset for it and it renders empty. Audit your template against the catalog — every slot in Remotion should have a corresponding entry in `slots`.

### 3. `generates: False` scenes must have no generatable content

Scenes marked `generates: False` produce zero generation jobs. If your template needs a generated asset in what you've marked as a `selection` or `loading` scene, you either need to move it to a `generates: True` scene or mark the scene as `generates: True` and add a slot for it.

### 4. Asset-sharing scenes must use `reuses_from`

If a scene in your template displays an asset that was already generated in a previous scene (e.g. a selected photo shown at larger size before the loading screen), declare `reuses_from` pointing to the originating scene. This tells the pipeline not to generate a duplicate job. Without this, you may get orphaned jobs or missing renders.

### 5. `end_card` is always `generates: False`

The end card contains locked brand assets and a text tagline. It never produces image or video generation jobs. Always declare it as `generates: False`.

### 6. Scene order matters

The creative director produces scenes in the exact order they appear in `scene_structure`. If your template has a specific timing or transition dependency between scenes, the order in the catalog controls it.

---

## Versioning

When you update a template:

- **Patch** (visual change, no slot changes): increment `template_version` patch digit. No catalog change needed.
- **Minor** (new slot added, existing slots unchanged): add the new slot to `slots` in the catalog entry, increment minor version.
- **Major** (scene removed, slot renamed, scene order changed): update `scene_structure` fully, increment major version. Coordinate with the pipeline team — existing runs may break.

---

## Example: adding a new template

Suppose you're building `story_reel_v1` for the **Add Audio** feature. It has three scenes: a montage of clips, a beat-drop highlight, and an end card.

```python
"Add Audio": {
    "template_id": "story_reel_v1",
    "template_version": "1.0",
    "scene_structure": [
        {
            "scene_type": "body",
            "label": "Clip montage",
            "generates": True,
            "slots": [
                {"slot_id": "clipA", "element_id": "montage_clip_01", "asset_type": "video"},
                {"slot_id": "clipB", "element_id": "montage_clip_02", "asset_type": "video"},
                {"slot_id": "clipC", "element_id": "montage_clip_03", "asset_type": "video"},
            ],
            "note": "Three short video clips that cut to the beat. Each clip is a distinct life moment.",
        },
        {
            "scene_type": "climax",
            "label": "Beat-drop highlight",
            "generates": True,
            "slots": [
                {"slot_id": "heroClip", "element_id": "hero_clip", "asset_type": "video"},
            ],
            "note": "Single high-impact video clip timed to the beat drop. More dynamic than the montage clips.",
        },
        {
            "scene_type": "end_card",
            "label": "Brand end card",
            "generates": False,
            "note": "Locked brand assets. Tagline adaptable, CTA locked.",
        },
    ],
},
```

That's it. No prompt edits. The pipeline reads the catalog and handles the rest.

---

## Checklist before submitting a catalog entry

- [ ] `template_id` matches the Remotion template identifier exactly (case-sensitive)
- [ ] Every slot in the Remotion template has a corresponding entry in `slots`
- [ ] Every `element_id` in `slots` is a value the creative director will actually use in the storyboard (check the note field is clear enough to guide it)
- [ ] Scenes with `generates: False` contain no generatable content in the Remotion template
- [ ] Asset-reuse scenes have `reuses_from` set
- [ ] Scene order in `scene_structure` matches the playback order in Remotion
- [ ] `end_card` is last and `generates: False`
- [ ] `template_version` is set to `"1.0"` for a new template
