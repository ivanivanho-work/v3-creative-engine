/**
 * Download Asset Cloud Function
 * Proxies downloads from Firebase Storage with proper headers.
 * Auth: accepts Authorization: Bearer <idToken> OR ?token=<idToken> query param
 *       (query-param mode is needed because <a download> can't set headers).
 */

const admin = require('firebase-admin');
const { isAllowed } = require('../_authGuard');

async function verifyToken(req, res) {
  if (req.method === 'OPTIONS') return true;

  const header = req.get('Authorization') || req.get('authorization') || '';
  const m = header.match(/^Bearer\s+(.+)$/i);
  const token = (m && m[1]) || req.query.token;
  if (!token) {
    res.status(401).json({ error: 'Sign in required' });
    return false;
  }
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    if (!decoded.email_verified || !isAllowed(decoded.email)) {
      res.status(403).json({ error: 'Not authorized' });
      return false;
    }
    return true;
  } catch (e) {
    res.status(401).json({ error: 'Invalid token' });
    return false;
  }
}

async function downloadAsset(req, res) {
  // CORS headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (!(await verifyToken(req, res))) return;

  try {
    const { url } = req.query;

    if (!url) {
      res.status(400).json({ error: 'URL parameter required' });
      return;
    }

    console.log('[DownloadAsset] Downloading:', url);

    // Fetch from Firebase Storage
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'application/octet-stream';

    // Determine filename from URL
    const urlParts = url.split('/');
    const filename = urlParts[urlParts.length - 1].split('?')[0] || 'download';

    // Set headers for download
    res.set('Content-Type', contentType);
    res.set('Content-Disposition', `attachment; filename="${filename}"`);
    res.set('Content-Length', buffer.byteLength.toString());

    // Send file
    res.send(Buffer.from(buffer));

  } catch (error) {
    console.error('[DownloadAsset] Error:', error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = { downloadAsset };
