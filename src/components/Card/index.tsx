import { Link } from "react-router-dom";
import { UserIcons } from "../../assets/icons";
import Text from "../Text";

const Card = ({ displayTicket }: any) => {
  console.log("displayTicket card", displayTicket);
  return (
    <div>
      <div className="flex-center justify-between">
        <Text
          type="h4"
          className="text-[#2E2C34] font-semibold font-[Montserrat]"
          children="CS123"
        />
        <Text
          type="h6"
          className="whitespace-nowrap font-montserrat text-[#84818A]"
          children={`Posted at ${new Date(
            displayTicket?.created_at.seconds
          ).toLocaleDateString()}`}
        />
      </div>
      <Text
        type="h5"
        className="capitalize text-[#2E2C34] font-montserrat pt-2"
        children={displayTicket?.title}
      />
      <Text
        type="h6"
        className="font-montserrat text-[#84818A] py-4"
        children={displayTicket?.description}
      />
      <div className="flex-center justify-between border-t pt-3">
        <div className="flex-center">
          <UserIcons className="mr-2 w-[28px] h-[28px]" />
          <Text
            type="h5"
            className="font-montserrat text-[#84818A]"
            children={displayTicket?.created_by?.name}
          />
        </div>
        <div>
          <Link className="text-[#7F56D8]" to="/open-ticket">
            <Text type="h5" children="Open Ticket" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
