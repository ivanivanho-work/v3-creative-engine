import React, { useEffect, useState, type ReactNode } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import { isAllowed } from '@v3/shared-config';

interface AuthGateProps {
  children: ReactNode;
  appName?: string;
}

export default function AuthGate({ children, appName = 'App' }: AuthGateProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u && !isAllowed(u.email)) {
        setError(`${u.email} is not authorized to access this app.`);
        signOut(auth);
        setUser(null);
      } else {
        setUser(u);
        setError(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleSignIn = async () => {
    setSigningIn(true);
    setError(null);
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Sign-in failed.';
      setError(message);
    } finally {
      setSigningIn(false);
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.spinner} />
      </div>
    );
  }

  if (!user) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>{appName}</h1>
          <p style={styles.subtitle}>Sign in to continue</p>
          {error && <p style={styles.error}>{error}</p>}
          <button onClick={handleSignIn} disabled={signingIn} style={styles.button}>
            {signingIn ? 'Signing in...' : 'Sign in with Google'}
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0a0a0a',
  },
  spinner: {
    width: 40,
    height: 40,
    border: '3px solid #333',
    borderTopColor: '#ef4444',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  card: {
    background: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: 12,
    padding: '2rem',
    textAlign: 'center' as const,
    maxWidth: 360,
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#888',
    fontSize: '0.9rem',
    marginBottom: '1.5rem',
  },
  error: {
    color: '#ef4444',
    fontSize: '0.85rem',
    marginBottom: '1rem',
  },
  button: {
    background: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    padding: '0.75rem 1.5rem',
    fontSize: '0.95rem',
    cursor: 'pointer',
    width: '100%',
  },
};
