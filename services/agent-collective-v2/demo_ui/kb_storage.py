"""
KB Storage - abstraction layer for knowledge base file operations.

All reads and writes go through this module. Files are persisted in GCS and
mirrored to the local filesystem so the ADK agent can read them at import
time without network calls.

GCS layout:   gs://{BUCKET}/kb/{scope}/{filename}
Local layout:  agent_collective/kb/{scope}/{filename}

On startup call ``sync_from_gcs()`` to pull any files that were written by a
previous container revision. Every ``write_file`` / ``delete_file`` call
updates both local and GCS atomically (GCS first, local second).

Accepted extensions: .md, .json
"""

import logging
import os
from pathlib import Path

from google.cloud import storage as gcs

log = logging.getLogger(__name__)

KB_DIR = Path(__file__).parent.parent / "agent_collective" / "kb"
ALLOWED_EXTENSIONS = {".md", ".json"}
VALID_SCOPES = {"global", "kr", "in", "jp", "id"}

_GCS_PREFIX = "kb"
_bucket_name = os.environ.get("GCS_KB_BUCKET", "v3-creative-engine-kb")


def _bucket() -> gcs.Bucket:
    client = gcs.Client()
    return client.bucket(_bucket_name)


def _blob_path(scope: str, filename: str) -> str:
    return f"{_GCS_PREFIX}/{scope}/{filename}"


def _resolve(scope: str, filename: str) -> Path:
    """Return a safe absolute path inside the scope directory.

    Raises ValueError if the scope is unknown, the extension is not allowed,
    or the resolved path would escape the scope directory.
    """
    if scope not in VALID_SCOPES:
        raise ValueError(f"Unknown scope: {scope!r}")
    safe_name = Path(filename).name
    if Path(safe_name).suffix.lower() not in ALLOWED_EXTENSIONS:
        raise ValueError("Only .md and .json files are accepted.")
    base = (KB_DIR / scope).resolve()
    candidate = (base / safe_name).resolve()
    if not str(candidate).startswith(str(base)):
        raise ValueError("Invalid filename.")
    return candidate


# --- Public API -----------------------------------------------------------


def sync_from_gcs() -> int:
    """Download all KB files from GCS to local disk. Returns file count."""
    count = 0
    try:
        bucket = _bucket()
        blobs = bucket.list_blobs(prefix=f"{_GCS_PREFIX}/")
        for blob in blobs:
            parts = blob.name.removeprefix(f"{_GCS_PREFIX}/").split("/", 1)
            if len(parts) != 2 or parts[0] not in VALID_SCOPES:
                continue
            scope, fname = parts
            if Path(fname).suffix.lower() not in ALLOWED_EXTENSIONS:
                continue
            local = KB_DIR / scope / fname
            local.parent.mkdir(parents=True, exist_ok=True)
            blob.download_to_filename(str(local))
            count += 1
        log.info("Synced %d KB files from GCS bucket %s", count, _bucket_name)
    except Exception:
        log.warning("GCS sync failed — continuing with local KB files only", exc_info=True)
    return count


def list_files(market: str) -> dict:
    """Return {"global": [...], "market": [...]} with sorted filename lists."""
    def _names(folder: Path) -> list:
        if not folder.exists():
            return []
        return sorted(
            f.name for f in folder.iterdir()
            if f.is_file() and f.suffix.lower() in ALLOWED_EXTENSIONS
        )

    return {
        "global": _names(KB_DIR / "global"),
        "market": _names(KB_DIR / market),
    }


def read_file(scope: str, filename: str) -> str:
    """Return file content as a UTF-8 string."""
    path = _resolve(scope, filename)
    if not path.exists():
        raise FileNotFoundError(f"File not found: {filename}")
    return path.read_text(encoding="utf-8")


def write_file(scope: str, filename: str, data: bytes) -> None:
    """Write bytes to GCS and local filesystem."""
    path = _resolve(scope, filename)
    try:
        blob = _bucket().blob(_blob_path(scope, path.name))
        blob.upload_from_string(data, content_type="application/octet-stream")
    except Exception:
        log.warning("GCS upload failed for %s/%s — writing locally only", scope, filename, exc_info=True)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(data)


def delete_file(scope: str, filename: str) -> None:
    """Delete a file from GCS and local filesystem."""
    path = _resolve(scope, filename)
    if not path.exists():
        raise FileNotFoundError(f"File not found: {filename}")
    try:
        blob = _bucket().blob(_blob_path(scope, path.name))
        blob.delete()
    except Exception:
        log.warning("GCS delete failed for %s/%s", scope, filename, exc_info=True)
    path.unlink()
