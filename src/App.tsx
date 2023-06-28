import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProfileUpdate from "./pages/ProfileUpdate";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useSelector } from "react-redux";
import { useProfileListener } from "./services/firebase/database.service";
import PurchaseRequest from "./pages/PurchaseRequest";
import IssuesTickets from "./pages/Issues";
import OpenTicket from "./pages/OpenTicket";
import routes from "./routes/routes";

const App = () => {
  const activeUser = useSelector((state: any) => state.user.data);
  useProfileListener(activeUser?.uid);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          >
            <Route
              path={routes.purchase_request}
              element={<PurchaseRequest />}
            />
            <Route path={routes.issues} element={<IssuesTickets />} />
            <Route path={routes.open_ticket} element={<OpenTicket />} />
          </Route>
          <Route
            path={routes.profile_update}
            element={
              <ProtectedRoute>
                <ProfileUpdate />
              </ProtectedRoute>
            }
          />
          <Route path={routes.login} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
