import { Link } from "react-router-dom";
import Text from "../../components/Text";
import { FlyerssoftLogo } from "../../assets/icons";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-2 items-center">
        <FlyerssoftLogo />
        <Text className="mb-2" type="h1">
          Oops Page Not Found
        </Text>
        <span>
          <Text type="h3" className="inline">
            Please go back to
          </Text>{" "}
          <Link
            className="text-blue-500 text-xl hover:font-medium hover:transition-all"
            to="/"
          >
            Home
          </Link>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
