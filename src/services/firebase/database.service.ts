import {
  onSnapshot,
  doc,
  updateDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { useEffect } from "react";
import { userProfileAsync } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import firebaseConfig from "./config";
import { TicketInterface } from "../../interface/ticket.interface";

export function useProfileListener(uid: string) {
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

export async function updateProfile(uid: string, data: any) {
  try {
    const userProfileRef = doc(firebaseConfig.db, "users", uid);
    await updateDoc(userProfileRef, data);
  } catch (error) {
    return "Something went wrong";
  }
}

export async function createTicket(data: TicketInterface) {
  await addDoc(collection(firebaseConfig.db, "tickets"), data);
}
