import React, { useEffect, useState } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from './firebase';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function isAllowed(email) {
  if (!email) return false;
  if (email === 'ivanho.wz@gmail.com') return true;
  return email.endsWith('@google.com');
}

const wrap = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#0a0a0a',
  color: '#e5e5e5',
  fontFamily: 'system-ui, sans-serif',
};
const card = {
  background: '#171717',
  border: '1px solid #262626',
  borderRadius: 12,
  padding: 40,
  maxWidth: 420,
  width: '90%',
  textAlign: 'center',
};
const btn = {
  marginTop: 20,
  background: '#fff',
  color: '#000',
  border: 'none',
  padding: '10px 20px',
  borderRadius: 8,
  fontSize: 14,
  fontWeight: 600,
  cursor: 'pointer',
};
const err = { color: '#f87171', marginTop: 16, fontSize: 14 };
const muted = { color: '#737373', fontSize: 13, marginTop: 8 };

export default function AuthGate({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      if (u && !isAllowed(u.email)) {
        signOut(auth);
        setUser(null);
        setError(`${u.email} is not authorized.`);
      } else {
        setUser(u);
        setError(null);
      }
      setLoading(false);
    });
  }, []);

  const signIn = async () => {
    setSigningIn(true);
    setError(null);
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      setError(e?.message || 'Sign-in failed.');
    } finally {
      setSigningIn(false);
    }
  };

  if (loading) {
    return (
      <div style={wrap}>
        <div style={card}>
          <p style={muted}>Loading…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={wrap}>
        <div style={card}>
          <h1 style={{ margin: 0, fontSize: 22 }}>Shorts Brain</h1>
          <p style={muted}>Sign in to continue</p>
          <button style={btn} onClick={signIn} disabled={signingIn}>
            {signingIn ? 'Signing in…' : 'Sign in with Google'}
          </button>
          {error && <p style={err}>{error}</p>}
        </div>
      </div>
    );
  }

  return React.Children.map(children, (child) =>
    React.isValidElement(child) ? React.cloneElement(child, { userEmail: user.email }) : child
  );
}
