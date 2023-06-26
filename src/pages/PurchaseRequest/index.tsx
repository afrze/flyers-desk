import { useState } from "react";
import { MessageIcon } from "../../assets/icons";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Search from "../../components/Search";
import Text from "../../components/Text";
import CreateTicket from "../../components/CreateTicket";
import { useSelector } from "react-redux";

const PurchaseRequest = () => {
  const displayTickets = useSelector((state: any) => state.ticket.tickets);
  console.log("ticketname", displayTickets);
  const [ticketOpen, setTicketOpen] = useState(false);

  const toggleState = () => {
    setTicketOpen(!ticketOpen);
  };

  return (
    <div className="py-3 px-5 h-full overflow-scroll bg-[#f5f5f5]">
      <div className="flex-center justify-between py-3">
        <Text type="h2" children="Tickets" />
        <div
          className="flex-center bg-[#7F56D8] rounded py-1 px-4"
          onClick={toggleState}
        >
          <MessageIcon />
          <Button className="border-none text-white">
            <Text type="h4" children="New Ticket" />
          </Button>
        </div>
      </div>
      <div
        className={
          ticketOpen
            ? "new-ticket-outer w-full flex justify-center items-center"
            : ""
        }
      >
        {ticketOpen && (
          <div
            className={
              ticketOpen
                ? "new-ticket-container w-[calc(100%-20px)] md:w-1/2"
                : ""
            }
          >
            <CreateTicket toggleState={toggleState} />
          </div>
        )}
      </div>
      <div className="flex gap-3 h-full">
        <div className="border rounded border-[#ffffff] flex flex-col gap-3 py-4 px-6 bg-white flex-grow">
          <Search className="w-full md:w-1/2 " />
          <div className="overflow-scroll">
            {displayTickets.map((displayTicket: any) => (
              <div
                key={displayTicket?.id}
                className="border rounded px-5 py-4 my-3"
              >
                <Card displayTicket={displayTicket} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseRequest;
