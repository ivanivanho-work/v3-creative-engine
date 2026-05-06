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
