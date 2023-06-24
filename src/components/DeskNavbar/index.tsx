import { Link } from "react-router-dom";
import { DashboardIcon, TicketIcon } from "../../assets/icons";
import Text from "../Text";

const DeskNavbar = () => {
  return (
    <>
      <div className="">
        <ul className="">
          <li className="flex items-center pt-4 whitespace-nowrap">
            <DashboardIcon className="mr-2" />
            <Text className="" children="Dashboard" />
          </li>
          <Link to="/purchase-request">
            <li className="flex items-center pt-4 whitespace-nowrap">
              <TicketIcon className="mr-2" />
              <Text className="" children="Purchase Request" />
            </li>
          </Link>
          <Link to="/issues">
            <li className="flex items-center pt-4 whitespace-nowrap">
              <TicketIcon className="mr-2" />
              <Text className="" children="Issues" />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default DeskNavbar;
