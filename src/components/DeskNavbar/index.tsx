import { Link, useLocation } from "react-router-dom";
import { DashboardIcon, TicketIcon } from "../../assets/icons";
import Text from "../Text";
import routes from "../../routes/routes";
import { useSelector } from "react-redux";

const DeskNavbar = () => {
  const location = useLocation();
  const { department } = useSelector((state: any) => state.user.data);

  return (
    <>
      {department === "Infra" ? (
        <div className="">
          <ul className="">
            <Link className="cursor-not-allowed" to={routes.dashboard}>
              <li className="flex items-center pt-4 whitespace-nowrap">
                <DashboardIcon className="mr-2" />
                <Text className="" children="Dashboard" />
              </li>
            </Link>
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
                <Text className="" children="Purchase Request" />
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
                <Text className="" children="Issues" />
              </li>
            </Link>
            <Link className="hover:text-purple-400" to={routes.all_tickets}>
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
      ) : (
        <div className="">
          <ul className="">
            <Link className="cursor-not-allowed" to={routes.dashboard}>
              <li
                className={`flex items-center pt-4 whitespace-nowrap hover:text-purple-600 ${
                  location.pathname === routes.dashboard
                    ? " text-purple-600 "
                    : " text-black "
                }`}
              >
                <DashboardIcon className="mr-2" />
                <Text className="" children="Dashboard" />
              </li>
            </Link>
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
                <Text className="" children="Purchase Request" />
              </li>
            </Link>
            <Link to={routes.issues}>
              <li
                className={`flex items-center pt-4 whitespace-nowrap hover:text-purple-600 ${
                  location.pathname === routes.issues
                    ? " text-purple-600 "
                    : " text-black "
                }`}
              >
                <TicketIcon className="mr-2" />
                <Text className="" children="Issues" />
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default DeskNavbar;
