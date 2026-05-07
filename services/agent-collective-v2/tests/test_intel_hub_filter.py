import pytest
from datetime import date, timedelta
from pathlib import Path

from agent_collective.agent import _parse_intel_hub_week, _get_valid_kb_files


VALID_ISO = "**Week:** 2026-W19\n**Sent:** 2026-05-07\n"
VALID_HUMAN = "**Week:** Week of 04 May 2026\n**Sent:** 2026-05-07\n"
MISSING_WEEK = "**Sent:** 2026-05-07\n"
MALFORMED_WEEK = "**Week:** not-a-date\n"


class TestParseIntelHubWeek:
    def test_iso_week_format(self):
        assert _parse_intel_hub_week(VALID_ISO) == date(2026, 5, 4)

    def test_human_week_format(self):
        assert _parse_intel_hub_week(VALID_HUMAN) == date(2026, 5, 4)

    def test_missing_week_field_returns_none(self):
        assert _parse_intel_hub_week(MISSING_WEEK) is None

    def test_malformed_week_field_returns_none(self):
        assert _parse_intel_hub_week(MALFORMED_WEEK) is None

    def test_empty_content_returns_none(self):
        assert _parse_intel_hub_week("") is None


class TestGetValidKbFiles:
    def _write(self, directory, name, content):
        path = directory / name
        path.write_text(content, encoding="utf-8")
        return path

    def test_non_intel_hub_files_pass_through(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        self._write(market_dir, "content_trends_kr.md", "# Trends")
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        result = _get_valid_kb_files("kr")
        assert [f.name for f in result] == ["content_trends_kr.md"]

    def test_valid_intel_hub_brief_included(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        monday = date.today() - timedelta(days=date.today().weekday())
        self._write(market_dir, "intel-hub-brief-kr-2026-W19.md",
                    f"**Week:** {monday.strftime('Week of %d %B %Y')}\n")
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        result = _get_valid_kb_files("kr")
        assert len(result) == 1
        assert result[0].name == "intel-hub-brief-kr-2026-W19.md"

    def test_stale_intel_hub_brief_excluded(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        stale_monday = date.today() - timedelta(days=15)
        self._write(market_dir, "intel-hub-brief-kr-stale.md",
                    f"**Week:** {stale_monday.strftime('Week of %d %B %Y')}\n")
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        assert _get_valid_kb_files("kr") == []

    def test_unparseable_week_field_excluded(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        self._write(market_dir, "intel-hub-brief-kr-bad.md", "**Week:** ???\n")
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        assert _get_valid_kb_files("kr") == []

    def test_mixed_valid_stale_and_regular(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        valid_monday = date.today() - timedelta(days=7)
        stale_monday = date.today() - timedelta(days=15)
        self._write(market_dir, "content_trends_kr.md", "# Trends")
        self._write(market_dir, "intel-hub-brief-kr-valid.md",
                    f"**Week:** {valid_monday.strftime('Week of %d %B %Y')}\n")
        self._write(market_dir, "intel-hub-brief-kr-stale.md",
                    f"**Week:** {stale_monday.strftime('Week of %d %B %Y')}\n")
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        names = [f.name for f in _get_valid_kb_files("kr")]
        assert "content_trends_kr.md" in names
        assert "intel-hub-brief-kr-valid.md" in names
        assert "intel-hub-brief-kr-stale.md" not in names

    def test_exactly_14_days_old_included(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        boundary_monday = date.today() - timedelta(days=14)
        self._write(market_dir, "intel-hub-brief-kr-boundary.md",
                    f"**Week:** {boundary_monday.strftime('Week of %d %B %Y')}\n")
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        result = _get_valid_kb_files("kr")
        assert len(result) == 1

    def test_empty_market_dir_returns_empty(self, tmp_path, monkeypatch):
        market_dir = tmp_path / "kr"
        market_dir.mkdir()
        monkeypatch.setattr("agent_collective.agent._get_kb_dirs", lambda m: [market_dir])

        assert _get_valid_kb_files("kr") == []
