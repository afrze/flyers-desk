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
import { userProfileAsync } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import firebaseConfig from "./config";
import { TicketInterface } from "../../interface/ticket.interface";
import { createTicketAsync } from "../../store/ticketSlice";

export function useProfileListener(uid: string) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (uid) {
      const unsub = onSnapshot(doc(firebaseConfig.db, "users", uid), (doc) => {
        dispatch(userProfileAsync(doc.data()));
      });
      console.log(unsub);
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

export async function createTicket(data: TicketInterface) {
  await addDoc(collection(firebaseConfig.db, "tickets"), data);
}

export function useTicketListener(department: string, uid: string) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (department === "Infra") {
      const q = query(collection(firebaseConfig.db, "tickets"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const ticketArr: any = [];
        querySnapshot.forEach((doc) => {
          ticketArr.push({ ...doc.data() });
        });
        dispatch(createTicketAsync(ticketArr));
      });
      return () => unsubscribe();
    } else {
      const q = query(
        collection(firebaseConfig.db, "tickets"),
        where("created_by.uid", "==", uid)
      );
      console.log("q", q, uid, department);
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const ticketArr: any = [];
        querySnapshot.forEach((doc) => {
          console.log("doc", doc);
          ticketArr.push({ ...doc.data() });
        });
        dispatch(createTicketAsync(ticketArr));
      });
      return () => unsubscribe();
    }
  }, []);
}
