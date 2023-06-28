import { Link } from "react-router-dom";
import { DashboardIcon, TicketIcon } from "../../assets/icons";
import Text from "../Text";
import routes from "../../routes/routes";
import { useSelector } from "react-redux";

const DeskNavbar = () => {
  const { department } = useSelector((state: any) => state.user.data);
  return (
    <>
      {department === "Infra" ? (
        <div className="">
          <ul className="">
            <li className="flex items-center pt-4 whitespace-nowrap">
              <DashboardIcon className="mr-2" />
              <Text className="" children="Dashboard" />
            </li>
            <Link to={routes.purchase_request}>
              <li className="flex items-center pt-4 whitespace-nowrap">
                <TicketIcon className="mr-2" />
                <Text className="" children="Purchase Request" />
              </li>
            </Link>
            <Link to={routes.issues}>
              <li className="flex items-center pt-4 whitespace-nowrap">
                <TicketIcon className="mr-2" />
                <Text className="" children="Issues" />
              </li>
            </Link>
            <Link to={routes.all_tickets}>
              <li className="flex items-center pt-4 whitespace-nowrap">
                <TicketIcon className="mr-2" />
                <Text className=" md:block" children="All Tickets" />
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="">
          <ul className="">
            <li className="flex items-center pt-4 whitespace-nowrap">
              <DashboardIcon className="mr-2" />
              <Text className="" children="Dashboard" />
            </li>
            <Link to={routes.purchase_request}>
              <li className="flex items-center pt-4 whitespace-nowrap">
                <TicketIcon className="mr-2" />
                <Text className="" children="Purchase Request" />
              </li>
            </Link>
            <Link to={routes.issues}>
              <li className="flex items-center pt-4 whitespace-nowrap">
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
