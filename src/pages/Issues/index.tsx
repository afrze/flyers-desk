/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MessageIcon, SearchIcon } from "../../assets/icons";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Text from "../../components/Text";
import CreateTicket from "../../components/CreateTicket";
import { useSelector } from "react-redux";
import {
  createTicket,
  useTicketListener,
} from "../../services/firebase/database.service";
import Input from "../../components/Input";

const Issues = () => {
  const displayTickets = useSelector((state: any) => state?.ticket?.tickets);
  const { department, uid, displayName, employeeId, reportingTo } = useSelector(
    (state: any) => state.user.data
  );
  const [ticketOpen, setTicketOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [values, setValues] = useState<any | null>({
    description: "",
    priority: "high",
    requestType: "",
    title: "",
  });
  useTicketListener(department, uid);

  const changeHandler = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const CreateTicketHandler = () => {
    createTicket({
      employee_name: displayName,
      employee_id: employeeId,
      employee_uid: uid,
      report_to: reportingTo,
      department: department,
      title: values?.title,
      description: values?.description,
      type: values?.requestType,
      assignee_id: "",
      status: "pending",
      created_at: new Date(),
      resolved_at: null,
      attachments: ["manoj"],
    });
    setValues("");
    toggleState();
  };

  const toggleState = () => {
    setTicketOpen(!ticketOpen);
  };

  console.log("coming....");

  return (
    <div className="py-3 px-5 h-full overflow-scroll bg-[#f5f5f5]">
      <>
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
              <CreateTicket
                changeHandler={changeHandler}
                toggleState={toggleState}
                values={values}
                CreateTicketHandler={CreateTicketHandler}
              />
            </div>
          )}
        </div>
        <div className="flex gap-3 h-full">
          <div className="border rounded border-[#ffffff] flex flex-col gap-3 py-4 px-6 bg-white flex-grow">
            <div className="w-full md:w-1/2 flex items-center border py-2 px-4 rounded">
              <SearchIcon className="mr-2" />
              <Input
                className="w-full outline-none"
                placeholder="search"
                onChange={(e) => setSearchFilter(e.target.value)}
              />
            </div>
            <div className="overflow-scroll">
              {displayTickets
                ?.filter((item: any) => {
                  return searchFilter.toLowerCase() === ""
                    ? item
                    : item?.title.toLowerCase().includes(searchFilter) ||
                        item?.description
                          .toLowerCase()
                          .includes(searchFilter) ||
                        item?.created_by?.name
                          .toLowerCase()
                          .includes(searchFilter);
                })
                ?.map((displayTicket: any, id: string) => (
                  <div key={id} className="border rounded px-5 py-4 my-3">
                    <Card displayTicket={displayTicket} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Issues;
