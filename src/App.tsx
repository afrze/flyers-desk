import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProfileUpdate from "./pages/ProfileUpdate";
import ProtectedRoute from "./routes/ProtectedRoute";
import { doc, onSnapshot } from "firebase/firestore";
import firebaseConfig from "./services/firebaseConfig.service";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAsync } from "./store/userSlice";

const App = () => {
  const activeUser = useSelector((state: any) => state.data);
  const dispatch = useDispatch();

  // const unsub = onSnapshot(
  //   doc(firebaseConfig.db, "users", activeUser.uid),
  //   (doc) => {
  //     userProfileAsync(doc.data());
  //     console.log("Current data: ", doc.data());
  //   }
  // );

  useEffect(() => {
    if (activeUser.uid) {
      const unsub = onSnapshot(
        doc(firebaseConfig.db, "users", activeUser.uid),
        (doc) => {
          dispatch(userProfileAsync(doc.data()));
          console.log("Current data: ", doc.data());
        }
      );
    }
    // unsub();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
        <Route path="/profile-update" element={<ProfileUpdate />} />
        {/* <Route path="/" element={<DashBoard />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
