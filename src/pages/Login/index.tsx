import { FlyerssoftLogo, MicrosoftLogo } from "../../assets";
import Button from "../../components/Button";
import Text from "../../components/Text";
// import { loginWithMicrosoft } from "../../services/firebaseAuth.service";
import { useUserApi } from "../../store/userSlice/userQuery";

const Login = () => {
  
  const [trigger, { data, error, loading }] = useUserApi()

  const clickHandler = async () => {
    // const result = await loginWithMicrosoft()
    // console.log("from page", result);
    trigger()
  }

  console.log(data);
  console.log(error);
  console.log(loading);

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
