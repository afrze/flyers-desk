import { onSnapshot, doc } from "firebase/firestore";
import { useEffect } from "react";
import { userProfileAsync } from "../../store/userSlice";
import firebaseConfig from "../firebaseConfig.service";
import { useDispatch } from "react-redux";

export function userProfileListener(uid: string) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (uid) {
      const unsub = onSnapshot(doc(firebaseConfig.db, "users", uid), (doc) => {
        dispatch(userProfileAsync(doc.data()));
        console.log("Current data: ", doc.data()?.profileStatus);
      });
      console.log(unsub);
    }
  }, [uid]);
}
