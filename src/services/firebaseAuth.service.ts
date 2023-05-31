import firebase from "./firebaseConfig.service";
import { OAuthProvider, signInWithPopup } from "firebase/auth";

const auth = firebase.auth;

export const loginWithMicrosoft = async () => {
  const provider = new OAuthProvider("microsoft.com");

  provider.setCustomParameters({
    promt: "consent",
    tenant: import.meta.env.APP_MICROSOFT_TENANT_ID,
  });

  try {
    const res = await signInWithPopup(auth, provider);
    console.log("from service", res);
    return res;
  } catch (error) {
    return error;
  }
};
