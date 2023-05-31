import { FlyerssoftLogo, MicrosoftLogo } from "../../assets";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { loginWithMicrosoft } from "../../services/firebaseAuth.service";

const Login = () => {

  const clickHandler = async () => {
    const result = await loginWithMicrosoft()
    console.log("from page", result);
  }

  return (
    <section className="h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <FlyerssoftLogo />
        <Text className="">Welcome to Flyerssoft Help Desk</Text>
        <Button onClick={clickHandler} type="microsoft" prefix={<MicrosoftLogo width={50} height={50}/>}>Login with Microsoft</Button>
      </div>
    </section>
  );
};

export default Login;
