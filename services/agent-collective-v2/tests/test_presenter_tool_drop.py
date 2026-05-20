"""
Tests for the presenter tool-ordering fix.

Verifies that:
1. Presenter agents have the correct artifact-saving tools assigned.
2. Each presenter prompt contains an explicit tool call ordering instruction
   that tells the LLM to generate ALL text first, THEN call the tool --
   preventing Gemini from calling the tool before generating any text (which
   caused ADK streaming to produce no visible output).
3. The frontend uses functionCall-based download button detection.
"""

import re
from pathlib import Path

import pytest

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

AGENT_PY = Path(__file__).parent.parent / "agent_collective" / "agent.py"
PROMPTS_DIR = Path(__file__).parent.parent / "agent_collective" / "prompts"

PRESENTER_AGENTS = [
    "brief_presenter",
    "results_presenter",
    "adapt_results_presenter",
    "fc_results_presenter",
]

PRESENTER_TOOLS = {
    "brief_presenter":        ["save_marketing_brief_artifact"],
    "results_presenter":      ["save_creative_package_artifact", "save_generation_manifest_artifact"],
    "adapt_results_presenter": ["save_variation_artifact"],
    "fc_results_presenter":   ["save_full_campaign_manifest_artifact"],
}

PRESENTER_PROMPTS = {
    "brief_presenter":        PROMPTS_DIR / "brief" / "brief_presenter.md",
    "results_presenter":      PROMPTS_DIR / "production" / "results_presenter.md",
    "adapt_results_presenter": PROMPTS_DIR / "delivery" / "results_presenter.md",
    "fc_results_presenter":   PROMPTS_DIR / "full_campaign" / "results_presenter.md",
}

APP_JS = Path(__file__).parent.parent / "demo_ui" / "static" / "app.js"


def _agent_block(agent_name: str) -> str:
    """Extract the LlmAgent(...) block for the named agent from agent.py."""
    source = AGENT_PY.read_text()
    pattern = rf'{re.escape(agent_name)}\s*=\s*LlmAgent\('
    match = re.search(pattern, source)
    assert match, f"Could not find definition for {agent_name} in agent.py"
    return source[match.start():match.start() + 600]


# ---------------------------------------------------------------------------
# agent.py checks -- presenters must have their artifact tools
# ---------------------------------------------------------------------------

class TestPresenterAgentsHaveTools:
    """Each presenter agent must have its artifact-saving tool assigned."""

    @pytest.mark.parametrize("agent_name,tools", PRESENTER_TOOLS.items())
    def test_presenter_has_tools_kwarg(self, agent_name, tools):
        block = _agent_block(agent_name)
        assert "tools=" in block, (
            f"{agent_name} is missing a tools= parameter. "
            "Artifact tools must be assigned so the frontend can detect the "
            "function_call event and show download buttons."
        )

    @pytest.mark.parametrize("agent_name,tools", PRESENTER_TOOLS.items())
    def test_presenter_has_correct_tools(self, agent_name, tools):
        block = _agent_block(agent_name)
        for tool in tools:
            assert tool in block, (
                f"{tool} not found in {agent_name} definition. "
                "Each presenter must have its designated artifact-saving tool."
            )

    def test_root_agent_tools_intact(self):
        source = AGENT_PY.read_text()
        assert "write_selected_concept" in source
        assert "write_campaign_constraints" in source
        assert "tools=[write_selected_concept, write_campaign_constraints]" in source


# ---------------------------------------------------------------------------
# Prompt file checks -- each must have a tool call ordering instruction
# ---------------------------------------------------------------------------

class TestPresenterPromptsHaveOrderingInstruction:
    """Prompt files must instruct the LLM to generate text BEFORE calling the tool."""

    # Phrases that indicate the ordering instruction is present
    ORDERING_PHRASES = [
        "write your complete",
        "only after you have finished",
        "never call the tool before",
        "never call either tool before",
        "tool call ordering",
    ]

    @pytest.mark.parametrize("agent_name,prompt_path", PRESENTER_PROMPTS.items())
    def test_prompt_has_ordering_instruction(self, agent_name, prompt_path):
        content = prompt_path.read_text().lower()
        found = any(phrase in content for phrase in self.ORDERING_PHRASES)
        assert found, (
            f"{prompt_path.name} is missing a tool call ordering instruction. "
            "Add an explicit instruction to generate ALL text first, then call "
            "the artifact tool. This prevents Gemini from calling the tool "
            "before generating any text (which silences the streaming output)."
        )

    @pytest.mark.parametrize("agent_name,prompt_path", PRESENTER_PROMPTS.items())
    def test_prompt_has_never_call_before_text_instruction(self, agent_name, prompt_path):
        content = prompt_path.read_text().lower()
        # At minimum the prompt must say something about calling the tool AFTER text
        has_after = "after" in content and "text" in content
        has_never_before = "never call" in content
        assert has_after or has_never_before, (
            f"{prompt_path.name} does not clearly instruct the LLM to call "
            "the tool after generating text. The ordering instruction must "
            "explicitly state that the tool call comes after the response."
        )


# ---------------------------------------------------------------------------
# Frontend functionCall detection checks
# ---------------------------------------------------------------------------

class TestFrontendFunctionCallDetection:
    """The frontend must use functionCall-based download button detection."""

    def test_function_call_detection_present(self):
        content = APP_JS.read_text()
        assert "part.functionCall" in content, (
            "functionCall-based download detection is missing from app.js. "
            "The frontend needs part.functionCall checks to detect when the "
            "artifact tool was called and show download buttons."
        )

    def test_save_marketing_brief_artifact_detected(self):
        content = APP_JS.read_text()
        assert "save_marketing_brief_artifact" in content, (
            "save_marketing_brief_artifact not detected in app.js. "
            "The frontend must detect this function call to show the brief download button."
        )

    def test_save_creative_package_artifact_detected(self):
        content = APP_JS.read_text()
        assert "save_creative_package_artifact" in content

    def test_save_generation_manifest_artifact_detected(self):
        content = APP_JS.read_text()
        assert "save_generation_manifest_artifact" in content

    def test_save_variation_artifact_detected(self):
        content = APP_JS.read_text()
        assert "save_variation_artifact" in content

    def test_save_full_campaign_manifest_artifact_detected(self):
        content = APP_JS.read_text()
        assert "save_full_campaign_manifest_artifact" in content

    def test_pending_downloads_present_in_streaming_path(self):
        content = APP_JS.read_text()
        occurrences = content.count("pendingDownloads")
        assert occurrences >= 6, (
            f"pendingDownloads only appears {occurrences} times in app.js. "
            "Expected at least 6 (declaration + usages across 3 streaming paths)."
        )

    def test_no_presenter_downloads_map(self):
        """PRESENTER_DOWNLOADS was the architecture-change approach; it should not be present."""
        content = APP_JS.read_text()
        assert "PRESENTER_DOWNLOADS" not in content, (
            "PRESENTER_DOWNLOADS map found in app.js. This was the author-based "
            "detection approach. The current approach uses functionCall detection."
        )
