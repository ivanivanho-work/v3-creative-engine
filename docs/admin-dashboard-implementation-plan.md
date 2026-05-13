# Admin Dashboard for AI Tool Utilization Metrics

GitHub issue: https://github.com/ivanivanho-work/v3-creative-engine/issues/27

## Context

Today there is no executive-friendly view into how the five Shorts Toolbox tools are being used. The only structured data is `run_timing.json` files in `agent_collective/outputs/`, which only a developer can read. Team leads need to see, in plain numbers: how many campaigns ran this month, which markets are using the tools most, whether the AI quality checks are passing, and how the trend is moving.

A static sample dashboard already exists at `public/admin.html` with mock data and Chart.js visualisations. This plan covers wiring it to real data via Firestore, plus the minimal instrumentation needed in each tool to feed that data.

The user has confirmed:
- Fresh start, no backfill of existing runs
- Track usage by **market** (not by individual user)
- Read-only Phase 1 with date range and market filters

---

## Architecture summary

**One Firestore collection: `usage_events`.** Every tool writes a document when something meaningful happens (a pipeline run finishes, a generation session completes, an upload lands, a snapshot saves). Each event has a common shape: `tool`, `event_type`, `timestamp`, `market`, plus a tool-specific `payload`.

**Dashboard reads directly from Firestore in the browser** using the Firebase compat SDK pattern already used in `public/agent-collective-v2/script.js`. Filtering by date and market is done via Firestore `where()` queries.

**Auth gate** is the existing `_auth-gate-compat.js` -- already enforces the allowlist (`ivanho.wz@gmail.com` and `@google.com` accounts). Three script tags in the page `<head>` is all that is needed.

**Template Stamper requires no new instrumentation** -- it already writes to a Firestore `jobs` collection via `functions/src/index.js` (Firestore `onCreate` trigger on `jobs/{jobId}`). The dashboard reads that collection directly.

---

## Firestore schema

Collection: `usage_events`

Common fields (every document):
- `tool` (string): `agent_collective` | `creative_generator` | `shorts_intel_hub` | `shorts_brain`
- `event_type` (string): see per-tool list below
- `timestamp` (Timestamp): server timestamp at write
- `market` (string): `KR` | `JP` | `IN` | `ID` | `AUNZ` | `GLOBAL` | `UNKNOWN`
- `payload` (map): tool-specific fields

Per-tool event types and payloads:

**Agent Collective** -- `event_type: pipeline_run_completed`
```
run_id              (string, from output folder name)
pipeline_path       (create | create_and_adapt | adapt)
template_mode       (boolean)
brief_id            (string)
brief_name          (string)
run_start           (ISO8601 string)
run_end             (ISO8601 string)
total_duration_min  (number)
brief_quality_pass  (boolean)
brief_quality_loops (number)
prompt_quality_pass (boolean)
prompt_quality_loops (number)
prompt_jobs_flagged (number)
total_gen_pop_jobs  (number)
total_fc_jobs       (number, 0 if not full campaign)
audiences_covered   (number, 1 or 5)
fc_consistency_loops (number, 0 if not full campaign)
status              (completed | incomplete)
```

**Creative Generator** -- `event_type: generation_session_completed`
```
session_id          (string)
total_jobs          (number)
jobs_completed      (number)
jobs_failed         (number)
asset_types         (array of strings: image | video | reference)
duration_min        (number)
```

**Shorts Intel Hub** -- `event_type: upload_completed`
```
upload_id           (string)
filename            (string)
file_format         (string)
topics_processed    (number)
```

**Shorts Brain** -- `event_type: snapshot_saved`
```
week_id             (string)
snapshot_size_kb    (number)
```

**Template Stamper** -- no event written. Dashboard reads existing `jobs` collection directly.

---

## Files to modify

### 1. Firestore rules
`/home/danilpalma/v3-creative-engine/firestore.rules`

Add a new rule block for `usage_events` and `jobs` (the latter already has rules for template-stamper). The new collection should be readable by authed users and writable by anyone authed (so client-side writes from Shorts Brain work) or by the server (for Agent Collective, Creative Generator, Intel Hub).

### 2. Agent Collective instrumentation
`/home/danilpalma/v3-creative-engine/services/agent-collective-v2/agent_collective/agent.py`

Add a helper function `_log_run_to_firestore(callback_context)` (new, near line 793 next to `_write_run_timing`). It reads from session state:
- `kb_insights.market` for market code
- Existing run_timing data for duration
- `brief_quality_result`, `prompt_quality_result` for quality data
- `generation_manifest`, `full_campaign_manifest` for job counts
- Infer `pipeline_path` from which manifest exists in state
- Infer `template_mode` from presence of `template_schema` in state

Call this helper from inside `_write_run_timing` at line 823 (after `json.dump`) so it fires at the end of all three callbacks (concept/creative, adaptation, full campaign) without needing changes in three places.

`/home/danilpalma/v3-creative-engine/services/agent-collective-v2/requirements.txt`
Add `google-cloud-firestore`.

### 3. Creative Generator instrumentation
`/home/danilpalma/v3-creative-engine/services/creative-generator-v2/creative_generator/tools.py`

At the end of `write_execution_report` (line 567), add a Firestore write of `event_type: generation_session_completed` using `job_status` data already in `tool_context.state`.

`/home/danilpalma/v3-creative-engine/services/creative-generator-v2/requirements.txt`
Add `google-cloud-firestore`.

### 4. Shorts Intel Hub instrumentation
The Intel Hub has two backends: a local Express dev server (`tools/shorts-intel-hub/backend/functions/src/api/routes.js`) and a production Cloud Function (`functions/shorts-intel-hub/`). Both need the same logging call. Plan: write a small shared helper inside `functions/shorts-intel-hub/` that wraps `admin.firestore().collection('usage_events').add(...)`, and call it from both the production handler and the local dev route after a successful `/upload` or `/match-and-rank`.

### 5. Shorts Brain instrumentation
`/home/danilpalma/v3-creative-engine/tools/shorts-brain/src/firebase.js`

`saveSnapshot` already writes to Firestore. Extend it to also write a parallel `usage_events` document with `event_type: snapshot_saved`. Reuse the existing Firestore client; one extra `addDoc` call.

### 6. Dashboard wiring
`/home/danilpalma/v3-creative-engine/public/admin.html`

- Add three script tags in `<head>`: `firebase-app-compat.js`, `firebase-auth-compat.js`, `firebase-firestore-compat.js`, then `/_auth-gate-compat.js` (matches the pattern in `public/agent-collective-v2/index.html` lines 11-13 and `public/agent-collective-v2/script.js` lines 24-40).
- Replace the inline `DATA` mock object with three async functions:
  - `loadKPIs(rangeDays, market)` -- queries `usage_events` filtered by `timestamp >= cutoff` and optional `market ==` filter; aggregates client-side.
  - `loadCampaignTrend(rangeDays, market)` -- groups campaigns by week and pipeline_path.
  - `loadRecentRuns(market)` -- fetches the last 10 `agent_collective` runs.
- Add a market filter (dropdown: All / KR / JP / IN / ID / AUNZ) next to the existing date range pills.
- For Template Stamper "renders completed" KPI, query the `jobs` collection with `status == completed` instead of `usage_events`.

---

## Reuse opportunities

- **Auth gate**: `public/_auth-gate-compat.js` lines 18-22 (allowlist), lines 27-32 (CSS visibility gate), lines 96-100 (reveal). No changes to this file needed.
- **Firestore SDK init**: copy from `public/agent-collective-v2/script.js` lines 24-40 (`FIREBASE_CONFIG`, `firebase.initializeApp`, `firebase.firestore()`).
- **Firestore rules helper**: `authed()` function in `firestore.rules` lines 10-15 is the existing allowlist gate -- reuse it for the new `usage_events` collection rule.
- **`saveSnapshot` Firestore client**: `tools/shorts-brain/src/firebase.js` already imports and configures Firestore -- piggyback on it for the new event write.
- **Existing `jobs` Firestore collection** (Template Stamper): already populated, no instrumentation needed.

---

## Implementation order

1. **Schema and rules** (small, foundational)
   - Add `usage_events` rule to `firestore.rules`
   - Deploy rules: `firebase deploy --only firestore:rules`

2. **Agent Collective** (the largest data source)
   - Add `google-cloud-firestore` to `requirements.txt`
   - Add `_log_run_to_firestore` helper in `agent.py`
   - Wire the call into `_write_run_timing`
   - Test with one local pipeline run; verify document appears in Firestore console

3. **Shorts Brain** (easy win, frontend-only)
   - One line added to `saveSnapshot` in `tools/shorts-brain/src/firebase.js`
   - Test by saving a snapshot in the dev app

4. **Creative Generator**
   - Add `google-cloud-firestore` to `requirements.txt`
   - Add Firestore write to `write_execution_report` in `tools.py`
   - Test with one generation session

5. **Shorts Intel Hub**
   - Add helper in `functions/shorts-intel-hub/`
   - Call from production Cloud Function handler
   - Test with one upload

6. **Dashboard wiring**
   - Add auth gate scripts and Firestore SDK to `public/admin.html`
   - Replace mock data with live queries
   - Add market filter dropdown
   - Test against the events generated in steps 2-5

7. **Deploy**
   - `firebase deploy --only hosting,firestore:rules`
   - Verify dashboard renders correctly at `https://v3-creative-engine.web.app/admin.html`

---

## Out of scope

- Backfill of historical Agent Collective runs (fresh start)
- Cost / token tracking (requires Vertex AI billing integration)
- Per-user attribution (Agent Collective runs in Cloud Shell; market is the chosen scope)
- Drill-downs into individual runs (read-only Phase 1)
- Shorts Brain session tracking beyond snapshot saves (the app has no auth-linked user session state)

---

## Verification plan

1. **Run a complete Agent Collective pipeline** (any path). Check Firebase console -> Firestore -> `usage_events` -- confirm one document with all expected fields.
2. **Save a Shorts Brain snapshot**. Confirm a `snapshot_saved` event appears with the correct week_id and market_context.
3. **Run a Creative Generator session end-to-end**. Confirm a `generation_session_completed` event with job counts matching the local execution report.
4. **Upload a CSV to Shorts Intel Hub**. Confirm an `upload_completed` event with the right market.
5. **Trigger a Template Stamper render**. Confirm the existing `jobs` collection gets a new `status: completed` doc (no new code needed -- this already works today).
6. **Open `/admin.html`** while signed in with an allowlisted email.
   - Verify all 5 KPI tiles show non-zero values
   - Verify the trend chart renders with bars
   - Verify the market filter dropdown narrows results to a single market
   - Verify the 7/30/90 day range filter changes the values
   - Verify the recent runs feed shows the campaigns just run
7. **Open `/admin.html`** while signed out -- verify the auth gate blocks access.
8. **Open `/admin.html`** while signed in with a non-allowlisted email -- verify the gate blocks access.
