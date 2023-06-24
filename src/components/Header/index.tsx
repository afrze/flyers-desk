import { useDispatch, useSelector } from "react-redux";
import Text from "../Text";
import { HamburgerIcon, UserIcons } from "../../assets/icons";
import Button from "../Button";
import { logoutAsync } from "../../store/userSlice";
import Navbar from "../Navbar";
import { toggleSideBar } from "../../store/toggleSlice";

const Header = () => {
  const { displayName } = useSelector((store: any) => store?.user.data);
  const { isOpen } = useSelector((store: any) => store?.toggle);
  const dispatch = useDispatch();

  const toggleBtn = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className="shadow-3xl py-4 px-5">
      <div className="flex-center justify-between">
        <Button onClick={toggleBtn}>
          <HamburgerIcon className="w-[30px] h-auto md:hidden" />
        </Button>
        {isOpen && <Navbar />}

        {/* <Text
          className="hidden md:block whitespace-nowrap"
          type="h1"
          children={`Welcome! ${displayName}`}
        /> */}
        <div className="flex items-center">
          {/* <NotifyIcon className="mr-2" /> */}
          <div className="flex items-center">
            <UserIcons className="mr-2" />
            <Text
              className="whitespace-nowrap hidden"
              type="h2"
              children={displayName}
            />
          </div>
          <Button onClick={() => dispatch(logoutAsync())}>Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
