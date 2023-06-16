import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const Login = () => {
  const activeUser = useSelector((state: any) => state.data);

  return (
    <section className="h-screen w-full flex">
      <div className="w-[20%]">
        <Navbar />
      </div>
      <div className="w-[85%]">
        <Header />
      </div>
    </section>
  );
};

export default Login;
