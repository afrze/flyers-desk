import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProfileUpdate from "./pages/ProfileUpdate";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useSelector } from "react-redux";
import { userProfileListener } from "./services/firebase/database.service";

const App = () => {
  const activeUser = useSelector((state: any) => state.data);
  userProfileListener(activeUser?.uid);

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
        <Route
          path="/profile-update"
          element={
            <ProtectedRoute>
              <ProfileUpdate />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
function unsub() {
  throw new Error("Function not implemented.");
}
