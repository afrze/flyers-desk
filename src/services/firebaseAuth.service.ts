import { doc, getDoc, setDoc } from "firebase/firestore";
import firebase from "./firebaseConfig.service";
import { OAuthProvider, signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const auth = firebase.auth;
const db = firebase.db;
const cookies = new Cookies();

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

    cookies.set("user_access_token", userResults.acessToken);
    cookies.set("profile_status", userResults.profileStatus);

    if (!userDocSnap.exists()) {
      await setDoc(doc(db, "users", res.user.uid), userResults);
    } else {
      return userDocSnap.data();
    }

    return userResults;
  } catch (error) {
    return error;
  }
};

export const logout = () => {
  cookies.remove("user_access_token");
  cookies.remove("profile_status");
  return auth.signOut();
};
