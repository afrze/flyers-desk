import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlyerssoftLogo, MicrosoftLogo } from "../../assets/icons";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { loginWithMicrosoftAsync } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";

const Login = () => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state: any) => state.user.data);
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(loginWithMicrosoftAsync());
  };

  useEffect(() => {
    if (activeUser?.profileStatus === "pending") {
      navigate(routes.profile_update);
    } else if (activeUser?.profileStatus === "completed") {
      navigate("/");
    }
  }, [activeUser?.profileStatus, navigate, activeUser]);

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
