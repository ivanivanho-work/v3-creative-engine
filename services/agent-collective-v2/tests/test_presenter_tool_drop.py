"""
Tests for the presenter-tool-drop fix.

Verifies that presenter agents have no artifact-saving tools (they caused ADK
streaming to drop the function_call before executing it, producing no visible
output in the frontend), and that the prompt files contain no tool call
instructions that would confuse the LLM.
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

ARTIFACT_TOOLS = [
    "save_marketing_brief_artifact",
    "save_creative_package_artifact",
    "save_generation_manifest_artifact",
    "save_variation_artifact",
    "save_full_campaign_manifest_artifact",
]

PRESENTER_PROMPTS = {
    "brief_presenter":        PROMPTS_DIR / "brief" / "brief_presenter.md",
    "results_presenter":      PROMPTS_DIR / "production" / "results_presenter.md",
    "adapt_results_presenter": PROMPTS_DIR / "delivery" / "results_presenter.md",
    "fc_results_presenter":   PROMPTS_DIR / "full_campaign" / "results_presenter.md",
}

# ---------------------------------------------------------------------------
# agent.py checks
# ---------------------------------------------------------------------------

class TestPresenterAgentsHaveNoTools:
    """Presenter agents must not use artifact-saving tools."""

    def _agent_block(self, agent_name: str) -> str:
        """Extract the LlmAgent(...) block for the named agent from agent.py."""
        source = AGENT_PY.read_text()
        # Find the start of the agent definition
        pattern = rf'{re.escape(agent_name)}\s*=\s*LlmAgent\('
        match = re.search(pattern, source)
        assert match, f"Could not find definition for {agent_name} in agent.py"
        start = match.start()
        # Grab enough text to cover the full constructor call (up to closing paren on its own line)
        snippet = source[start:start + 600]
        return snippet

    @pytest.mark.parametrize("agent_name", PRESENTER_AGENTS)
    def test_presenter_has_no_tools_kwarg(self, agent_name):
        block = self._agent_block(agent_name)
        assert "tools=" not in block, (
            f"{agent_name} still has a tools= parameter. "
            "Artifact tools must be removed from presenter agents to prevent "
            "ADK streaming from dropping function_call parts and silencing output."
        )

    @pytest.mark.parametrize("tool_name", ARTIFACT_TOOLS)
    def test_artifact_tool_not_assigned_to_any_presenter(self, tool_name):
        """Each artifact tool should not appear inside any presenter agent block."""
        source = AGENT_PY.read_text()
        for agent_name in PRESENTER_AGENTS:
            pattern = rf'{re.escape(agent_name)}\s*=\s*LlmAgent\('
            match = re.search(pattern, source)
            if not match:
                continue
            block = source[match.start():match.start() + 600]
            assert tool_name not in block, (
                f"{tool_name} found inside {agent_name} definition. "
                "Artifact tools must not be used by presenter agents."
            )

    def test_root_agent_tools_intact(self):
        """Root agent routing tools must not have been accidentally removed."""
        source = AGENT_PY.read_text()
        assert "write_selected_concept" in source
        assert "write_campaign_constraints" in source
        # Confirm they're still wired into root_agent
        assert "tools=[write_selected_concept, write_campaign_constraints]" in source


# ---------------------------------------------------------------------------
# Prompt file checks
# ---------------------------------------------------------------------------

class TestPresenterPromptsHaveNoToolInstructions:
    """Prompt files must not instruct the LLM to call any artifact tool."""

    @pytest.mark.parametrize("agent_name,prompt_path", PRESENTER_PROMPTS.items())
    def test_prompt_contains_no_tool_function_names(self, agent_name, prompt_path):
        content = prompt_path.read_text()
        for tool_name in ARTIFACT_TOOLS:
            assert tool_name not in content, (
                f"{prompt_path.name} still references `{tool_name}`. "
                "Remove all tool call instructions from presenter prompts."
            )

    @pytest.mark.parametrize("agent_name,prompt_path", PRESENTER_PROMPTS.items())
    def test_prompt_contains_no_call_tool_instruction(self, agent_name, prompt_path):
        content = prompt_path.read_text().lower()
        forbidden_phrases = [
            "call the tool",
            "call both artifact",
            "call this tool",
            "you must call",
            "artifact tool",
        ]
        for phrase in forbidden_phrases:
            assert phrase not in content, (
                f"{prompt_path.name} still contains tool call instruction: '{phrase}'. "
                "Presenter prompts must not instruct the LLM to call any tool."
            )


# ---------------------------------------------------------------------------
# Frontend PRESENTER_DOWNLOADS consistency checks
# ---------------------------------------------------------------------------

APP_JS = Path(__file__).parent.parent / "demo_ui" / "static" / "app.js"

class TestFrontendPresenterDownloads:
    """The PRESENTER_DOWNLOADS map in app.js must cover all presenter agents."""

    def _extract_presenter_downloads_keys(self) -> set:
        content = APP_JS.read_text()
        match = re.search(
            r'const PRESENTER_DOWNLOADS\s*=\s*\{(.+?)\};',
            content,
            re.DOTALL,
        )
        assert match, "PRESENTER_DOWNLOADS constant not found in app.js"
        block = match.group(1)
        # Extract quoted keys
        return set(re.findall(r'"([^"]+)":\s*\[', block))

    def test_presenter_downloads_exists(self):
        content = APP_JS.read_text()
        assert "PRESENTER_DOWNLOADS" in content, (
            "PRESENTER_DOWNLOADS map is missing from app.js"
        )

    def test_brief_presenter_has_download_entry(self):
        keys = self._extract_presenter_downloads_keys()
        assert "brief_presenter" in keys, (
            "brief_presenter missing from PRESENTER_DOWNLOADS in app.js"
        )

    def test_results_presenter_has_download_entry(self):
        keys = self._extract_presenter_downloads_keys()
        assert "results_presenter" in keys

    def test_adapt_results_presenter_has_download_entry(self):
        keys = self._extract_presenter_downloads_keys()
        assert "adapt_results_presenter" in keys

    def test_fc_results_presenter_has_download_entry(self):
        keys = self._extract_presenter_downloads_keys()
        assert "fc_results_presenter" in keys

    def test_no_old_function_call_detection_in_streaming_paths(self):
        """The old functionCall-based download detection must be fully removed."""
        content = APP_JS.read_text()
        # These specific patterns were the old detection mechanism
        assert "part.functionCall" not in content, (
            "Old functionCall detection still present in app.js. "
            "Should be replaced by PRESENTER_DOWNLOADS author-based detection."
        )
        assert "fnName === \"save_marketing_brief_artifact\"" not in content
        assert "fnName === \"save_variation_artifact\"" not in content

    def test_downloaded_authors_set_present_in_all_streaming_paths(self):
        """downloadedAuthors must appear in all three streaming paths."""
        content = APP_JS.read_text()
        occurrences = content.count("downloadedAuthors")
        # Expect at least 6: 2 per path (declaration + usage) across 3 paths
        assert occurrences >= 6, (
            f"downloadedAuthors only appears {occurrences} times in app.js. "
            "Expected at least 6 (declaration + usage in each of 3 streaming paths)."
        )
