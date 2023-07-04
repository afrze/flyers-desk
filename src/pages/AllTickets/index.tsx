import { useState } from "react";
import { useSelector } from "react-redux";
import { SearchIcon } from "../../assets/icons";
import Card from "../../components/Card";
import Text from "../../components/Text";
import CreateTicket from "../../components/CreateTicket";
import Input from "../../components/Input";
import { useTicketListener } from "../../services/firebase/database.service";

const ALLTickets = () => {
  const displayTickets = useSelector((state: any) => state.ticket.tickets);
  const { department, uid } = useSelector((state: any) => state?.user?.data);
  const [ticketOpen, setTicketOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  useTicketListener(department, uid);

  const toggleState = () => {
    setTicketOpen(!ticketOpen);
  };

  const searchFilterHandler = (e: any) => {
    setSearchFilter(e?.target?.value);
  };

  return (
    <div className="py-3 px-5 h-full overflow-scroll bg-[#f5f5f5]">
      <div className="flex-center justify-between py-3">
        <Text type="h2" children="All Tickets" />
        {/* <div
          className="flex-center bg-[#7F56D8] rounded py-1 px-4"
          onClick={toggleState}
        >
          <MessageIcon />
          <Button className="border-none text-white">
            <Text type="h4" children="New Ticket" />
          </Button>
        </div> */}
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
          <div
            className={`w-full md:w-1/2  flex items-center border py-2 px-4 rounded`}
          >
            <SearchIcon className="mr-2" />
            <Input
              className="w-full outline-none"
              placeholder="search"
              onChange={searchFilterHandler}
            />
          </div>
          <div className="overflow-scroll">
            {displayTickets
              ?.filter((item: any) => {
                return searchFilter.toLowerCase() === ""
                  ? item
                  : item.created_by.name.toLowerCase().includes(searchFilter) ||
                      item?.title.toLowerCase().includes(searchFilter);
              })
              ?.map((displayTicket: any, id: any) => (
                <div key={id} className="border rounded px-5 py-4 my-3">
                  <Card displayTicket={displayTicket} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ALLTickets;
