import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// DEV: log env vars to confirm Vite exposes them to the client.
// This is safe for local development only — remove before committing to public repos.
/* eslint-disable no-console */
console.log("Firebase env vars:", {
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  apiKeyDefined: Boolean(import.meta.env.VITE_FIREBASE_API_KEY),
});
if (
  !import.meta.env.VITE_FIREBASE_API_KEY ||
  !import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
) {
  console.warn(
    "Some VITE_FIREBASE_* env vars are missing or undefined. Check .env.local and restart Vite.",
  );
}
/* eslint-enable no-console */

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
