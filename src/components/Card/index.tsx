import { Link } from "react-router-dom";
import { UserIcons } from "../../assets/icons";
import Text from "../Text";

const Card = () => {
  return (
    <>
      <div className="flex-center justify-between">
        <Text
          type="h4"
          className="text-[#2E2C34] font-semibold font-[Montserrat]"
          children="Ticket# 2023-CS123"
        />
        <Text
          type="h6"
          className="font-montserrat text-[#84818A]"
          children="Posted at 12:45 AM"
        />
      </div>
      <Text
        type="h5"
        className="text-[#2E2C34] font-montserrat pt-2"
        children="How to deposit money to my portal?"
      />
      <Text
        type="h6"
        className="font-montserrat text-[#84818A] py-4"
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div className="flex-center justify-between border-t pt-3">
        <div className="flex-center">
          <UserIcons className="mr-2 w-[28px] h-[28px]" />
          <Text
            type="h5"
            className="font-montserrat text-[#84818A]"
            children="John Snow"
          />
        </div>
        <div>
          <Link className="text-[#7F56D8]" to="/open-ticket">
            <Text type="h5" children="Open Ticket" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
