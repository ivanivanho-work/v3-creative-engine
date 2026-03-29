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

The new implementation comes from a separate project with this structure:

```
server.py              # FastAPI backend — ADK agent orchestration
static/
  index.html           # HTML shell
  app.js               # Frontend JavaScript
  style.css            # Styles
requirements.txt       # Python dependencies (FastAPI, ADK, etc.)
```

**Key architectural difference:** The current backend is Node.js (Cloud Functions). The new backend is **Python (FastAPI)**. This requires a new deployment target — see the Backend Deployment section below.

---

## Target Architecture

```
Firebase Hosting                    Cloud Run (Python)
─────────────────                   ──────────────────
public/agent-collective/            agent-collective-api/
  index.html   ──── API calls ────► server.py  (FastAPI + ADK)
  app.js                            requirements.txt
  style.css                         Dockerfile
  favicon.svg
```

The frontend static files live in `public/agent-collective/` (served by Firebase Hosting, same as today).
The FastAPI backend runs as a **Cloud Run service** in the `v3-creative-engine` GCP project.

---

## Step-by-Step Integration Plan

### Step 1 — Set up the backend directory

Create `agent-collective-api/` at the repo root:

```
agent-collective-api/
  server.py              # copied from the source project
  requirements.txt       # copied from the source project
  Dockerfile             # new — see template below
  .dockerignore          # new
```

**Dockerfile template:**
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY server.py .
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8080"]
```

**`.dockerignore`:**
```
__pycache__/
*.pyc
.env
```

Cloud Run expects the service to listen on port `8080`.

### Step 2 — Configure CORS in server.py

The FastAPI server must allow requests from the Firebase Hosting origin. Add/verify this in `server.py`:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://v3-creative-engine.web.app",
        "https://v3-creative-engine.firebaseapp.com",
        "http://localhost:5000",   # local Firebase emulator
        "http://localhost:3000",   # local dev server if used
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Step 3 — Deploy the Cloud Run service

```bash
# From repo root
gcloud run deploy agent-collective-api \
  --source ./agent-collective-api \
  --region us-central1 \
  --project v3-creative-engine \
  --allow-unauthenticated \
  --port 8080
```

Note the deployed service URL — it will look like:
`https://agent-collective-api-XXXXXXXX-uc.a.run.app`

Store this URL — it goes into the frontend in Step 4.

> **Authentication note:** `--allow-unauthenticated` is appropriate for internal team tools where the Hosting layer acts as the access control boundary. If stricter auth is needed later, revisit with Firebase Auth tokens passed as Bearer headers.

### Step 4 — Update the frontend files

Copy the static files from the source project into `public/agent-collective/`:

```
static/index.html  →  public/agent-collective/index.html
static/app.js      →  public/agent-collective/app.js
static/style.css   →  public/agent-collective/style.css
```

Keep `public/agent-collective/favicon.svg` (existing YouTube brand icon).

In `app.js` (or `index.html`), replace any hardcoded `localhost` or relative API URLs with the Cloud Run service URL from Step 3. Look for something like:

```js
// Before
const API_BASE = 'http://localhost:8000';

// After
const API_BASE = 'https://agent-collective-api-XXXXXXXX-uc.a.run.app';
```

Consider making this a build-time constant or a `<meta>` tag injected from `index.html` so future URL changes only touch one place.

### Step 5 — Verify Firebase Hosting routing

No changes needed to `firebase.json` — the existing rewrite already covers the frontend:

```json
{ "source": "/agent-collective/**", "destination": "/agent-collective/index.html" }
```

However, verify that `app.js` and `style.css` are referenced correctly from `index.html` using relative paths (e.g., `./app.js`, `./style.css`) so Firebase Hosting serves them correctly.

### Step 6 — Deploy

```bash
# Deploy frontend only
firebase deploy --only hosting

# Or deploy everything
firebase deploy
```

### Step 7 — Smoke test

1. Open `https://v3-creative-engine.web.app/agent-collective/`
2. Open browser DevTools → Network tab
3. Trigger an agent interaction
4. Confirm API calls go to the Cloud Run URL with `200` responses
5. Confirm no CORS errors in the console

---

## Environment Variables & Secrets

The FastAPI backend likely needs API keys (Gemini, ADK credentials, etc.). **Do not hardcode these.**

For Cloud Run, set them as environment variables at deploy time:

```bash
gcloud run deploy agent-collective-api \
  --source ./agent-collective-api \
  --region us-central1 \
  --project v3-creative-engine \
  --allow-unauthenticated \
  --set-env-vars "GEMINI_API_KEY=...,OTHER_VAR=..."
```

Or use Secret Manager (preferred for production):

```bash
gcloud run deploy agent-collective-api \
  --set-secrets "GEMINI_API_KEY=gemini-api-key:latest"
```

Check `requirements.txt` and `server.py` to identify all required env vars before deploying.

---

## Ongoing Maintenance

### Updating the backend
```bash
# Redeploy Cloud Run after server.py changes
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

### Logs
```bash
# Cloud Run logs
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=agent-collective-api" \
  --project v3-creative-engine \
  --limit 50

# Or via Cloud Console
# https://console.cloud.google.com/run/detail/us-central1/agent-collective-api/logs?project=v3-creative-engine
```

---

## Cleanup After Migration

Once the new version is live and verified:

1. Remove `callGeminiAgent` from `functions/src/index.js` (if no longer used)
2. Delete `ytm-agent-collective-v3.html` and `ytm-agent-collective-test.html` from repo root
3. Run `firebase deploy --only functions` to remove the old Cloud Function

---

## Open Questions (resolve before implementing)

- [ ] What are the exact API endpoints that `app.js` calls? (Check `server.py` route definitions)
- [ ] What environment variables does `server.py` require? (Check `server.py` and `.env` in source project)
- [ ] Should the Cloud Run service require Firebase Auth tokens, or is unauthenticated OK for this internal tool?
- [ ] Should the old `callGeminiAgent` Cloud Function be kept as a fallback during migration, or cut immediately?
- [ ] Does the new UI match the existing black/red brand theme, or will it need style alignment with the rest of the V3 hub?

---

## Reference

| Resource | Link |
|---|---|
| V3 Creative Engine live URL | https://v3-creative-engine.web.app/ |
| GCP project | https://console.cloud.google.com/home/dashboard?project=v3-creative-engine |
| Cloud Run console | https://console.cloud.google.com/run?project=v3-creative-engine |
| Firebase Hosting config | `firebase.json` (repo root) |
| Overall architecture doc | `docs/architecture/TECHNICAL_DESIGN_DOCUMENT.md` |
