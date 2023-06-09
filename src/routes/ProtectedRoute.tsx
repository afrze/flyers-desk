import { useSelector } from "react-redux";
import ProfileUpdate from "../pages/ProfileUpdate";
import Login from "../pages/Login";

function ProtectedRoute({ children }: any) {
  const { uid, profileStatus } = useSelector((store: any) => store.data);
  console.log("protected route", uid, children);
  if (!uid) {
    return <Login />;
  } else if (uid && profileStatus !== "completed") {
    return <ProfileUpdate />;
  } else {
    return children;
  }
}
export default ProtectedRoute;
