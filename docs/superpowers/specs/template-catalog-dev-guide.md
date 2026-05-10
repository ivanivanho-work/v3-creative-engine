# Template Catalog Developer Guide
# How to register a Remotion template with the Agent Collective pipeline

## Overview

The Agent Collective generates campaign assets through a multi-agent pipeline. When a campaign's featured tool maps to a Remotion template, the pipeline switches into **template mode** — the creative director designs a storyboard locked to the template's scene structure, and the manifest emitter assigns every generated asset to a named slot that Remotion reads.

Your job as the template developer is to **submit a catalog entry** for your template. The entry lives in `agent.py` and describes your template's scene structure, which slots need AI-generated assets, which slots carry text, and how selected photos are handled. Once the entry is complete and correct, the pipeline handles everything automatically.

---

## Where the catalog lives

```
services/agent-collective-v2/agent_collective/agent.py
```

Look for `TEMPLATE_CATALOG` near the top of the file. Add your template as a new key under the dict. The key is the exact `feature_name` string from the KB creation tools file (e.g. `"Photo to Video"`).

---

## What to put in the catalog

Your Remotion template has slots. Not all slots are the same — the catalog only describes slots that the **pipeline is responsible for filling**. Before writing your entry, classify each slot in your template:

| Slot type | Who fills it | Catalog entry needed? |
|---|---|---|
| AI-generated images or videos | Generation pipeline (image/video model) | Yes — add to `slots` in a `generates: true` scene |
| Selected photo display slots (e.g. `selectedImage1`) | Remotion fills internally from the pipeline's `selected_slot_mapping` | No — set `selected_image_count` and the rest is automatic |
| Text values the user authors (e.g. an AI prompt the user typed) | Pipeline writes as a text item and routes to Remotion | Yes — add to `text_slots` in the relevant scene |
| Locked brand assets (e.g. a pre-made brand video, logo) | Remotion loads natively | No — Remotion handles these, do not add to catalog |

Only slots in the first and third rows need catalog entries. Everything else is handled automatically.

---

## Full catalog entry schema

```python
TEMPLATE_CATALOG: dict[str, dict] = {
    "Your Feature Name": {
        "template_id": "your_template_id",        # Remotion template identifier — must match exactly
        "template_version": "1.0",                # Semver string
        "selected_image_count": 2,                # OPTIONAL — number of photos the user picks as AI inputs
        "scene_structure": [                      # Ordered list of every scene the template renders
            {
                "scene_type": "body",             # Matches storyboard scene_type field exactly
                "label": "Camera roll grid",      # Human label for docs/debugging
                "generates": True,                # True = AI generation jobs produced here
                "slots": [                        # Required when generates: True
                    {
                        "slot_id": "gridImage1",  # The Remotion slot name the asset lands in
                        "element_id": "camera_roll_photo_01",  # Storyboard element_id that maps to this slot
                        "asset_type": "image",    # "image" or "video"
                    },
                    # ... one entry per AI-generated slot in this scene
                ],
                "note": "Guidance for the creative director on what this scene shows.",
            },
            {
                "scene_type": "selection",
                "label": "Selected photos highlight",
                "generates": False,               # No new generation — reuses grid images
                "reuses_from": "body",            # Which scene's assets Remotion re-displays here
                "note": "Shows selected photos at larger size. Remotion populates its internal selectedImage slots automatically — no new generation.",
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
                "text_slots": [                   # OPTIONAL — text values the pipeline must pass to Remotion
                    {
                        "slot_id": "promptText",  # Remotion text slot name — must match exactly
                        "source": "climax_creative_direction",  # Where the pipeline gets the value
                        "note": "The AI generation prompt text the user typed. Write in market language.",
                    },
                ],
                "note": "The AI-generated video payoff. One video job. Also write the promptText text_item.",
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
| `selected_image_count` | No | int | Number of photos the user selects as AI inputs. Omit entirely if your template has no photo selection mechanic. The pipeline marks this many camera roll photos as selected and records which grid slots they came from in `selected_slot_mapping`. Remotion uses that to populate its internal selection display slots. |
| `scene_structure` | Yes | list | Ordered list of scene entries. The creative director will produce exactly these scene types in this order — no extras. |

### Per-scene fields

| Field | Required | Type | Description |
|---|---|---|---|
| `scene_type` | Yes | string | The scene identifier. Must be one of: `hook`, `body`, `selection`, `loading`, `climax`, `resolution`, `end_card`. |
| `label` | Yes | string | Human-readable name for this scene. Used in docs and debug output. |
| `generates` | Yes | bool | `True` if this scene produces new AI generation jobs. `False` for locked UI frames, asset-reuse scenes, progress screens, and end cards. |
| `reuses_from` | No | string | `scene_type` of the scene whose assets this scene re-displays. When set, the pipeline produces no new jobs for this scene. |
| `slots` | Required when `generates: True` | list | AI-generated slot definitions (see below). |
| `text_slots` | No | list | Text values the pipeline must pass to Remotion (see below). Omit if none. |
| `note` | Yes | string | Guidance text injected into the creative director's prompt. Explain what this scene looks like and any design constraints. |

### Per-slot fields (inside `slots`)

| Field | Required | Type | Description |
|---|---|---|---|
| `slot_id` | Yes | string | The Remotion slot name this generated asset lands in. Must match exactly (case-sensitive). |
| `element_id` | Yes | string | The storyboard `element_id` the creative director must use for this slot. The prompter maps `element_id → slot_id` directly from this table — if these don't match the storyboard, the slot won't be filled. |
| `asset_type` | Yes | string | `"image"` or `"video"`. Determines which generation model is used. |

### Per-text-slot fields (inside `text_slots`)

| Field | Required | Type | Description |
|---|---|---|---|
| `slot_id` | Yes | string | The Remotion text slot name (e.g. `"promptText"`). Must match exactly (case-sensitive). |
| `source` | Yes | string | Where the pipeline gets the value. `"climax_creative_direction"` = the AI generation prompt text from the climax scene; `"end_card_tagline"` = the end card tagline copy. |
| `note` | Yes | string | Guidance for the prompter on how to write this text (language, tone, what to draw from). |

---

## What the pipeline does with your catalog entry

Once your entry is in the catalog, the pipeline automatically:

1. **Creative director** — receives `scene_structure` and designs a storyboard with exactly those scene types in that order. It uses your `element_id` values verbatim, and marks `selected_image_count` elements as `selected: true`.

2. **Creative prompter** — reads `scene_structure` to determine which scenes generate jobs (`generates: true`) and which don't (`generates: false`). Assigns `slot_id` to each job by looking up the element's `slot_id` from your `slots` table. Builds `selected_slot_mapping` from the selected elements. Writes `text_items` for any `text_slots` entries.

3. **Variation generators (FC pipeline)** — same slot assignment logic applied to each audience variation.

4. **Remotion** — receives a manifest with `template_id`, `template_version`, per-job `slot_id`, `selected_slot_mapping`, and text items. Slots are filled in order. The template renders.

---

## Rules to follow when filling out the catalog entry

### 1. Slot IDs must be stable

Once you publish a slot name (e.g. `gridImage1`, `generatedVideo`), do not rename it. A renamed slot that isn't updated in the catalog will silently produce an empty slot at render time.

### 2. Every AI-generated slot must be in the catalog

If Remotion renders a generated asset, it needs a `slots` entry. If a slot has no catalog entry, the pipeline won't generate an asset for it and it renders empty. Audit your template — every AI-generated slot in Remotion should appear in `slots`.

### 3. Do not add Remotion-internal or locked slots to the catalog

Selected photo display slots (e.g. `selectedImage1`, `selectedImage2`) and locked brand assets (e.g. a pre-made brand video) are handled by Remotion. Do not add them to `slots` — the pipeline has no generation job to assign them.

### 4. `generates: False` scenes must have no new generatable content

Scenes marked `generates: False` produce zero generation jobs. If your template needs a generated asset in what you've marked as a `selection` or `loading` scene, move it to a `generates: True` scene or change the scene to `generates: True` and add a slot for it.

### 5. Asset-reuse scenes must use `reuses_from`

If a scene in your template displays an asset generated in a previous scene (e.g. selected photos shown before the loading screen), declare `reuses_from` pointing to the originating scene. Without this, you may get orphaned jobs or missing renders.

### 6. `end_card` is always `generates: False`

The end card contains locked brand assets. It never produces generation jobs. Always declare it as `generates: False`.

### 7. Add `text_slots` to the scene that contextually owns the text

Put `text_slots` on the scene where the text appears or is authored. The AI generation prompt text (`promptText`) belongs to the `climax` scene because that's where the generation result is revealed.

### 8. Scene order matters

The creative director produces scenes in the exact order they appear in `scene_structure`. Match the playback order of your Remotion template exactly.

---

## Versioning

When you update a template:

- **Patch** (visual change, no slot changes): increment `template_version` patch digit. No catalog change needed.
- **Minor** (new slot added, existing slots unchanged): add the new slot to the catalog entry, increment minor version.
- **Major** (scene removed, slot renamed, scene order changed): update `scene_structure` fully, increment major version. Coordinate with the pipeline team — existing runs may break.

---

## Example: Photo to Video (`veo_shorts_v1`)

```python
"Photo to Video": {
    "template_id": "veo_shorts_v1",
    "template_version": "1.0",
    "selected_image_count": 2,
    "scene_structure": [
        {
            "scene_type": "body",
            "label": "Camera roll grid",
            "generates": True,
            "slots": [
                {"slot_id": "gridImage1", "element_id": "camera_roll_photo_01", "asset_type": "image"},
                {"slot_id": "gridImage2", "element_id": "camera_roll_photo_02", "asset_type": "image"},
                {"slot_id": "gridImage3", "element_id": "camera_roll_photo_03", "asset_type": "image"},
                {"slot_id": "gridImage4", "element_id": "camera_roll_photo_04", "asset_type": "image"},
                {"slot_id": "gridImage5", "element_id": "camera_roll_photo_05", "asset_type": "image"},
                {"slot_id": "gridImage6", "element_id": "camera_roll_photo_06", "asset_type": "image"},
                {"slot_id": "gridImage7", "element_id": "camera_roll_photo_07", "asset_type": "image"},
                {"slot_id": "gridImage8", "element_id": "camera_roll_photo_08", "asset_type": "image"},
                {"slot_id": "gridImage9", "element_id": "camera_roll_photo_09", "asset_type": "image"},
            ],
            "note": "Camera roll UI — 9 photos in a grid. selected_image_count of them are marked selected: true with a selection_rationale.",
        },
        {
            "scene_type": "selection",
            "label": "Selected photos highlight",
            "generates": False,
            "reuses_from": "body",
            "note": "Shows only the selected photos at larger size before generation starts. No new generation jobs.",
        },
        {
            "scene_type": "loading",
            "label": "AI generation progress",
            "generates": False,
            "note": "Locked UI frame — AI generation progress screen. Nothing to generate.",
        },
        {
            "scene_type": "climax",
            "label": "Generated video reveal",
            "generates": True,
            "slots": [
                {"slot_id": "generatedVideo", "element_id": "generated_video", "asset_type": "video"},
            ],
            "text_slots": [
                {
                    "slot_id": "promptText",
                    "source": "climax_creative_direction",
                    "note": "The AI generation prompt the user typed. Write in the market's primary language. Should feel like a real user's input, e.g. '고양이가 스케이트보드를 타는 모습'.",
                },
            ],
            "note": "The AI-generated video payoff. One video job landing in generatedVideo. Also write the promptText text_item — the in-UI prompt the user typed.",
        },
        {
            "scene_type": "end_card",
            "label": "Brand end card",
            "generates": False,
            "note": "Locked brand assets. Tagline adaptable, CTA and logo locked.",
        },
    ],
},
```

---

## Example: Add Audio (`story_reel_v1`)

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

That's it. The pipeline reads the catalog and handles the rest.

---

## Checklist before submitting a catalog entry

- [ ] `template_id` matches the Remotion template identifier exactly (case-sensitive)
- [ ] Every AI-generated slot has a corresponding entry in `slots`
- [ ] Remotion-internal slots (selected photo display) and locked brand assets are NOT in `slots`
- [ ] Every `element_id` in `slots` is a value the creative director will actually use in the storyboard (check the note field is clear enough to guide it)
- [ ] Text values the pipeline must pass to Remotion are in `text_slots` with the correct `source`
- [ ] Scenes with `generates: False` contain no newly-generated content in the Remotion template
- [ ] Asset-reuse scenes have `reuses_from` set
- [ ] Scene order in `scene_structure` matches the playback order in Remotion
- [ ] `end_card` is last and `generates: False`
- [ ] `template_version` is set to `"1.0"` for a new template
