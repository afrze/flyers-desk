import { useState } from "react";
import { MessageIcon } from "../../assets/icons";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Search from "../../components/Search";
import Text from "../../components/Text";
import CreateTicket from "../../components/CreateTicket";

const PurchaseRequest = () => {
  const [ticketOpen, setTicketOpen] = useState(false);
  return (
    <div className="py-3 px-5 h-full overflow-hidden bg-[#f5f5f5]">
      <div className="flex-center justify-between py-3">
        <Text type="h2" children="Tickets" />
        <div
          className="flex-center bg-[#7F56D8] rounded py-1 px-4"
          onClick={() => setTicketOpen(!ticketOpen)}
        >
          <MessageIcon />
          <Button className="border-none text-white">
            <Text type="h4" children="New Ticket" />
          </Button>
        </div>
      </div>
      {ticketOpen && (
        <div>
          <CreateTicket />
        </div>
      )}
      <div className="flex gap-3 h-full">
        <div className="border rounded border-[#ffffff] flex flex-col gap-3 py-4 px-6 bg-white flex-grow">
          <Search className="w-full md:w-1/2 " />
          <div className="overflow-scroll">
            <div className="border rounded px-5 py-4 my-3">
              <Card />
            </div>
            <div className="border rounded px-5 py-4 my-3">
              <Card />
            </div>
            <div className="border rounded px-5 py-4 my-3">
              <Card />
            </div>
            <div className="border rounded px-5 py-4 my-3">
              <Card />
            </div>
            <div className="border rounded px-5 py-4 my-3">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseRequest;
