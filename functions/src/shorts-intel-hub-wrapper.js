/**
 * CommonJS wrapper for Shorts Intel Hub ES Modules
 * This allows the main index.js (CommonJS) to import Shorts Intel Hub functions (ES Modules)
 */

const functions = require('firebase-functions');
const { requireAllowedHttp } = require('./_authGuard');

// Since we can't use top-level await in CommonJS, we create wrapper functions
// that the Cloud Functions runtime will call

// API endpoint wrapper
exports.shortsIntelApi = functions.https.onRequest(async (req, res) => {
  await requireAllowedHttp(req, res);
  if (res.headersSent) return;
  try {
    const { api } = await import('./shorts-intel-hub/index.js');
    return api(req, res);
  } catch (error) {
    console.error('Error loading Shorts Intel Hub API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Weekly refresh scheduler wrapper (not user-facing — no gate)
exports.shortsIntelWeeklyRefresh = functions.pubsub
  .schedule('every monday 06:00')
  .timeZone('UTC')
  .onRun(async (context) => {
    try {
      const { weeklyRefreshJob } = await import('./shorts-intel-hub/index.js');
      return weeklyRefreshJob(context);
    } catch (error) {
      console.error('Error loading Shorts Intel Hub weekly refresh:', error);
      throw error;
    }
  });
