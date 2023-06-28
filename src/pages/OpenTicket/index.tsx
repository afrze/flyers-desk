import { useSelector } from "react-redux";
import Text from "../../components/Text";

const OpenTicket = () => {
  const displayTicket = useSelector((state: any) => state?.ticket?.tickets);
  console.log("object", displayTicket);
  return (
    <div>
      <Text type="h2" children="Ticket Details" />
      <div className="py-3">
        <label>
          <Text type="h4" children="Employee Name :" />
        </label>
        <Text type="h5" children={displayTicket?.created_by?.name} />
      </div>
    </div>
  );
};

export default OpenTicket;
