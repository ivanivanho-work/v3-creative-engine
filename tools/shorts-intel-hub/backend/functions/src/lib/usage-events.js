/**
 * Shared usage_events logger for the admin dashboard (issue #27).
 *
 * Fire-and-forget Firestore writes. Failures are logged and swallowed so a
 * telemetry hiccup never breaks the actual upload/rank request.
 */

import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

/**
 * @param {object} event
 * @param {'upload_completed'|'query_completed'} event.event_type
 * @param {string} [event.market]
 * @param {object} [event.payload]
 */
export function logUsageEvent(event) {
  const doc = {
    tool: 'shorts_intel_hub',
    event_type: event.event_type,
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    market: event.market || 'UNKNOWN',
    payload: event.payload || {},
  };
  db.collection('usage_events').add(doc).catch((err) => {
    console.error('[usage_events] write failed:', err.message);
  });
}
