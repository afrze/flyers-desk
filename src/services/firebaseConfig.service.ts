import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.APP_API_KEY,
  authDomain: import.meta.env.APP_AUTH_DOMAIN,
  projectId: import.meta.env.APP_PROJECT_ID,
  storageBucket: import.meta.env.APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.APP_MESSAGING_SENDER,
  appId: import.meta.env.APP_APP_ID,
  measurementId: import.meta.env.APP_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
