import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FlyerssoftLogo, MicrosoftLogo } from "../../assets";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { loginWithMicrosoftAsync } from "../../store/userSlice";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const clickHandler = () => {
    dispatch(loginWithMicrosoftAsync());
  };

  return (
    <section className="h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <FlyerssoftLogo />
        <Text className="">Welcome to Flyerssoft Help Desk</Text>
        <Button
          onClick={clickHandler}
          type="microsoft"
          prefix={<MicrosoftLogo width={50} height={50} />}
        >
          Login with Microsoft
        </Button>
      </div>
    </section>
  );
};

export default Login;
