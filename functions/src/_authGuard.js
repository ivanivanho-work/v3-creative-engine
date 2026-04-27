/**
 * Auth guard for callable + HTTP functions.
 * Throwaway — deleted in Phase 5 along with the rest of Firebase.
 *
 * Usage in callables:
 *   const { requireAllowed } = require('../_authGuard');
 *   async function myHandler(data, context) {
 *     requireAllowed(context);
 *     ...
 *   }
 *
 * Usage in HTTP onRequest:
 *   const { requireAllowedHttp } = require('../_authGuard');
 *   async function myHttp(req, res) {
 *     await requireAllowedHttp(req, res);  // sends 401/403 + returns false on reject
 *     if (res.headersSent) return;
 *     ...
 *   }
 */

const admin = require('firebase-admin');
const functions = require('firebase-functions');

const OWNER_EMAIL = 'ivanho.wz@gmail.com';
const ALLOWED_DOMAIN = '@google.com';

function isAllowed(email) {
  if (!email) return false;
  if (email === OWNER_EMAIL) return true;
  return email.endsWith(ALLOWED_DOMAIN);
}

/** For functions.https.onCall handlers. */
function requireAllowed(context) {
  const email = context && context.auth && context.auth.token && context.auth.token.email;
  const verified = context && context.auth && context.auth.token && context.auth.token.email_verified;
  if (!verified || !email) {
    throw new functions.https.HttpsError('unauthenticated', 'Sign in required');
  }
  if (!isAllowed(email)) {
    throw new functions.https.HttpsError('permission-denied', 'Not authorized');
  }
}

/** For functions.https.onRequest handlers — verifies Authorization: Bearer <idToken>. */
async function requireAllowedHttp(req, res) {
  // CORS preflight should pass — caller still must respond appropriately.
  if (req.method === 'OPTIONS') return;

  const header = req.get('Authorization') || req.get('authorization') || '';
  const m = header.match(/^Bearer\s+(.+)$/i);
  if (!m) {
    res.status(401).json({ error: 'Sign in required' });
    return;
  }
  const idToken = m[1];
  let decoded;
  try {
    decoded = await admin.auth().verifyIdToken(idToken);
  } catch (e) {
    res.status(401).json({ error: 'Invalid token' });
    return;
  }
  if (!decoded.email_verified || !isAllowed(decoded.email)) {
    res.status(403).json({ error: 'Not authorized' });
    return;
  }
  req.user = { email: decoded.email, uid: decoded.uid };
}

module.exports = { isAllowed, requireAllowed, requireAllowedHttp };
