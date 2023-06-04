import Cookies from "universal-cookie";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { logout } from "../../services/firebaseAuth.service";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    logout();
  };

  const cookies = new Cookies();
  const accessToken = cookies.get("user_access_token");
  const profileStatus = cookies.get("profile_status");

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }

    if (profileStatus === "pending") {
      navigate("/profile-update");
    }
  }, [accessToken, profileStatus, navigate]);

  return (
    <div>
      <Text type="h1">Dashboard</Text>
      <Button onClick={clickHandler}>Logout</Button>
    </div>
  );
};

export default Dashboard;
