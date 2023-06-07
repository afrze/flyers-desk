import { useEffect } from "react";
import { useSelector } from "react-redux";
// import Text from "../../components/Text";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const activeUser = useSelector((state: any) => state.data);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeUser?.uid) {
      if (activeUser?.profileStatus === "pending") {
        navigate("/profileupdate");
      }
    } else navigate("/login");
  }, [activeUser?.data, navigate]);

  return (
    <section className="h-screen flex justify-center">
      <p>Dashboard {activeUser?.displayName}</p>
    </section>
  );
};

export default Login;
