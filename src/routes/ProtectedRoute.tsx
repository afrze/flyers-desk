import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProfileUpdate from "../pages/ProfileUpdate";
import Login from "../pages/Login";
import routes from "./routes";

const ProtectedRoute = ({ children }: { children: any }) => {
  const user = useSelector((state: any) => state.user.data);
  const location = useLocation();
  if (!user?.uid) {
    return <Login />;
  } else if (
    user?.uid &&
    user?.profileStatus !== "completed" &&
    location.pathname !== routes.profile_update
  ) {
    return <ProfileUpdate />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
