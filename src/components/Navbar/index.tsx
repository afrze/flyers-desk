// import { DashboardIcon, FlyersLogo, TicketIcon } from "../../assets/icons";

const Navbar = () => {
  return (
    <nav>
      {/* <FlyersLogo /> */}
      <div className="py-3">
        <ul>
          <li className="flex items-center py-4">
            {/* <DashboardIcon className="mr-2" /> */}
            Dashboard
          </li>
          <li className="flex items-center">
            {/* <TicketIcon className="mr-2" /> */}
            Ticket
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
