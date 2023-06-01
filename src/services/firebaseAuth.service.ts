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
    const res: any = await signInWithPopup(auth, provider);
    const userResults = {
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName,
      acessToken: res?.user?.stsTokenManager?.accessToken,
      refreshToken: res?.user?.stsTokenManager?.refreshToken,
      expirationTime: res?.user?.stsTokenManager?.expirationTime,
    }
    return userResults;
  } catch (error) {
    return error;
  }
};