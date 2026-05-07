// Auth gate for agent-collective-v2 (Firebase compat mode).
// Renders a sign-in overlay until an allowlisted user is authenticated.
// Loaded BEFORE script.js so the rest of the app never runs unauthed.

(function () {
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8",
    authDomain: "v3-creative-engine.firebaseapp.com",
    projectId: "v3-creative-engine",
    storageBucket: "v3-creative-engine.firebasestorage.app",
    messagingSenderId: "1044107949498",
    appId: "1:1044107949498:web:ba89c7e43b18c23db8f816",
  };

  function isAllowed(email) {
    if (!email) return false;
    if (email === "ivanho.wz@gmail.com") return true;
    return email.endsWith("@google.com");
  }

  // Bypass auth for local dev (localhost or Cloud Shell preview).
  const _host = window.location.hostname;
  if (_host === "localhost" || _host === "127.0.0.1" || /^\d+-cs-.+\.cloudshell\.dev$/.test(_host)) {
    window.__authGatePassed = true;
    return;
  }

  // Initialize Firebase (script.js will reuse the same default app).
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  // Hide app until auth resolves.
  const root = document.querySelector(".app");
  if (root) root.style.display = "none";

  // Build overlay.
  const overlay = document.createElement("div");
  overlay.id = "authGateOverlay";
  overlay.style.cssText =
    "position:fixed;inset:0;background:#0a0a0a;color:#e5e5e5;" +
    "font-family:system-ui,sans-serif;display:flex;align-items:center;" +
    "justify-content:center;z-index:99999;";
  overlay.innerHTML = `
    <div style="background:#171717;border:1px solid #262626;border-radius:12px;
                padding:40px;max-width:420px;width:90%;text-align:center;">
      <h1 style="margin:0;font-size:22px;">Agent Collective V2</h1>
      <p id="authGateStatus" style="color:#737373;font-size:13px;margin-top:8px;">
        Sign in to continue
      </p>
      <button id="authGateBtn" style="margin-top:20px;background:#fff;color:#000;
              border:none;padding:10px 20px;border-radius:8px;font-size:14px;
              font-weight:600;cursor:pointer;">Sign in with Google</button>
      <p id="authGateError" style="color:#f87171;margin-top:16px;font-size:14px;
                                   display:none;"></p>
    </div>`;
  document.body.appendChild(overlay);

  const btn = overlay.querySelector("#authGateBtn");
  const status = overlay.querySelector("#authGateStatus");
  const errEl = overlay.querySelector("#authGateError");

  function showError(msg) {
    errEl.textContent = msg;
    errEl.style.display = "block";
  }
  function clearError() {
    errEl.style.display = "none";
  }

  btn.addEventListener("click", async () => {
    btn.disabled = true;
    btn.textContent = "Signing in…";
    clearError();
    try {
      await auth.signInWithPopup(provider);
    } catch (e) {
      showError((e && e.message) || "Sign-in failed.");
    } finally {
      btn.disabled = false;
      btn.textContent = "Sign in with Google";
    }
  });

  auth.onAuthStateChanged((u) => {
    if (u && !isAllowed(u.email)) {
      showError(`${u.email} is not authorized.`);
      auth.signOut();
      return;
    }
    if (u) {
      // Allowed — remove overlay, reveal app.
      overlay.remove();
      if (root) root.style.display = "";
      window.__authGatePassed = true;
    } else {
      status.textContent = "Sign in to continue";
    }
  });
})();
