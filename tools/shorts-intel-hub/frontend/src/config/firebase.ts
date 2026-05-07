/**
 * Firebase Configuration
 * Used for authentication and cloud services
 *
 * NOTE: Firebase web API keys are safe to commit — they identify the project
 * but are not secret credentials. Access is controlled by Firestore/Storage
 * Security Rules and Firebase Authentication settings.
 * See: https://firebase.google.com/docs/projects/api-keys
 */

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8",
  authDomain: "v3-creative-engine.firebaseapp.com",
  projectId: "v3-creative-engine",
  storageBucket: "v3-creative-engine.firebasestorage.app",
  messagingSenderId: "964100659393",
  appId: "1:964100659393:web:bc6aa41fce9a8770d55c40"
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

if (import.meta.env.DEV) {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
}

export default firebaseConfig;
