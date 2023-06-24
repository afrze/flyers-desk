import { Link } from "react-router-dom";
import { DashboardIcon, TicketIcon } from "../../assets/icons";
import Text from "../Text";
import { FlyersLogo } from "../../assets";

const DeskNavbar = () => {
  return (
    <nav>
      <div className="flex-center justify-center">
        <FlyersLogo className="hidden md:block w-[60%]" />
      </div>
      <div className="mobile-nav md:mobile-nav md:hidden">
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
    </nav>
  );
};

export default DeskNavbar;
