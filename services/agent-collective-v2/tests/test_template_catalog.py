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
    from agent_collective.agent import (
        TEMPLATE_CATALOG,
        _make_creative_phase_before_callback,
        _build_full_campaign_manifest,
    )
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
    assert ctx.state.get("template_schema") == "null"


@pytest.mark.asyncio
async def test_callback_handles_missing_brief_gracefully():
    ctx = _FakeCallbackContext({})
    cb = _make_creative_phase_before_callback()
    await cb(ctx)  # must not raise
    assert ctx.state.get("template_schema") == "null"


@pytest.mark.asyncio
async def test_callback_handles_malformed_brief_gracefully():
    ctx = _FakeCallbackContext({"marketing_brief": "not valid json"})
    cb = _make_creative_phase_before_callback()
    await cb(ctx)  # must not raise
    assert ctx.state.get("template_schema") == "null"


# ---------------------------------------------------------------------------
# _build_full_campaign_manifest — template slot_id propagation (PR#21 item 3)
# ---------------------------------------------------------------------------

def _make_template_generation_manifest():
    """Minimal generation_manifest for a Photo to Video (gen pop) template run."""
    return {
        "brief_id": "brief_test",
        "template_id": "veo_shorts_v1",
        "template_version": "1.0",
        "market": "kr",
        "market_nationality": "Korean",
        "reference_images": [],
        "jobs": [
            {
                "job_id": "job_001",
                "slot_id": "gridImage1",
                "audience_id": "gen_pop",
                "audience_name": "General Population",
                "scene_id": "body",
                "element_id": "camera_roll_photo_01",
                "asset_type": "image",
                "model": "gemini-3-pro-image-preview",
                "prompt": "A dog at the park",
                "priority": 1,
                "status": "pending",
            },
            {
                "job_id": "job_002",
                "slot_id": "generatedVideo",
                "audience_id": "gen_pop",
                "audience_name": "General Population",
                "scene_id": "climax",
                "element_id": "generated_video",
                "asset_type": "video",
                "model": "veo-3.1-generate-preview",
                "prompt": "Dog playing in a field",
                "priority": 1,
                "status": "pending",
            },
        ],
        "text_items": [
            {
                "audience_id": "gen_pop",
                "audience_name": "General Population",
                "scene_id": "climax",
                "element_id": "promptText",
                "slot_id": "promptText",
                "final_text": "강아지가 공원에서 뛰어노는 영상",
            }
        ],
    }


def _make_fc_variation_output():
    """Mock fc_variation_output as the FC variation generator would produce
    it for a Photo to Video template run: slot_id on each image/video output
    and a selected_slot_mapping per audience.
    """
    return {
        "pipeline_run_id": "run_test_fc",
        "variations": {
            "aud_kr_f_18_24": {
                "segment_name": "Young Women 18-24",
                "scene_outputs": [
                    {
                        "scene_id": "body",
                        "action": "adapt",
                        "outputs": [
                            {
                                "output_type": "image_generation_prompt",
                                "element_id": "camera_roll_photo_01",
                                "slot_id": "gridImage1",
                                "generation_prompt": "Stylish cat in a cafe",
                            },
                            {
                                "output_type": "image_generation_prompt",
                                "element_id": "camera_roll_photo_02",
                                "slot_id": "gridImage2",
                                "generation_prompt": "Cat napping on a windowsill",
                            },
                        ],
                    },
                    {
                        "scene_id": "climax",
                        "action": "adapt",
                        "outputs": [
                            {
                                "output_type": "video_generation_prompt",
                                "element_id": "generated_video",
                                "slot_id": "generatedVideo",
                                "generation_prompt": "Cat gracefully leaping through autumn leaves",
                            },
                        ],
                    },
                ],
                "selected_slot_mapping": {
                    "gridImage1": "job_003",
                    "gridImage2": "job_004",
                },
            },
        },
    }


def test_full_campaign_manifest_carries_template_id_and_version():
    state = {
        "generation_manifest": _make_template_generation_manifest(),
        "fc_variation_output": _make_fc_variation_output(),
    }
    manifest = _build_full_campaign_manifest(state)
    assert manifest is not None
    assert manifest["template_id"] == "veo_shorts_v1"
    assert manifest["template_version"] == "1.0"


def test_full_campaign_manifest_variation_jobs_have_slot_ids():
    state = {
        "generation_manifest": _make_template_generation_manifest(),
        "fc_variation_output": _make_fc_variation_output(),
    }
    manifest = _build_full_campaign_manifest(state)
    variation_jobs = [j for j in manifest["jobs"] if j["audience_id"] != "gen_pop"]
    assert len(variation_jobs) == 3  # 2 body + 1 climax

    slot_ids = {j["element_id"]: j["slot_id"] for j in variation_jobs}
    assert slot_ids["camera_roll_photo_01"] == "gridImage1"
    assert slot_ids["camera_roll_photo_02"] == "gridImage2"
    assert slot_ids["generated_video"] == "generatedVideo"


def test_full_campaign_manifest_selected_slot_mapping_by_audience():
    state = {
        "generation_manifest": _make_template_generation_manifest(),
        "fc_variation_output": _make_fc_variation_output(),
    }
    manifest = _build_full_campaign_manifest(state)
    ssm = manifest["selected_slot_mapping_by_audience"]
    assert ssm is not None
    assert "aud_kr_f_18_24" in ssm
    aud_ssm = ssm["aud_kr_f_18_24"]
    assert aud_ssm["gridImage1"] == "job_003"
    assert aud_ssm["gridImage2"] == "job_004"


def test_full_campaign_manifest_gen_pop_jobs_have_slot_ids_from_manifest():
    state = {
        "generation_manifest": _make_template_generation_manifest(),
        "fc_variation_output": _make_fc_variation_output(),
    }
    manifest = _build_full_campaign_manifest(state)
    gen_pop_jobs = [j for j in manifest["jobs"] if j["audience_id"] == "gen_pop"]
    assert len(gen_pop_jobs) == 2
    slot_ids = {j["element_id"]: j["slot_id"] for j in gen_pop_jobs}
    assert slot_ids["camera_roll_photo_01"] == "gridImage1"
    assert slot_ids["generated_video"] == "generatedVideo"
