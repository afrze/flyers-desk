import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Text from "../../components/Text";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const navigate = useNavigate();
  const activeUser = useSelector((state: any) => state.user);

  useEffect(() => {
    if (!activeUser.data.acessToken) {
      navigate("/login");
    }
  }, [activeUser.data.acessToken, navigate]);

  return (
    <div>
      <Text type="h1">Dashboard</Text>
    </div>
  );
};

export default DashBoard;
