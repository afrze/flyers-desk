import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlyerssoftLogo, MicrosoftLogo } from "../../assets";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { loginWithMicrosoftAsync } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state: any) => state.data);
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(loginWithMicrosoftAsync());
  };

  useEffect(() => {
    console.log("activeUser?.data?.profileStatus", activeUser);
    if (activeUser?.profileStatus === "pending") {
      navigate("/profileupdate");
    } else if (activeUser?.profileStatus === "completed") {
      navigate("/");
    }
    // const user = JSON.parse(localStorage.getItem("user") || "{}");
    // const profile_status = localStorage.getItem("profile_status");
    // console.log("checking", user.profileStatus);
    // if (user && profile_status === "pending") {
    //   navigate("/profileupdate");
    // }
    // else {
    //   console.log("COMMMING");
    //   navigate("/");
    // }
  }, [activeUser?.profileStatus, navigate]);

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
