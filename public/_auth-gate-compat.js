// Shared compat-mode auth gate for V1 SPAs and hub.html.
// Throwaway — deleted in Phase 5 cleanup along with the rest of Firebase.
// Loaded AFTER firebase-app-compat.js + firebase-auth-compat.js, BEFORE the app's own script.

(function () {
  if (window.__authGateLoaded) return;
  window.__authGateLoaded = true;

  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8",
    authDomain: "v3-creative-engine.firebaseapp.com",
    projectId: "v3-creative-engine",
    storageBucket: "v3-creative-engine.firebasestorage.app",
    messagingSenderId: "964100659393",
    appId: "1:964100659393:web:bc6aa41fce9a8770d55c40",
  };

  function isAllowed(email) {
    if (!email) return false;
    if (email === "ivanho.wz@gmail.com") return true;
    return email.endsWith("@google.com");
  }

  // Hide page synchronously via CSS — survives any DOM-mount timing.
  // Pages opt in by including <style> .auth-gate-hide-until-ready { ... } OR
  // by adding the marker via JS below before <body> exists.
  const styleEl = document.createElement("style");
  styleEl.id = "authGateStyle";
  styleEl.textContent =
    "html.auth-gate-pending body > *:not(#authGateScreen){visibility:hidden!important;}" +
    "html.auth-gate-pending body{background:#0a0a0a;}";
  (document.head || document.documentElement).appendChild(styleEl);
  document.documentElement.classList.add("auth-gate-pending");

  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  // Bypass auth for local dev (localhost or Cloud Shell preview).
  const _host = window.location.hostname;
  if (_host === 'localhost' || _host === '127.0.0.1' || /^\d+-cs-.+\.cloudshell\.dev$/.test(_host)) {
    document.documentElement.classList.remove('auth-gate-pending');
    window.__authGatePassed = true;
    return;
  }

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  function buildOverlay() {
    const screen = document.createElement("div");
    screen.id = "authGateScreen";
    screen.style.cssText =
      "position:fixed;inset:0;background:#0a0a0a;color:#e5e5e5;" +
      "font-family:system-ui,sans-serif;display:flex;align-items:center;" +
      "justify-content:center;z-index:2147483647;";
    screen.innerHTML =
      '<div style="background:#171717;border:1px solid #262626;border-radius:12px;' +
      'padding:40px;max-width:420px;width:90%;text-align:center;">' +
      '<h1 style="margin:0;font-size:22px;">Sign in</h1>' +
      '<p style="color:#737373;font-size:13px;margin-top:8px;">' +
      'Google account required (@google.com or owner)</p>' +
      '<button id="authGateBtn" style="margin-top:20px;background:#fff;color:#000;' +
      'border:none;padding:10px 20px;border-radius:8px;font-size:14px;' +
      'font-weight:600;cursor:pointer;">Sign in with Google</button>' +
      '<p id="authGateError" style="color:#f87171;margin-top:16px;font-size:14px;' +
      'display:none;"></p></div>';
    document.body.appendChild(screen);

    const btn = screen.querySelector("#authGateBtn");
    const errEl = screen.querySelector("#authGateError");

    btn.addEventListener("click", async () => {
      btn.disabled = true;
      btn.textContent = "Signing in…";
      errEl.style.display = "none";
      try {
        await auth.signInWithPopup(provider);
      } catch (e) {
        errEl.textContent = (e && e.message) || "Sign-in failed.";
        errEl.style.display = "block";
      } finally {
        btn.disabled = false;
        btn.textContent = "Sign in with Google";
      }
    });

    return { screen, errEl };
  }

  let mounted = null;
  function mountIfNeeded() {
    if (mounted || !document.body) return;
    mounted = buildOverlay();
  }

  function reveal() {
    document.documentElement.classList.remove("auth-gate-pending");
    if (mounted && mounted.screen) mounted.screen.remove();
    window.__authGatePassed = true;
  }

  function showError(msg) {
    mountIfNeeded();
    if (mounted && mounted.errEl) {
      mounted.errEl.textContent = msg;
      mounted.errEl.style.display = "block";
    }
  }

  if (document.body) {
    mountIfNeeded();
  } else {
    document.addEventListener("DOMContentLoaded", mountIfNeeded);
  }

  auth.onAuthStateChanged((u) => {
    if (u && !isAllowed(u.email)) {
      showError(u.email + " is not authorized.");
      auth.signOut();
      return;
    }
    if (u) {
      reveal();
    } else {
      mountIfNeeded();
    }
  });
})();
