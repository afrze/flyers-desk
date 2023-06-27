import { doc, getDoc, setDoc } from "firebase/firestore";
import firebase from "./config";
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
    const user = res.user;
    const userResults = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      acessToken: user?.stsTokenManager?.accessToken,
      refreshToken: user?.stsTokenManager?.refreshToken,
      expirationTime: user?.stsTokenManager?.expirationTime,
      // ...res?.user,
      profileStatus: "pending",
      employeeId: "",
      reportingTo: "",
      phoneNumber: "",
      department: "",
    };

    console.log("object22", userResults);
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
  signOut(auth).catch((error) => {
    console.log(error);
  });
};
