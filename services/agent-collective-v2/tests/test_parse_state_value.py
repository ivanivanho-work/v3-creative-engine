"""
Tests for _parse_state_value -- the utility that parses ADK session state
values which may be plain dicts, JSON strings, or JSON wrapped in markdown
code fences.

Includes regression tests for the gemini-3.5-flash trailing-content bug
where the model appends extra characters (e.g. a stray `}`) after valid JSON,
causing json.loads to raise "Extra data" and the function to fall back to
returning the raw string instead of a dict.
"""

import json
import pytest
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

try:
    from agent_collective.agent import _parse_state_value
except ImportError:
    pytest.skip("google-adk not available", allow_module_level=True)


# ---------------------------------------------------------------------------
# Basic cases
# ---------------------------------------------------------------------------

def test_none_returns_none():
    assert _parse_state_value(None) is None


def test_dict_passthrough():
    d = {"key": "value", "nested": {"a": 1}}
    assert _parse_state_value(d) is d


def test_list_passthrough():
    lst = [1, 2, 3]
    assert _parse_state_value(lst) is lst


def test_plain_json_string():
    result = _parse_state_value('{"status": "pass", "score": 8}')
    assert result == {"status": "pass", "score": 8}


def test_json_array_string():
    result = _parse_state_value('[1, 2, 3]')
    assert result == [1, 2, 3]


def test_non_json_string_returned_as_is():
    result = _parse_state_value("just a plain string")
    assert result == "just a plain string"


# ---------------------------------------------------------------------------
# Markdown code fence stripping
# ---------------------------------------------------------------------------

def test_strips_json_code_fence():
    fenced = '```json\n{"key": "value"}\n```'
    assert _parse_state_value(fenced) == {"key": "value"}


def test_strips_bare_code_fence():
    fenced = '```\n{"key": "value"}\n```'
    assert _parse_state_value(fenced) == {"key": "value"}


# ---------------------------------------------------------------------------
# Trailing-content fallback (gemini-3.5-flash regression)
# ---------------------------------------------------------------------------

VALID_MANIFEST = json.dumps({
    "brief_name": "Test Campaign",
    "market": "KR",
    "total_jobs": 5,
    "jobs": [{"job_id": "j1", "asset_type": "video"}],
})


def test_trailing_closing_brace():
    """gemini-3.5-flash sometimes appends a stray } after the closing brace."""
    malformed = VALID_MANIFEST + "\n}"
    result = _parse_state_value(malformed)
    assert isinstance(result, dict), "Should parse to dict despite trailing }"
    assert result["brief_name"] == "Test Campaign"


def test_trailing_whitespace_only():
    """Trailing whitespace is harmless -- json.loads handles it."""
    result = _parse_state_value(VALID_MANIFEST + "   \n  ")
    assert isinstance(result, dict)
    assert result["market"] == "KR"


def test_trailing_text_after_valid_json():
    """raw_decode fallback handles any trailing non-JSON content."""
    malformed = VALID_MANIFEST + "\nSome extra text the model appended."
    result = _parse_state_value(malformed)
    assert isinstance(result, dict)
    assert result["total_jobs"] == 5


def test_completely_invalid_json_returns_raw_string():
    """If neither json.loads nor raw_decode can parse it, return the raw string."""
    bad = "this is not JSON at all { broken"
    result = _parse_state_value(bad)
    assert result == bad


def test_nested_manifest_with_trailing_brace():
    """Realistic scenario: a full manifest dict followed by stray }."""
    manifest = {
        "brief_name": "Brand Campaign",
        "jobs": [{"job_id": "j1"}, {"job_id": "j2"}],
        "text_items": [{"item_id": "t1", "copy": "Hello"}],
    }
    malformed = json.dumps(manifest) + "\n}"
    result = _parse_state_value(malformed)
    assert result["brief_name"] == "Brand Campaign"
    assert len(result["jobs"]) == 2
    assert result["text_items"][0]["copy"] == "Hello"
