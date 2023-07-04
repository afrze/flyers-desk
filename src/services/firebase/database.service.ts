/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  onSnapshot,
  doc,
  updateDoc,
  addDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import firebaseConfig from "./config";
import { userProfileAsync } from "../../store/userSlice";
import { createTicketAsync } from "../../store/ticketSlice";

export function useProfileListener(uid: string) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (uid) {
      const unsub = onSnapshot(doc(firebaseConfig.db, "users", uid), (doc) => {
        dispatch(userProfileAsync(doc.data()));
      });
      return () => unsub();
    }
  }, [dispatch, uid]);
}

export async function updateProfile(uid: string, data: any) {
  try {
    const userProfileRef = doc(firebaseConfig.db, "users", uid);
    await updateDoc(userProfileRef, data);
  } catch (error) {
    return "Something went wrong";
  }
}

export async function createTicket(data: any) {
  await addDoc(collection(firebaseConfig.db, "tickets"), data);
}

export async function updateTicket(uid: string, data: any) {
  try {
    const userTicketRef = doc(firebaseConfig.db, "tickets", uid);

    await updateDoc(userTicketRef, data);
  } catch (error) {
    return "Something went wrong";
  }
}

export function useTicketListener(department: string, uid: string) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (uid) {
      if (department === "Infra") {
        const q = query(collection(firebaseConfig.db, "tickets"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const ticketArr: any = [];
          querySnapshot.forEach((doc) => {
            ticketArr.push({ ...doc.data(), id: doc?.id });
          });
          dispatch(createTicketAsync(ticketArr));
        });
        return () => unsubscribe();
      } else {
        const q = query(
          collection(firebaseConfig.db, "tickets"),
          where("employee_uid", "==", uid)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const ticketArr: any = [];
          querySnapshot.forEach((doc) => {
            ticketArr.push({ ...doc.data(), id: doc?.id });
          });
          dispatch(createTicketAsync(ticketArr));
        });
        return () => unsubscribe();
      }
    }
  }, [department, dispatch, uid]);
}
