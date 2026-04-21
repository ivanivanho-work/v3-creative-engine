# TDD Update — Creative Generator V2 & Agent Collective V2

Latest-build technical specifications. Reflects commits through `7aebde0`.

## Creative Generator V2

### Architecture
- Frontend: React 18 + Vite (`tools/creative-generator-v2/src/App.jsx`), built into `public/creative-generator-v2/`
- Backend: Python FastAPI + embedded Google ADK (`services/creative-generator-v2/server/app.py`) on Cloud Run
- Storage: Firestore (`prompt_transfers_v2`) for incoming manifests; localStorage for run archive
- Modules: `api.js` (HTTP client), `firebase.js` (Firestore init), `config.js` (market mappings), `JobView`, `ReferenceView`, `CreativePackagePanel`

### Capabilities
- Receives manifests from Agent Collective V2 via Firestore bridge using `?transfer={docId}&market={market}` URL params
- Two parallel pipelines: reference-image generation (`reference_images`) and scene-level job generation (`jobs`)
- Job-chip queue UI; clicking a chip loads that job's prompt into the generator
- Renders Agent Collective creative-package markdown for full context (concepts, hooks, audio, visuals)
- 3s status polling on `/api/status/{sessionId}` for ref/job state
- Markets: KR, JP, ID, IN

### API / Contracts
- `POST /api/session`, `/api/manifest/load`, `/api/manifest/validate` (manifest v1.1)
- `POST /api/refs/generate`, `/api/jobs/generate`
- `GET /api/status/{session_id}` returns `ref_status` + `job_status`
- `POST /api/run/stream` SSE (partially wired)
- Transfer doc shape: `{ manifest, creativePackage, market, jobCount, timestamp }`

### Latest-build changes
- `ensureSession()` auto-reconnect — 404 on poll clears `sessionId` so the next action provisions a fresh session, surviving Cloud Run redeploys (4ceeb05)
- Archive now persists `creativePackage`; restoring an archived run auto-creates a fresh backend session (134147e)
- React error boundary in `main.jsx` replaces blank-page failures with a visible error (134147e)
- JobView scene grouping uses `scene_id` with fallback to legacy `scene` (134147e)
- Failed generation now surfaces a "failed" status instead of silent mock output (134147e)
- Hook ordering fix: `stopPolling` defined before `pollStatus` (134147e)
- Removed duplicate `loadTransfer` race condition (134147e)

### Constraints / edge cases
- Backend session expiry → 404 on poll triggers reconnect path
- Manifest must carry exactly one of `brief_id` (create) or `pipeline_run_id` (adapt)
- Transfer queue is not durable across page close — must be re-sent
- Archive bound by localStorage capacity
- Market-code mapping required between Agent Collective (`kr/jp/id/in`) and sidebar IDs (`korea/japan/indonesia/india`)

---

## Agent Collective V2 (ADK)

### Architecture
- Frontend: vanilla HTML/JS (`public/agent-collective-v2/{index.html,script.js,style.css}`), 3-panel dark UI
- Backend: FastAPI + Google ADK (`services/agent-collective-v2/agent_collective/agent.py`) on Cloud Run (`agent-collective-v2-964100659393.us-central1.run.app`)
- 38 agents across 5 phases: Discovery → Brief → Creative → Production → Delivery (+ adapt and full-campaign variants)
- Storage: Firestore `chat_archives_v2` (history) and `prompt_transfers_v2` (Creative Generator bridge)
- KB filesystem: `services/agent-collective-v2/kb/{global,kr,in,jp,id}/`; cache in `outputs/kb_cache/`

### Capabilities
- Multi-agent GTM/creative-brief workflow with Gemini 2.5 Flash/Pro (configurable via `MODEL_FLASH` / `MODEL_PRO`)
- Markets: KR, IN, JP, ID (AUNZ removed)
- Chat UI filters to "presenter" authors and renders streaming markdown
- KB system: global + market-scoped uploads (.md, .json) read by agents
- Phase tracker with rotating sub-step copy ("Diving into the market data…", etc.)
- "Send to Generator" writes manifest + creative package to `prompt_transfers_v2`, opens Creative Generator V2 with the doc ID
- Approve-to-Agent-Collective bridge from Shorts Intel Hub: posts approved trend briefs as KB files
- Per-market archive save/load

### API / Contracts
- `POST /api/session` (with `market`)
- `POST /api/run/stream` SSE — `{ author, text, json_output?, artifact_files?, phase_transition? }`
- `GET/POST /api/kb/list`, `POST /api/kb/upload` (multipart, `scope` ∈ `global|kr|in|jp|id`), `POST /api/kb/delete`
- `POST /api/manifest`, `POST /api/full-campaign-manifest` (preferred, falls back to `/api/manifest`)
- `POST /api/creative-package`

### Latest-build changes
- Lazy session creation — no auto-create on page load; market is selectable until first send (7aebde0)
- Removed duplicate session re-create in market-change handler (7aebde0)
- Approve-to-Agent-Collective bridge: Shorts Intel Hub Summary view batches approved trends per (market, ISO-week), renders as markdown brief, POSTs to `/api/kb/upload` with the right scope; frozen history of past sent weeks (cbe38ce)
- AUNZ market dropped from frontend dropdowns, type validators, backend validators, and `parseNyanCat` country map (cbe38ce)
- Phase tracking computes current phase from completed presenters via `PHASE_COMPLETE_AUTHORS`

### Constraints / edge cases
- Market locks after first message (dropdown disabled)
- "Send to Generator" gated until all phase presenters complete
- KB cache invalidates on SHA-256 fingerprint of model + KB file contents (catches model upgrades)
- Attachment support: .md, .json, video, images, PDF, plaintext
- Manifest endpoint preference: full-campaign first, then standard
- Unhandled errors show modal with "Start over" reset
- Output artifacts written to `outputs/{market}/run_YYYY-MM-DD_NNN/`
