/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSelector } from "react-redux";
import { MessageIcon, SearchIcon } from "../../assets/icons";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Text from "../../components/Text";
import CreateTicket from "../../components/CreateTicket";
import { createTicket } from "../../services/firebase/database.service";
import Input from "../../components/Input";

const Issues = () => {
  const { department, uid, displayName, employeeId, reportingTo } = useSelector(
    (state: any) => state.user.data
  );
  const tickets = useSelector((state: any) =>
    state?.ticket?.tickets?.filter((ticket: any) => ticket.employee_uid === uid)
  );
  const [showCreateTicketModal, setShowCreateTicketModal] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [values, setValues] = useState<any | null>({
    description: "",
    priority: "high",
    requestType: "",
    title: "",
  });

  const changeHandler = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const createTicketModalHandler = () => {
    setShowCreateTicketModal(!showCreateTicketModal);
    setValues("");
  };

  const createTicketHandler = (e: any) => {
    e.preventDefault();
    if (values?.title === "") {
      alert("please fill all the fields");
      return;
    } else if (values?.description === "") {
      alert("please fill desc the field");
    }
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
      status: "New Ticket",
      created_at: new Date(),
      resolved_at: null,
      attachments: ["0"],
      // ticket_id: selected,
    });
    setValues("");
    createTicketModalHandler();
  };
  console.log("object", values?.title === "");

  return (
    <div className="py-3 px-5 h-full overflow-scroll bg-[#f5f5f5]">
      <>
        {tickets?.length === 0 ? (
          <>
            <div className="flex-center justify-between py-3">
              <Text type="h2" children="Tickets" />
              <div
                className="flex-center bg-[#7F56D8] rounded py-1 px-4"
                onClick={createTicketModalHandler}
              >
                <MessageIcon />
                <Button className="border-none text-white">
                  <Text type="h4" children="New Ticket" />
                </Button>
              </div>
            </div>
            <div
              className={
                showCreateTicketModal
                  ? "new-ticket-outer w-full flex justify-center items-center"
                  : ""
              }
            >
              {showCreateTicketModal && (
                <div
                  className={
                    showCreateTicketModal
                      ? "new-ticket-container w-[calc(100%-20px)] md:w-1/2"
                      : ""
                  }
                >
                  <CreateTicket
                    changeHandler={changeHandler}
                    createTicketModalHandler={createTicketModalHandler}
                    values={values}
                    createTicketHandler={createTicketHandler}
                    setValues={setValues}
                  />
                </div>
              )}
            </div>
            <div className="w-full h-[80vh] flex-center justify-center">
              <Text type="h3" children="No tickets Created yet" />
            </div>
          </>
        ) : (
          <>
            <div className="flex-center justify-between py-3">
              <Text type="h2" children="Tickets" />
              <div
                className="flex-center bg-[#7F56D8] rounded py-1 px-4"
                onClick={createTicketModalHandler}
              >
                <MessageIcon />
                <Button className="border-none text-white">
                  <Text type="h4" children="New Ticket" />
                </Button>
              </div>
            </div>
            <div
              className={
                showCreateTicketModal
                  ? "new-ticket-outer w-full flex justify-center items-center"
                  : ""
              }
            >
              {showCreateTicketModal && (
                <div
                  className={
                    showCreateTicketModal
                      ? "new-ticket-container w-[calc(100%-20px)] md:w-1/2"
                      : ""
                  }
                >
                  <CreateTicket
                    changeHandler={changeHandler}
                    createTicketModalHandler={createTicketModalHandler}
                    values={values}
                    createTicketHandler={createTicketHandler}
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
                  {tickets
                    ?.filter((ticket: any) => {
                      return searchFilter?.toLowerCase() === ""
                        ? ticket
                        : ticket?.title
                            ?.toLowerCase()
                            ?.includes(searchFilter) ||
                            ticket?.description
                              ?.toLowerCase()
                              ?.includes(searchFilter) ||
                            ticket?.created_by?.name
                              ?.toLowerCase()
                              ?.includes(searchFilter);
                    })
                    ?.map((ticket: any, id: string) => (
                      <div key={id} className="border rounded px-5 py-4 my-3">
                        <Card ticket={ticket} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Issues;
