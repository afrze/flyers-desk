import { Link, useLocation } from "react-router-dom";
import { FlyersLogo } from "../../assets";
import { DashboardIcon, MobileLogo, TicketIcon } from "../../assets/icons";
import Text from "../Text";
import Button from "../Button";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../store/toggleSlice";
import DeskNavbar from "../DeskNavbar";
import routes from "../../routes/routes";

const Navbar = () => {
  const { isOpen } = useSelector((store: any) => store?.toggle);
  const { department } = useSelector((state: any) => state.user.data);
  const location = useLocation();

  const dispatch = useDispatch();
  return (
    <nav className="md:block">
      <div className="flex-center justify-center">
        <FlyersLogo className="hidden md:block w-[60%]" />
        <Button>
          <MobileLogo className="w-[45px] h-auto md:hidden " />
        </Button>
      </div>
      <div>
        {isOpen && (
          <div
            className={
              isOpen
                ? "mobile-nav-container pt-3"
                : "pt-3 md:mobile-nav-container md:hidden block"
            }
          >
            {department === "Infra" ? (
              <>
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
                    <Link
                      className="hover:text-purple-400"
                      to={routes.purchase_request}
                    >
                      <li
                        className={`flex items-center pt-4 whitespace-nowrap hover:text-purple-600 ${
                          location.pathname === routes.purchase_request
                            ? " text-purple-600 "
                            : " text-black "
                        }`}
                      >
                        <TicketIcon className="mr-2" />
                        <Text
                          className=" md:block"
                          children="Purchase Request"
                        />
                      </li>
                    </Link>
                    <Link className="hover:text-purple-400" to={routes.issues}>
                      <li
                        className={`flex items-center pt-4 whitespace-nowrap hover:text-purple-600 ${
                          location.pathname === routes.issues
                            ? " text-purple-600 "
                            : " text-black "
                        }`}
                      >
                        <TicketIcon className="mr-2" />
                        <Text className=" md:block" children="Issues" />
                      </li>
                    </Link>
                    <Link
                      className="hover:text-purple-400"
                      to={routes.all_tickets}
                    >
                      <li
                        className={`flex items-center pt-4 whitespace-nowrap hover:text-purple-600 ${
                          location.pathname === routes.all_tickets
                            ? " text-purple-600 "
                            : " text-black "
                        }`}
                      >
                        <TicketIcon className="mr-2" />
                        <Text className=" md:block" children="All Tickets" />
                      </li>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <>
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
                    <div className=" active:text-red-500 active:bg-slate-600">
                      <Link
                        className="hover:text-purple-400"
                        to={routes.purchase_request}
                      >
                        <li
                          className={`flex items-center pt-4 whitespace-nowrap hover:text-purple-600 ${
                            location.pathname === routes.purchase_request
                              ? " text-purple-600 "
                              : " text-black "
                          }`}
                        >
                          <TicketIcon className="mr-2" />
                          <Text
                            className="md:block"
                            children="Purchase Request"
                          />
                        </li>
                      </Link>
                    </div>
                    <Link className="hover:text-purple-400" to={routes.issues}>
                      <li
                        className={`flex items-center pt-4 whitespace-nowrap hover:text-purple-600 ${
                          location.pathname === routes.issues
                            ? " text-purple-600 "
                            : " text-black "
                        }`}
                      >
                        <TicketIcon className="mr-2" />
                        <Text className=" md:block" children="Issues" />
                      </li>
                    </Link>
                  </ul>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      <DeskNavbar />
    </nav>
  );
};

export default Navbar;
