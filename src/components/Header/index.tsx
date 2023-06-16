import { useSelector } from "react-redux";
import Text from "../Text";
import { NotifyIcon, UserIcon } from "../../assets/icons";

const Header = () => {
  const { displayName } = useSelector((store: any) => store?.data);
  return (
    <div className="shadow-3xl py-4 px-5">
      <div className="flex-between">
        <Text type="h1" children={`Welcome! ${displayName}`} />
        <div className="flex items-center">
          <NotifyIcon className="mr-2" />
          <div className="flex items-center">
            <UserIcon className="mr-2" />
            <Text type="h2" children={displayName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
