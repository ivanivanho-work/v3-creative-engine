"""
Agent Collective V2 - Unified Server
=====================================

Single-process FastAPI server that embeds the ADK agent runtime and
serves custom API endpoints for the frontend. No proxy layer needed.

For Cloud Run deployment, the ADK agents run in-process via
google.adk.cli.fast_api.get_fast_api_app(), and our custom routes
(session creation, file downloads, KB management) are mounted on top.

For local development, run:
    cd services/agent-collective-v2
    uvicorn demo_ui.server:app --host 0.0.0.0 --port 8080

Endpoints:
    POST /api/session               - Create a new ADK session
    POST /api/run/stream             - SSE stream: send message, get events
    POST /api/run                    - Blocking fallback
    POST /api/run/upload             - File upload + SSE stream
    GET  /api/artifact/{sid}/{name}  - Download an artifact from the session
    GET  /api/brief?session_id=<sid>                  - Download latest marketing brief
    GET  /api/creative-package?session_id=<sid>       - Download latest creative package
    GET  /api/manifest?session_id=<sid>               - Download latest generation manifest
    GET  /api/full-campaign-manifest?session_id=<sid> - Download latest full campaign manifest
    (session_id is optional; without it, the market-level latest_* file is served — may
     reflect a different session if multiple ran concurrently in the same market)
    GET  /api/kb                     - List KB files
    GET  /api/kb/file                - Read a KB file
    POST /api/kb/upload              - Upload a KB file
    DELETE /api/kb/file              - Delete a KB file

    ADK native endpoints (mounted at /):
    POST /apps/{app}/users/{user}/sessions  - ADK session create
    POST /run_sse                            - ADK SSE streaming
    POST /run                                - ADK blocking run
    GET  /apps/{app}/users/{user}/sessions/{sid}/artifacts/{name}
"""

import base64
import os
import re
import httpx
from pathlib import Path
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, Response, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from demo_ui import kb_storage

# -------------------------------------------------------------------------
# Config
# -------------------------------------------------------------------------

# ADK runs in-process but we still proxy to its internal endpoints via
# localhost for clean separation. The ADK app is mounted as a sub-app.
ADK_INTERNAL_PORT = 8000
ADK_BASE = f"http://localhost:{ADK_INTERNAL_PORT}"
APP_NAME = "agent_collective"
USER_ID = "demo_user"

# Market selection
_MARKET = os.environ.get("MARKET", "kr").lower().strip()

# Paths
_APP_ROOT = Path(__file__).parent.parent
OUTPUTS_DIR = _APP_ROOT / "agent_collective" / "outputs" / _MARKET
AGENTS_DIR = str(_APP_ROOT)

# Long timeout: production phase can take several minutes on Pro
ADK_TIMEOUT = httpx.Timeout(timeout=600.0)

# Upload limit: 50 MB covers YouTube Shorts videos (typically 10-30 MB)
MAX_UPLOAD_BYTES = 50 * 1024 * 1024

# Allowed upload MIME types
ALLOWED_MIME_TYPES = {
    "video/mp4", "video/quicktime", "video/x-msvideo",
    "image/png", "image/jpeg",
    "application/pdf", "text/plain", "text/markdown",
}

# YouTube URL patterns
_YOUTUBE_RE = re.compile(
    r'https?://(?:www\.)?(?:youtube\.com/(?:watch\?v=|shorts/)|youtu\.be/)([\w\-]+)'
)
_SHORTS_RE = re.compile(
    r'https?://(?:www\.)?youtube\.com/shorts/([\w\-]+)'
)


def _extract_youtube_url(text: str) -> str | None:
    shorts_match = _SHORTS_RE.search(text)
    if shorts_match:
        video_id = shorts_match.group(1)
        return f"https://www.youtube.com/watch?v={video_id}"
    match = _YOUTUBE_RE.search(text)
    return match.group(0) if match else None


def _build_parts(message: str) -> list[dict]:
    parts: list[dict] = [{"text": message}]
    yt_url = _extract_youtube_url(message)
    if yt_url:
        parts.append({
            "file_data": {
                "mime_type": "video/mp4",
                "file_uri": yt_url,
            }
        })
    return parts


# -------------------------------------------------------------------------
# Build the ADK FastAPI app (embedded, no separate process)
# -------------------------------------------------------------------------

from google.adk.cli.fast_api import get_fast_api_app

adk_app = get_fast_api_app(
    agents_dir=AGENTS_DIR,
    web=False,  # No built-in web UI — we serve our own frontend
    host="0.0.0.0",
    port=ADK_INTERNAL_PORT,
    allow_origins=[
        "https://v3-creative-engine.web.app",
        "https://v3-creative-engine.firebaseapp.com",
        "http://localhost:5000",
        "http://localhost:5500",
        "http://localhost:8080",
    ],
)


# -------------------------------------------------------------------------
# Main app — mounts ADK + custom routes
# -------------------------------------------------------------------------

app = FastAPI(title="Agent Collective V2")

# CORS for Firebase Hosting and local dev (including Cloud Shell Web Preview)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://v3-creative-engine.web.app",
        "https://v3-creative-engine.firebaseapp.com",
        "http://localhost:5000",
        "http://localhost:5500",
        "http://localhost:8080",
    ],
    allow_origin_regex=r"https://\d+-cs-.+\.cloudshell\.dev",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount ADK app at /adk so its routes don't conflict with ours
app.mount("/adk", adk_app)


# -------------------------------------------------------------------------
# Models
# -------------------------------------------------------------------------

class SessionRequest(BaseModel):
    market: str = "kr"


class RunRequest(BaseModel):
    session_id: str
    message: str


class KbDeleteRequest(BaseModel):
    scope: str
    filename: str


# -------------------------------------------------------------------------
# API Routes — proxy to internal ADK sub-app
# -------------------------------------------------------------------------

@app.post("/api/session")
async def create_session(req: SessionRequest = None):
    market = (req.market if req else None) or "kr"
    async with httpx.AsyncClient(timeout=ADK_TIMEOUT, base_url="http://localhost:8080") as client:
        resp = await client.post(
            f"/adk/apps/{APP_NAME}/users/{USER_ID}/sessions",
            json={"state": {"market": market, "_pipeline_context": "none"}},
        )
        if resp.status_code not in (200, 201):
            raise HTTPException(
                status_code=resp.status_code,
                detail=f"ADK session creation failed: {resp.text}",
            )
        data = resp.json()
        return {"session_id": data.get("id", "")}


@app.post("/api/run/stream")
async def run_agent_stream(req: RunRequest):
    payload = {
        "appName": APP_NAME,
        "userId": USER_ID,
        "sessionId": req.session_id,
        "newMessage": {
            "role": "user",
            "parts": _build_parts(req.message),
        },
    }

    async def event_generator():
        async with httpx.AsyncClient(timeout=ADK_TIMEOUT, base_url="http://localhost:8080") as client:
            async with client.stream(
                "POST",
                "/adk/run_sse",
                json=payload,
            ) as response:
                async for line in response.aiter_lines():
                    yield line + "\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "X-Accel-Buffering": "no",
        },
    )


@app.post("/api/run")
async def run_agent(req: RunRequest):
    payload = {
        "appName": APP_NAME,
        "userId": USER_ID,
        "sessionId": req.session_id,
        "newMessage": {
            "role": "user",
            "parts": _build_parts(req.message),
        },
    }

    async with httpx.AsyncClient(timeout=ADK_TIMEOUT, base_url="http://localhost:8080") as client:
        resp = await client.post("/adk/run", json=payload)
        if resp.status_code != 200:
            raise HTTPException(
                status_code=resp.status_code,
                detail=f"ADK run failed: {resp.text}",
            )
        return resp.json()


@app.post("/api/run/upload")
async def run_agent_upload(
    session_id: str = Form(...),
    message: str = Form(""),
    file: UploadFile = File(...),
):
    content_type = file.content_type or ""
    if content_type not in ALLOWED_MIME_TYPES:
        raise HTTPException(
            status_code=400,
            detail=f"File type '{content_type}' is not supported.",
        )

    file_bytes = await file.read()
    if len(file_bytes) > MAX_UPLOAD_BYTES:
        size_mb = len(file_bytes) / (1024 * 1024)
        raise HTTPException(
            status_code=400,
            detail=f"File is {size_mb:.1f} MB, which exceeds the 50 MB limit.",
        )

    parts = []
    if message.strip():
        parts.append({"text": message.strip()})
    else:
        parts.append({"text": f"Adapt this asset: {file.filename}"})

    parts.append({
        "inline_data": {
            "mime_type": content_type,
            "data": base64.b64encode(file_bytes).decode("ascii"),
        },
    })

    payload = {
        "appName": APP_NAME,
        "userId": USER_ID,
        "sessionId": session_id,
        "newMessage": {
            "role": "user",
            "parts": parts,
        },
    }

    async def event_generator():
        async with httpx.AsyncClient(timeout=ADK_TIMEOUT, base_url="http://localhost:8080") as client:
            async with client.stream(
                "POST",
                "/adk/run_sse",
                json=payload,
            ) as response:
                async for line in response.aiter_lines():
                    yield line + "\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "X-Accel-Buffering": "no",
        },
    )


@app.get("/api/artifact/{session_id}/{artifact_name}")
async def get_artifact(session_id: str, artifact_name: str):
    async with httpx.AsyncClient(timeout=ADK_TIMEOUT, base_url="http://localhost:8080") as client:
        resp = await client.get(
            f"/adk/apps/{APP_NAME}/users/{USER_ID}"
            f"/sessions/{session_id}/artifacts/{artifact_name}"
        )
        if resp.status_code != 200:
            raise HTTPException(
                status_code=resp.status_code,
                detail=f"Artifact not found: {resp.text}",
            )
        return Response(
            content=resp.content,
            media_type="application/json",
            headers={
                "Content-Disposition":
                    f'attachment; filename="{artifact_name}"'
            },
        )


# -------------------------------------------------------------------------
# File download endpoints (latest outputs from agent callbacks)
# -------------------------------------------------------------------------

# Resolve a download to the session-keyed copy when ?session_id=<sid> is
# given. Falls back to the market-level latest_* file (which reflects whichever
# session most recently finished) so legacy callers keep working. See issue #6.
_SAFE_SID_RE = re.compile(r"[^a-zA-Z0-9_-]")


def _resolve_latest(base_name: str, session_id: str | None) -> Path:
    """Return path to the latest_* file, preferring the session-keyed copy."""
    if session_id:
        safe = _SAFE_SID_RE.sub("_", session_id)[:64]
        p = Path(base_name)
        keyed = OUTPUTS_DIR / f"{p.stem}_{safe}{p.suffix}"
        if keyed.exists():
            return keyed
    return OUTPUTS_DIR / base_name


@app.get("/api/brief")
async def get_brief(session_id: str | None = None):
    path = _resolve_latest("latest_marketing_brief.md", session_id)
    if not path.exists():
        raise HTTPException(status_code=404, detail="No marketing brief found.")
    return Response(
        content=path.read_bytes(),
        media_type="text/markdown",
        headers={"Content-Disposition": 'attachment; filename="marketing_brief.md"'},
    )


@app.get("/api/creative-package")
async def get_creative_package(session_id: str | None = None):
    path = _resolve_latest("latest_creative_package.md", session_id)
    if not path.exists():
        raise HTTPException(status_code=404, detail="No creative package found.")
    return Response(
        content=path.read_bytes(),
        media_type="text/markdown",
        headers={"Content-Disposition": 'attachment; filename="creative_package.md"'},
    )


@app.get("/api/manifest")
async def get_manifest(session_id: str | None = None):
    path = _resolve_latest("latest_generation_manifest.json", session_id)
    if not path.exists():
        raise HTTPException(status_code=404, detail="No generation manifest found.")
    return Response(
        content=path.read_bytes(),
        media_type="application/json",
        headers={"Content-Disposition": 'attachment; filename="generation_manifest.json"'},
    )


@app.get("/api/full-campaign-manifest")
async def get_full_campaign_manifest(session_id: str | None = None):
    path = _resolve_latest("latest_full_campaign_manifest.json", session_id)
    if not path.exists():
        raise HTTPException(status_code=404, detail="No full campaign manifest found.")
    return Response(
        content=path.read_bytes(),
        media_type="application/json",
        headers={"Content-Disposition": 'attachment; filename="full_campaign_manifest.json"'},
    )


# -------------------------------------------------------------------------
# KB file management routes
# -------------------------------------------------------------------------

@app.get("/api/kb")
async def list_kb_files(market: str = "kr"):
    try:
        return kb_storage.list_files(market)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/kb/file")
async def get_kb_file(scope: str, filename: str):
    try:
        content = kb_storage.read_file(scope, filename)
        return Response(content=content, media_type="text/plain; charset=utf-8")
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.post("/api/kb/upload")
async def upload_kb_file(
    scope: str = Form(...),
    file: UploadFile = File(...),
):

    filename = file.filename or ""
    if Path(filename).suffix.lower() not in {".md", ".json"}:
        raise HTTPException(status_code=400, detail="Only .md and .json files are accepted.")

    data = await file.read()
    if len(data) > 5 * 1024 * 1024:
        raise HTTPException(status_code=400, detail="File exceeds the 5 MB limit.")

    try:
        kb_storage.write_file(scope, filename, data)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    return {"ok": True, "filename": filename}


@app.delete("/api/kb/file")
async def delete_kb_file(req: KbDeleteRequest):

    try:
        kb_storage.delete_file(req.scope, req.filename)
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    return {"ok": True}


# -------------------------------------------------------------------------
# Health check (Cloud Run requires this)
# -------------------------------------------------------------------------

@app.get("/health")
async def health():
    return {"status": "ok"}


_FRONTEND_DIR = Path(__file__).parent.parent.parent.parent / "public" / "agent-collective-v2"
if _FRONTEND_DIR.exists():
    app.mount("/", StaticFiles(directory=str(_FRONTEND_DIR), html=True), name="frontend")
