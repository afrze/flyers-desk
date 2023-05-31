import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: import.meta.env.APP_API_KEY,
  authDomain: import.meta.env.APP_AUTH_DOMAIN,
  projectId: import.meta.env.APP_PROJECT_ID,
  storageBucket: import.meta.env.APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.APP_MESSAGING_SENDER,
  appId: import.meta.env.APP_APP_ID,
  measurementId: import.meta.env.APP_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);

const firebaseConfig = { auth };

export default firebaseConfig;
