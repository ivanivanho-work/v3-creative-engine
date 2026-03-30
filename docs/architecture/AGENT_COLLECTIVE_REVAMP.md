# Agent Collective Revamp — Integration Guide

**Status:** Pending implementation
**Owner:** Gus
**Branch convention:** Work on a feature branch, PR to `main`

---

## Overview

The Agent Collective tool is being revamped from a standalone vanilla HTML file to a full-stack app powered by ADK (Agent Development Kit) agents and a new UI from a separate project.

This document guides future Claude sessions through the integration work.

---

## Current State (before revamp)

| Item | Detail |
|---|---|
| Frontend | `public/agent-collective/index.html` — single vanilla HTML file, all CSS/JS inline |
| Assets | `public/agent-collective/favicon.svg` |
| Backend | Single Cloud Function: `callGeminiAgent` (in `functions/src/index.js`) |
| Routing | Firebase Hosting rewrite: `/agent-collective/**` → `agent-collective/index.html` |
| Reference files | `ytm-agent-collective-v3.html`, `ytm-agent-collective-test.html` (repo root, safe to delete after migration) |

The current UI has a 3-column layout (sidebar | chat | right panel), black/red YouTube brand theme, agent toggles, and calls `callGeminiAgent` via Firebase callable functions.

---

## Incoming Project Structure

The new implementation comes from a separate project (`demo_ui/`) with this structure:

```
demo_ui/
  server.py              # FastAPI backend — wraps ADK runtime, streams via SSE
  static/
    index.html           # HTML shell
    app.js               # Frontend JavaScript (consumes SSE stream)
    style.css            # Styles
  requirements.txt       # Python dependencies (fastapi, uvicorn, google-adk, etc.)
```

The ADK agents themselves live alongside `demo_ui/` in the source project root (separate from the UI layer). When brought into this repo, both the agents package and the `demo_ui/` files are needed — see Step 1.

**Key architectural differences from the current tool:**

| | Current | New |
|---|---|---|
| Backend runtime | Node.js Cloud Functions | Python FastAPI + ADK |
| Communication pattern | HTTP request/response (Firebase callable) | **SSE streaming** (Server-Sent Events) |
| Agent model | Single Gemini call | Multi-agent orchestration (see Agent Architecture below) |
| Deployment target | Cloud Functions | **Cloud Run** |

---

## Agent Architecture

### Entry Point

**`creative_collective`** (root agent) — receives every user message and routes it to either the Campaign Creation path or the Asset Adaptation path. Has one tool: `write_selected_concept`, which captures the user's concept selection between phases.

---

### Path 1: Campaign Creation

**Phase 1 — Discovery** (sequential)

| Agent | Role | Output key |
|---|---|---|
| `kb_analyzer` | Reads KB documents, extracts market insights. Has a cache — skips LLM if KB files haven't changed. | `kb_insights` |
| `concept_generator` | Generates 3 campaign concepts using KB insights + user brief | `campaign_concepts` |
| `concept_presenter` | Formats 3 concepts, presents to user for selection | (text to user) |

**Phase 2 — Brief** (sequential + quality loop, max 2 iterations)

| Agent | Role | Output key |
|---|---|---|
| `brief_generator` | Writes full marketing brief from selected concept | `marketing_brief` |
| `brief_quality_checker` | Reviews brief for completeness; escalates (exits loop) if it passes | `brief_quality_result` |
| `brief_reviser` | Rewrites brief if checker flagged issues; skipped if checker passed | `marketing_brief` (updated) |
| `brief_presenter` | Summarises brief for user, saves as downloadable artifact | (text to user) |

`brief_quality_checker` + `brief_reviser` run inside a `LoopAgent` (max 2 iterations).

**Phase 3 — Creative** (sequential)

| Agent | Role | Output key |
|---|---|---|
| `creative_director` | Builds full storyboard — scenes, elements, visual direction | `creative_package` |
| `creative_presenter` | Formats storyboard for user | (text to user) |

**Phase 4 — Production** (sequential + quality loop, max 2 iterations)

| Agent | Role | Output key |
|---|---|---|
| `creative_prompter` | Converts storyboard into Veo/Imagen generation prompts | `generation_manifest` |
| `prompt_quality_checker` | Reviews prompt quality; escalates if they pass | `prompt_quality_result` |
| `prompt_regenerator` | Rewrites prompts if checker flagged issues | `generation_manifest` (updated) |
| `results_presenter` | Final summary, saves creative package + manifest as artifacts, exports session state to disk | (text to user) |

---

### Path 2: Asset Adaptation

**Phase 1 — Analysis** (parallel KB + video analysis, then audience mapping)

| Agent | Role | Output key |
|---|---|---|
| `adapt_kb_analyzer` | Same role as `kb_analyzer`; separate instance required by ADK (each agent can only have one parent) | `kb_insights` |
| `adapt_preprocessor` | Reads uploaded ad file (video/image), extracts metadata | `preprocessor_output` |
| `adapt_deconstructor` | Breaks the ad into a scene-by-scene map | `scene_map` |
| `adapt_audience_mapper` | Identifies target audiences from scene map + KB | `audience_profiles` |
| `adapt_analysis_presenter` | Presents findings to user | (text to user) |

`adapt_kb_analyzer` and the `adapt_preprocessor` → `adapt_deconstructor` pair run in **parallel** via a `ParallelAgent`.

**Phase 2 — Strategy** (sequential)

| Agent | Role | Output key |
|---|---|---|
| `adapt_strategy_generator` | Designs per-audience adaptation strategies | `approved_strategy` |
| `adapt_strategy_presenter` | Presents strategy for user approval | (text to user) |

**Phase 3 — Delivery/Execution** (variation loop × 4 audiences + quality loop × 2)

| Agent | Role | Output key |
|---|---|---|
| `adapt_variation_generator` | Generates adapted scene outputs for one audience | `variation_output` |
| `adapt_variation_progress` | Shows user a progress update after each audience | (text to user) |
| `adapt_consistency_checker` | Checks all variations are visually consistent; escalates if all pass | `consistency_result` |
| `adapt_variation_regenerator` | Fixes inconsistent variations if checker flagged them | `variation_output` (updated) |
| `adapt_results_presenter` | Final summary, saves variation artifact, builds generation manifest, exports session state | (text to user) |

Variation generator + progress agent loop up to **4 times** (one per audience). Consistency checker + regenerator loop up to **2 times**.

---

### How the ADK Runtime Works

1. ADK creates a session with **shared state** — a dict all agents can read/write by key.
2. User messages go to `creative_collective` (root agent).
3. Root agent routes to the appropriate path via sub-agent handoff.
4. Phases run their agents sequentially or in parallel as wired.
5. Specialist agents write structured JSON to named session state keys.
6. Presenter agents read those keys and format output for the user.
7. `server.py` wraps this runtime with FastAPI and **streams agent output back to the browser via SSE** (Server-Sent Events).

---

## Target Architecture

```
Firebase Hosting                         Cloud Run (Python)
─────────────────                        ──────────────────────────────────
public/agent-collective/                 agent-collective-api/
  index.html  ──── SSE EventSource ────► server.py  (FastAPI)
  app.js       ◄── streaming events ──── └── ADK runtime
  style.css                                  └── creative_collective (root)
  favicon.svg                                    ├── campaign creation path
                                                 └── asset adaptation path
```

**SSE is a long-lived HTTP connection** — the browser opens one `EventSource` connection and the server pushes agent output tokens/events as they arrive. This is fundamentally different from the current request/response pattern and has implications for Cloud Run configuration (see Step 3).

---

## Step-by-Step Integration Plan

### Step 1 — Copy source files into this repo

The source project has two pieces that must come across together:

**1a. ADK agents package** — the Python package containing all agents. Create:
```
agent-collective-api/
  agent_collective/        # the ADK agents package (copied from source project root)
    __init__.py
    agent.py               # defines creative_collective root agent + all sub-agents
    (any other .py files)
  kb/                      # knowledge base documents read by kb_analyzer (if present)
```

**1b. FastAPI server + static files**
```
agent-collective-api/
  server.py                # copied from demo_ui/server.py
  requirements.txt         # copied from demo_ui/requirements.txt
  Dockerfile               # new — see template below
  .dockerignore            # new
```

> The `static/` folder from `demo_ui/` does **not** go into `agent-collective-api/` — those files go to `public/agent-collective/` (see Step 4).

**Dockerfile:**
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8080"]
```

**`.dockerignore`:**
```
__pycache__/
*.pyc
.env
static/
```

### Step 2 — Configure CORS in server.py

The FastAPI server must allow requests from the Firebase Hosting origin. Add/verify in `server.py`:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://v3-creative-engine.web.app",
        "https://v3-creative-engine.firebaseapp.com",
        "http://localhost:5000",   # local Firebase emulator
        "http://localhost:3000",   # local dev if needed
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Step 3 — Deploy the Cloud Run service

SSE requires long-lived connections. Add `--timeout` and `--concurrency` flags:

```bash
gcloud run deploy agent-collective-api \
  --source ./agent-collective-api \
  --region us-central1 \
  --project v3-creative-engine \
  --allow-unauthenticated \
  --port 8080 \
  --timeout 3600 \
  --concurrency 10 \
  --min-instances 0 \
  --max-instances 5
```

- `--timeout 3600`: allows up to 60-minute agent sessions (default is 300s, which will cut off long runs)
- `--concurrency 10`: each instance handles up to 10 simultaneous SSE connections
- Cold starts will add latency for the first request after idle — `--min-instances 1` can eliminate this if budget allows

Note the deployed service URL — it will look like:
`https://agent-collective-api-XXXXXXXX-uc.a.run.app`

Store this URL — it goes into the frontend in Step 4.

> **Authentication note:** `--allow-unauthenticated` is appropriate for an internal team tool where Hosting is the access boundary. If stricter auth is needed later, pass Firebase Auth ID tokens as `Authorization: Bearer <token>` headers and verify them in `server.py`.

### Step 4 — Place frontend files

Copy from the source project into `public/agent-collective/`:

```
demo_ui/static/index.html  →  public/agent-collective/index.html
demo_ui/static/app.js      →  public/agent-collective/app.js
demo_ui/static/style.css   →  public/agent-collective/style.css
```

Keep `public/agent-collective/favicon.svg` (existing YouTube brand icon).

**Update the API base URL in `app.js`** — look for where the `EventSource` or `fetch` is constructed and replace the localhost URL:

```js
// Before (local dev)
const API_BASE = 'http://localhost:8000';

// After (production)
const API_BASE = 'https://agent-collective-api-XXXXXXXX-uc.a.run.app';
```

**Verify SSE path references:** In `app.js`, the `EventSource` connection will point to an endpoint like `/stream` or `/chat`. Confirm the path matches the route defined in `server.py`.

**Check asset paths in `index.html`:** Ensure `app.js` and `style.css` are referenced with relative paths (`./app.js`, `./style.css`) so Firebase Hosting serves them correctly.

### Step 5 — Verify Firebase Hosting routing

No changes needed to `firebase.json` — the existing rewrite already covers the frontend SPA:

```json
{ "source": "/agent-collective/**", "destination": "/agent-collective/index.html" }
```

`app.js` and `style.css` are served as static files by Firebase Hosting before the catch-all rewrite rule applies, so they don't need individual rewrite entries.

### Step 6 — Set environment variables

The ADK agents require API keys and project config. **Do not hardcode these.** Identify all required vars by checking `server.py` and the agent files for `os.environ` or `os.getenv` calls.

Likely required:
```
GOOGLE_CLOUD_PROJECT=v3-creative-engine
GOOGLE_GENAI_USE_VERTEXAI=true   # or GEMINI_API_KEY if using AI Studio
GOOGLE_CLOUD_LOCATION=us-central1
```

Set at deploy time:
```bash
gcloud run deploy agent-collective-api \
  --source ./agent-collective-api \
  --region us-central1 \
  --project v3-creative-engine \
  --set-env-vars "GOOGLE_CLOUD_PROJECT=v3-creative-engine,GOOGLE_CLOUD_LOCATION=us-central1"
```

For secrets (API keys), use Secret Manager:
```bash
gcloud run deploy agent-collective-api \
  --set-secrets "GEMINI_API_KEY=gemini-api-key:latest"
```

**IAM note:** The Cloud Run service account needs `roles/aiplatform.user` (for Vertex AI / Gemini calls) and `roles/datastore.user` (if agents write to Firestore). The default Compute service account may already have these — verify in IAM console.

### Step 7 — Deploy frontend

```bash
firebase deploy --only hosting
```

### Step 8 — Smoke test

1. Open `https://v3-creative-engine.web.app/agent-collective/`
2. Open browser DevTools → **Network tab** → filter by `EventSource` or `eventsource`
3. Send a message in the UI
4. Confirm an SSE connection is established to the Cloud Run URL
5. Confirm agent response tokens stream in progressively
6. Confirm no CORS errors in the console
7. Test both paths: trigger campaign creation, then test asset adaptation

---

## Local Development

To run the full stack locally before deploying:

**Terminal 1 — Backend:**
```bash
cd agent-collective-api
pip install -r requirements.txt
uvicorn server:app --reload --port 8000
```

**Terminal 2 — Frontend:**
```bash
# Serve static files from public/agent-collective/
# using any simple HTTP server (Firebase emulator, Python, etc.)
cd public/agent-collective
python3 -m http.server 3000
```

Ensure `app.js` points to `http://localhost:8000` for local dev. Consider using an env toggle or a `<meta>` tag in `index.html` to switch between local and production API URLs without code changes.

**Alternatively**, ADK provides its own dev UI:
```bash
# From the source project root (requires ADK installed)
adk web
```
This is useful for testing agent behaviour directly, without the custom frontend.

---

## Ongoing Maintenance

### Updating the backend (agents or server)
```bash
gcloud run deploy agent-collective-api \
  --source ./agent-collective-api \
  --region us-central1 \
  --project v3-creative-engine
```

### Updating the frontend
Edit files in `public/agent-collective/`, then:
```bash
firebase deploy --only hosting
```

### Viewing logs
```bash
# Cloud Run logs (last 50 entries)
gcloud logging read \
  "resource.type=cloud_run_revision AND resource.labels.service_name=agent-collective-api" \
  --project v3-creative-engine \
  --limit 50 \
  --format "table(timestamp,textPayload)"
```
Or via Cloud Console:
`https://console.cloud.google.com/run/detail/us-central1/agent-collective-api/logs?project=v3-creative-engine`

---

## Cleanup After Migration

Once the new version is live and verified:

1. Remove `callGeminiAgent` export from `functions/src/index.js`
2. Delete the `callGeminiAgent` source file (check `functions/src/` for it)
3. Run `firebase deploy --only functions` to remove the old Cloud Function
4. Delete `ytm-agent-collective-v3.html` and `ytm-agent-collective-test.html` from repo root

---

## Open Questions (resolve before implementing)

- [ ] **Source project path:** Confirm the agents package name and directory layout in the source project (the package that `server.py` imports)
- [ ] **KB documents:** Where do the knowledge base files live in the source project? They need to be bundled into the Docker image or read from Cloud Storage
- [ ] **Environment variables:** Run `grep -r "os.environ\|os.getenv" agent-collective-api/` after copying files to get the full list of required vars
- [ ] **SSE endpoint path:** Confirm the exact route in `server.py` that `app.js` connects to (e.g. `/stream`, `/chat`, `/run`)
- [ ] **Session persistence:** Does `server.py` maintain ADK session state in memory (lost on Cloud Run instance restart) or persist it? If in-memory only, warn users that browser refresh resets the session
- [ ] **Artifact downloads:** The `results_presenter` and `brief_presenter` agents save downloadable artifacts — confirm where these are written (local disk? Cloud Storage?) and whether `server.py` exposes a download endpoint
- [ ] **Brand theme alignment:** Does the new UI match the existing black/red YouTube brand theme used across the V3 hub, or will `style.css` need adjustments?
- [ ] **Cut or keep `callGeminiAgent`:** Should the old Cloud Function stay as a fallback during rollout, or be removed immediately?

---

## Reference

| Resource | Location |
|---|---|
| V3 Creative Engine live URL | https://v3-creative-engine.web.app/ |
| Agent Collective (current) | https://v3-creative-engine.web.app/agent-collective/ |
| GCP project console | https://console.cloud.google.com/home/dashboard?project=v3-creative-engine |
| Cloud Run console | https://console.cloud.google.com/run?project=v3-creative-engine |
| Firebase Hosting config | `firebase.json` (repo root) |
| Overall architecture doc | `docs/architecture/TECHNICAL_DESIGN_DOCUMENT.md` |
