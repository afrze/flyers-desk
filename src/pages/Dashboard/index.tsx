import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const Login = () => {
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
