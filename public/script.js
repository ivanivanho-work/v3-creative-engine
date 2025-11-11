/**
 * V3 Creative Factory - Client Logic
 * Frontend for V3 Creative Engine
 */

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwtQBAZ_IewB2TYCkew3ctzB4HMs9Gyn0",
  authDomain: "v3-creative-engine.firebaseapp.com",
  projectId: "v3-creative-engine",
  storageBucket: "v3-creative-engine.firebasestorage.app",
  messagingSenderId: "964100659393",
  appId: "1:964100659393:web:bc6aa41fce9a8770d55c40"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const functions = firebase.functions();

// State
let currentFilter = 'all';
let jobs = [];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  setupRealtimeListener();
  console.log('[V3 Factory] App initialized');
});

// Event Listeners
function setupEventListeners() {
  document.getElementById('testImageBtn').addEventListener('click', () => createTestJob('image'));
  document.getElementById('testVideoBtn').addEventListener('click', () => createTestJob('video'));
}

// Real-time Job Listener
function setupRealtimeListener() {
  db.collection('jobs')
    .orderBy('createdAt', 'desc')
    .limit(50)
    .onSnapshot((snapshot) => {
      jobs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      console.log(`[V3 Factory] Received ${jobs.length} jobs`);
      renderGallery();
    }, (error) => {
      console.error('[V3 Factory] Error listening to jobs:', error);
    });
}

// Create Test Job
async function createTestJob(type) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '<p>Creating test job...</p>';

  try {
    const createTestJobFn = functions.httpsCallable('createTestJob');
    const result = await createTestJobFn({
      type: type,
      prompt: `A beautiful ${type === 'image' ? 'sunset landscape' : 'nature timelapse'}`,
      format: type === 'image' ? '1:1' : '16:9'
    });

    console.log(`[V3 Factory] Created ${type} job:`, result.data.jobId);

  } catch (error) {
    console.error('[V3 Factory] Error creating job:', error);
    gallery.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

// Render Gallery
function renderGallery() {
  const gallery = document.getElementById('gallery');

  if (jobs.length === 0) {
    gallery.innerHTML = '<p>No jobs yet. Click a button above to create a test job!</p>';
    return;
  }

  gallery.innerHTML = jobs.map(job => renderJobCard(job)).join('');
}

// Render Job Card
function renderJobCard(job) {
  const timestamp = job.createdAt?.toDate?.() || new Date();
  const timeAgo = getTimeAgo(timestamp);
  const statusClass = `status-${job.status}`;

  // Show preview if job is complete and has a result URL
  let previewHtml = '';
  if (job.status === 'complete' && job.result?.url) {
    previewHtml = `
      <div class="job-preview">
        <img src="${job.result.url}" alt="${job.prompt}" loading="lazy" />
        ${job.result.metadata?.note ? `<div class="demo-badge">DEMO</div>` : ''}
      </div>
    `;
  } else if (job.status === 'processing') {
    previewHtml = `<div class="job-loading">⏳ Generating...</div>`;
  } else if (job.status === 'pending') {
    previewHtml = `<div class="job-loading">⏸ Queued...</div>`;
  }

  return `
    <div class="job-card ${statusClass}">
      <div class="job-header">
        <span class="job-id">${job.id.substring(0, 8)}</span>
        <span class="status-badge">${job.status}</span>
      </div>
      ${previewHtml}
      <div class="job-content">
        <div class="job-type">${job.type} • ${job.format || 'N/A'}</div>
        <div class="job-prompt">${job.prompt || 'No prompt'}</div>
        <div class="job-meta">${timeAgo}</div>
      </div>
      ${job.status === 'error' ? `<div class="job-error">${job.error}</div>` : ''}
    </div>
  `;
}

// Helper: Time Ago
function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}
