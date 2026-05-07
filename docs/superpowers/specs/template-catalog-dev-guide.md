# Template Catalog Developer Guide
# How to register a Remotion template with the Agent Collective pipeline

## Overview

The Agent Collective generates campaign assets through a multi-agent pipeline. When a campaign's featured tool maps to a Remotion template, the pipeline switches into **template mode** — the creative director designs a storyboard locked to the template's scene structure, and the manifest emitter assigns every generated asset to a named slot that Remotion reads.

Your job as the template developer is to **fill out a catalog entry** in `agent.py`. Once the entry is complete and correct, the pipeline handles everything automatically — no prompt edits needed.

---

## What the template dev provides vs. what the catalog needs

When you hand off a new Remotion template, you'll typically provide a rendering contract like this:

```json
{
  "template_id": "veo_shorts_v1",
  "template_version": "1.0",
  "asset_slots": [
    {"slot_id": "gridImage1", "type": "image"},
    {"slot_id": "gridImage2", "type": "image"},
    {"slot_id": "gridImage3", "type": "image"},
    {"slot_id": "gridImage4", "type": "image"},
    {"slot_id": "gridImage5", "type": "image"},
    {"slot_id": "gridImage6", "type": "image"},
    {"slot_id": "gridImage7", "type": "image"},
    {"slot_id": "gridImage8", "type": "image"},
    {"slot_id": "gridImage9", "type": "image"},
    {"slot_id": "selectedImage1", "type": "image"},
    {"slot_id": "selectedImage2", "type": "image"},
    {"slot_id": "generatedVideo", "type": "video"},
    {"slot_id": "endCardVideo", "type": "video"}
  ],
  "text_slots": [
    {"slot_id": "promptText", "final_text": "...", "language": "en"}
  ]
}
```

**This is a rendering contract, not a production contract.** It tells the pipeline what Remotion can render — but the pipeline also needs to know *how* each slot is filled. There are four fundamentally different filling mechanisms, and a flat slot list doesn't distinguish between them:

| Slot | Mechanism | Catalog needs? |
|---|---|---|
| `gridImage1`–`gridImage9` | AI-generated (image model) | Yes — `slots` in a `generates: true` scene |
| `selectedImage1`, `selectedImage2` | Remotion-internal — Remotion populates these from whichever gridImage slots the pipeline marks as selected | No — handled automatically via `selected_slot_mapping` |
| `generatedVideo` | AI-generated (video model) | Yes — `slots` in a `generates: true` scene |
| `endCardVideo` | Pre-made brand video, locked in Remotion | No — Remotion handles it natively, no generation needed |
| `promptText` | User-authored text (the AI generation prompt) | Yes — `text_slots` entry pointing to climax scene |

The catalog entry only needs to describe slots the pipeline is responsible for filling. Remotion-internal slots (`selectedImage*`) and locked brand assets (`endCardVideo`) are handled by Remotion itself.

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
                "generates": True,                # True = AI generation jobs produced here
                "slots": [                        # Required when generates: True
                    {
                        "slot_id": "gridImage1",  # The Remotion slot name the asset lands in
                        "element_id": "camera_roll_photo_01",  # Storyboard element_id that maps to this slot
                        "asset_type": "image",    # "image" or "video"
                    },
                    # ... one entry per generated slot in this scene
                ],
                "note": "Guidance for the creative director on what this scene shows.",
            },
            {
                "scene_type": "selection",
                "label": "Selected photos highlight",
                "generates": False,               # No new generation — reuses grid images
                "reuses_from": "body",            # Which scene's assets Remotion re-displays here
                "note": "Shows selected photos at larger size. Remotion populates selectedImage1/2 internally from the selected_slot_mapping — no new generation.",
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
                        "slot_id": "promptText",  # Remotion text slot name
                        "source": "climax_creative_direction",  # Where the value comes from
                        "note": "The AI generation prompt text the user typed. Write in market language.",
                    },
                ],
                "note": "The AI-generated video payoff. One video job. Also write the promptText text_item.",
            },
            {
                "scene_type": "end_card",
                "label": "Brand end card",
                "generates": False,
                "note": "Locked brand assets including endCardVideo (pre-made brand video handled natively by Remotion). Tagline adaptable, CTA and logo locked.",
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
| `selected_image_count` | No | int | Number of photos the user selects as AI inputs (e.g. Photo to Video takes 2). Omit entirely if your template has no photo selection mechanic. Selected photos are chosen FROM the generated gridImage slots — no separate generation job. |
| `scene_structure` | Yes | list | Ordered list of scene entries. The creative director will produce exactly these scene types in this order for the V1 deliverable. |

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
| `element_id` | Yes | string | The storyboard `element_id` the creative director must use for this slot. The prompter maps `element_id → slot_id` directly from this table. |
| `asset_type` | Yes | string | `"image"` or `"video"`. Determines which generation model is used. |

### Per-text-slot fields (inside `text_slots`)

| Field | Required | Type | Description |
|---|---|---|---|
| `slot_id` | Yes | string | The Remotion text slot name (e.g. `"promptText"`). Must match exactly. |
| `source` | Yes | string | Where the value comes from. `"climax_creative_direction"` = the AI generation prompt the user typed; `"end_card_tagline"` = the end card tagline copy. |
| `note` | Yes | string | Guidance for the prompter on how to write this text. |

---

## Slot filling mechanisms — what goes in the catalog

The four ways a Remotion slot can be filled, and whether each needs a catalog entry:

### 1. AI-generated slots → `slots` in a `generates: true` scene
These are images or videos produced by the generation pipeline. Every one of these needs an entry in `slots`. The pipeline creates a generation job for each, assigns the `slot_id`, and passes it to Remotion.

**Examples:** `gridImage1`–`gridImage9`, `generatedVideo`

### 2. Selected photo slots → automatic via `selected_slot_mapping`
When the user selects photos from the grid, Remotion has dedicated display slots (e.g. `selectedImage1`, `selectedImage2`) that it populates internally. The pipeline records which `gridImage[N]` slots were selected and passes a `selected_slot_mapping` to Remotion. No catalog entry needed — this is handled automatically when `selected_image_count` is set.

**Example:** `selectedImage1`, `selectedImage2` → Remotion reads `selected_slot_mapping: {"gridImage1": "job_002", "gridImage5": "job_006"}` and knows to display those two images.

### 3. Text slots → `text_slots` in the relevant scene
These are text values the user authored or that come from the creative direction. The pipeline writes them as `text_items` in the manifest and routes them to Remotion via `slot_id`. Add a `text_slots` entry to the scene that contextually owns the text.

**Example:** `promptText` in the climax scene — the AI generation prompt the user typed (e.g. "고양이가 스케이트보드를 타는 모습")

### 4. Locked brand assets → no catalog entry
Pre-made assets that Remotion loads natively (brand videos, logos, locked background graphics). The pipeline never generates these. Do not add them to the catalog — Remotion handles them entirely.

**Example:** `endCardVideo` — a pre-made brand video baked into the Remotion template.

---

## What the pipeline does with your catalog entry

Once your entry is in the catalog, the pipeline automatically:

1. **Creative director** — receives `scene_structure` and designs a storyboard with exactly those scene types in that order. It uses your `element_id` values verbatim, and marks `selected_image_count` elements as `selected: true`.

2. **Creative prompter** — reads `scene_structure` to determine which scenes generate jobs (`generates: true`) and which don't (`generates: false`). Assigns `slot_id` to each job by looking up the element's `slot_id` from your `slots` table. Builds `selected_slot_mapping` from the selected elements. Writes `text_items` for any `text_slots` entries.

3. **Variation generators (FC pipeline)** — same slot assignment logic applied to each audience variation.

4. **Remotion** — receives a manifest with `template_id`, `template_version`, per-job `slot_id`, `selected_slot_mapping`, and text items. Slots are filled in order. The template renders.

---

## Rules to follow when building your Remotion template

### 1. Slot IDs must be stable

Once you publish a slot name (e.g. `gridImage1`, `generatedVideo`), do not rename it. A renamed slot in Remotion that isn't updated in the catalog will silently produce an empty slot at render time.

### 2. Every AI-generated slot must be in the catalog

If Remotion renders a generated asset, it needs a `slots` entry. If a slot has no catalog entry, the pipeline won't generate an asset for it and it renders empty. Audit your template — every AI-generated slot in Remotion should appear in `slots`.

### 3. `generates: False` scenes must have no new generatable content

Scenes marked `generates: False` produce zero generation jobs. If your template needs a generated asset in what you've marked as a `selection` or `loading` scene, you either need to move it to a `generates: True` scene or mark the scene `generates: True` and add a slot for it.

### 4. Asset-reuse scenes must use `reuses_from`

If a scene in your template displays an asset generated in a previous scene (e.g. the selected photos shown before the loading screen), declare `reuses_from` pointing to the originating scene. This tells the pipeline not to generate a duplicate job. Without this, you may get orphaned jobs or missing renders.

### 5. `end_card` is always `generates: False`

The end card contains locked brand assets. It never produces image or video generation jobs. Always declare it as `generates: False`. Locked assets like `endCardVideo` are handled natively by Remotion — do not add them to the catalog.

### 6. Text slots belong to the scene that contextually owns them

Add `text_slots` to the scene where the text appears or is most directly authored. The AI generation prompt text (`promptText`) belongs to the `climax` scene because that's where the AI generation result is revealed.

### 7. Scene order matters

The creative director produces scenes in the exact order they appear in `scene_structure`. If your template has a specific timing or transition dependency between scenes, the order in the catalog controls it.

---

## Versioning

When you update a template:

- **Patch** (visual change, no slot changes): increment `template_version` patch digit. No catalog change needed.
- **Minor** (new slot added, existing slots unchanged): add the new slot to `slots` in the catalog entry, increment minor version.
- **Major** (scene removed, slot renamed, scene order changed): update `scene_structure` fully, increment major version. Coordinate with the pipeline team — existing runs may break.

---

## Example: complete catalog entry for `veo_shorts_v1`

This is the full catalog entry for the Photo to Video template, derived from the `veo_shorts_v1` handoff payload:

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
            "note": "Shows only the selected photos at larger size before generation starts. Remotion populates its selectedImage1/selectedImage2 display slots from the selected_slot_mapping — no new generation jobs.",
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
                    "note": "The AI generation prompt text the user typed. Write in the market's primary language. Should feel like a real user's input.",
                },
            ],
            "note": "The AI-generated video payoff. One video job landing in generatedVideo. Also write the promptText text_item — the in-UI prompt the user typed.",
        },
        {
            "scene_type": "end_card",
            "label": "Brand end card",
            "generates": False,
            "note": "Locked brand assets including endCardVideo (pre-made brand video, handled natively by Remotion). Tagline adaptable, CTA and logo locked.",
        },
    ],
},
```

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
- [ ] Every AI-generated slot in the Remotion template has a corresponding entry in `slots`
- [ ] Slots filled by Remotion internally (`selectedImage*`, locked brand assets) are NOT in `slots`
- [ ] Every `element_id` in `slots` is a value the creative director will actually use in the storyboard
- [ ] Text values the pipeline must pass to Remotion are in `text_slots` (with correct `source`)
- [ ] Scenes with `generates: False` contain no newly-generated content in the Remotion template
- [ ] Asset-reuse scenes have `reuses_from` set
- [ ] Scene order in `scene_structure` matches the playback order in Remotion
- [ ] `end_card` is last and `generates: False`
- [ ] `template_version` is set to `"1.0"` for a new template
