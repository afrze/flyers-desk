import { useDispatch, useSelector } from "react-redux";
import Text from "../Text";
// import { NotifyIcon, UserIcon } from "../../assets/icons";
import Button from "../Button";
import { logoutAsync } from "../../store/userSlice";

const Header = () => {
  const { displayName } = useSelector((store: any) => store?.data);
  const dispatch = useDispatch();
  return (
    <div className="shadow-3xl py-4 px-5">
      <div className="flex-between">
        <Text type="h1" children={`Welcome! ${displayName}`} />
        <div className="flex items-center">
          {/* <NotifyIcon className="mr-2" /> */}
          <div className="flex items-center">
            {/* <UserIcon className="mr-2" /> */}
            <Text type="h2" children={displayName} />
          </div>
          <Button onClick={() => dispatch(logoutAsync())}>Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
