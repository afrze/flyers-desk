import { Link } from "react-router-dom";
import { FlyersLogo } from "../../assets";
import { DashboardIcon, MobileLogo, TicketIcon } from "../../assets/icons";
import Text from "../Text";
import Button from "../Button";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../store/toggleSlice";

const Navbar = () => {
  const { isOpen } = useSelector((store: any) => store?.toggle);
  const dispatch = useDispatch();
  return (
    <nav className="md:block">
      <div className="flex-center justify-center">
        <FlyersLogo className="hidden md:block w-[60%]" />
        <Button>
          <MobileLogo className="w-[45px] h-auto md:hidden " />
        </Button>
      </div>

      <div
        className={
          isOpen
            ? "mobile-nav-container pt-3"
            : "pt-3 md:mobile-nav-container md:hidden"
        }
      >
        <div className="md:hidden">
          <Button onClick={() => dispatch(toggleSideBar())}>
            <FaTimes />
          </Button>
        </div>
        <div
          className="mobile-nav md:mobile-nav md:hidden"
          onClick={() => dispatch(toggleSideBar())}
        >
          <ul className="md:block">
            <li className="flex items-center pt-4 whitespace-nowrap">
              <DashboardIcon className="mr-2" />
              <Text className=" md:block" children="Dashboard" />
            </li>
            <Link to="/purchase-request">
              <li className="flex items-center pt-4 whitespace-nowrap">
                <TicketIcon className="mr-2" />
                <Text className=" md:block" children="Purchase Request" />
              </li>
            </Link>
            <Link to="/issues">
              <li className="flex items-center pt-4 whitespace-nowrap">
                <TicketIcon className="mr-2" />
                <Text className=" md:block" children="Issues" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
