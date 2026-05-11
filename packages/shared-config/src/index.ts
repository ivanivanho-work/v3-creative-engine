export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8',
  authDomain: 'v3-creative-engine.firebaseapp.com',
  projectId: 'v3-creative-engine',
  storageBucket: 'v3-creative-engine.firebasestorage.app',
  messagingSenderId: '964100659393',
  appId: '1:964100659393:web:bc6aa41fce9a8770d55c40',
};

export const ALLOWED_DOMAINS = ['@google.com'];
export const OWNER_EMAILS = ['ivanho.wz@gmail.com'];

export function isAllowed(email: string | null | undefined): boolean {
  if (!email) return false;
  if (OWNER_EMAILS.includes(email)) return true;
  return ALLOWED_DOMAINS.some((domain) => email.endsWith(domain));
}
