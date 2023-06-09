import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Text from "../../components/Text";

const Login = () => {
  const activeUser = useSelector((state: any) => state.data);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeUser?.uid) {
      if (activeUser?.profileStatus === "pending") {
        navigate("/profile-update");
      }
    } else navigate("/login");
  }, [activeUser?.data, navigate]);

  return (
    <section className="h-screen flex-center flex-col">
      <div>
        <Text type={"h1"} children={activeUser?.displayName} />

        <p>Employee Id:{activeUser?.employeeId}</p>
      </div>
      <p>reporting Id:{activeUser?.reportingTo}</p>
    </section>
  );
};

export default Login;
