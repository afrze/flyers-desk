import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProfileUpdate from "../pages/ProfileUpdate";
import Login from "../pages/Login";

const ProtectedRoute = ({ children }: { children: any }) => {
  const user = useSelector((state: any) => state.data);
  let location = useLocation();
  const profileUpdateRoute = "/profile-update";
  if (!user?.uid) {
    console.log("check route login");
    return <Login />;
  } else if (
    user?.uid &&
    user?.profileStatus !== "completed" &&
    location.pathname !== profileUpdateRoute
  ) {
    console.log("check route profile update", location.pathname);
    return <ProfileUpdate />;
  } else {
    console.log("check route children");
    return children;
  }
};

export default ProtectedRoute;