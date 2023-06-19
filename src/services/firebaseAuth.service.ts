import { doc, getDoc, setDoc } from "firebase/firestore";
import firebase from "./firebaseConfig.service";
import {
  OAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = firebase.auth;
const db = firebase.db;

export const loginWithMicrosoft = async () => {
  const provider = new OAuthProvider("microsoft.com");

  provider.setCustomParameters({
    promt: "consent",
    tenant: import.meta.env.APP_MICROSOFT_TENANT_ID,
  });

  try {
    const res: any = await signInWithPopup(auth, provider);
    const userDocRef = doc(db, "users", res.user.uid);
    const userDocSnap = await getDoc(userDocRef);
    const userResults = {
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName,
      acessToken: res?.user?.stsTokenManager?.accessToken,
      refreshToken: res?.user?.stsTokenManager?.refreshToken,
      expirationTime: res?.user?.stsTokenManager?.expirationTime,
      profileStatus: "pending",
      employeeId: "",
      reportingTo: "",
      phoneNumber: "",
    };

    if (!userDocSnap.exists()) {
      await setDoc(doc(db, "users", res.user.uid), userResults);
      return userResults;
    } else {
      return userDocSnap?.data();
    }
  } catch (error) {
    return error;
  }
};

export const logoutProfile = async () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};
