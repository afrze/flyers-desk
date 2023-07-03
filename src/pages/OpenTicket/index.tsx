/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Text from "../../components/Text";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { updateTicketAsync } from "../../store/ticketSlice";

const OpenTicket = () => {
  const dispatch = useDispatch();
  const { department } = useSelector((state: any) => state.user.data);
  const params = useParams();
  const displayTicket = useSelector((state: any) => state?.ticket?.tickets);
  const TicketUser = displayTicket?.find(
    (ticket: any) => ticket.id === params.id
  );

  const [values, setValues] = useState<{
    assignee_id:
      | "FEC0048 Ramesh Sankaran"
      | "FEC0114 Sakthivel Ramalingam"
      | "FEC0035 ARIVAN"
      | any;
    status: "pending" | "inprogress" | "blocked" | "completed" | any;
  }>({
    assignee_id: "",
    status: "",
  });

  const changeHandler = (e: any) => {
    setValues({ ...values, [e.target.name]: e?.target?.value });
  };

  const updateTicketHandler = async () => {
    dispatch(
      updateTicketAsync(TicketUser?.id, {
        assignee_id: values?.assignee_id,
        status: values?.status,
      })
    );
  };

  return (
    <div>
      <Text type="h2" children="Ticket Details" />
      <div className="py-3 px-5">
        {department === "Infra" ? (
          <>
            <div className="flex-center justify-between flex-col gap-3 md:flex-row">
              <div className="flex-center w-full">
                <label className="whitespace-nowrap mr-2">
                  <Text type="h4" children="Assignee :" />
                </label>
                <Dropdown
                  options={[
                    "select assignee",
                    "FEC0048 Ramesh Sankaran",
                    "FEC0114 Sakthivel Ramalingam",
                    "FEC0035 ARIVAN",
                  ]}
                  onChange={changeHandler}
                  name="assignee_id"
                  value={values?.assignee_id}
                  className="w-full"
                />
              </div>
              <div className="flex-center w-full">
                <label className="whitespace-nowrap mr-2">
                  <Text type="h4" children="Status :" />
                </label>
                <Dropdown
                  options={[
                    "select status",
                    "pending",
                    "inprogress",
                    "blocked",
                    "completed",
                  ]}
                  onChange={changeHandler}
                  name="status"
                  value={values?.status}
                  className="w-full"
                />
              </div>
              <Button
                onClick={updateTicketHandler}
                className="w-full border rounded flex items-center justify-center p-2  bg-[#AE8EF1]"
              >
                <Text className="text-[#FFFFFF]" type="h4" children="Submit" />
              </Button>
            </div>
            <div className="flex-center justify-between gap-3 py-3">
              <Input
                label="Employee Name:"
                placeholder={TicketUser?.employee_name}
                disabled
              />
              <Input
                label="Employee ID:"
                placeholder={TicketUser?.employee_id}
                disabled
              />
            </div>
            <div className="flex-center justify-between gap-3 py-3">
              <Input
                label="Department:"
                placeholder={TicketUser?.department}
                disabled
              />
              <Input
                label="Reporting To:"
                placeholder={TicketUser?.report_to}
                disabled
              />
            </div>
            <div className="flex-center py-2">
              <label className="mr-3">Title:</label>
              <Text
                className="capitalize"
                type="h5"
                children={TicketUser?.title}
              />
            </div>
            <div className="flex-center py-2">
              <label className="mr-3">Description:</label>
              <Text
                className="capitalize"
                type="h5"
                children={TicketUser?.description}
              />
            </div>
            <div className="flex-center py-2">
              <label className="capitalize mr-3">issue type:</label>
              <Text type="h5" children={TicketUser?.type} />
            </div>
          </>
        ) : (
          <>
            <div className="flex-center justify-between gap-3 py-3">
              <Input
                label="Employee Name:"
                placeholder={TicketUser?.employee_name}
                disabled
              />
              <Input
                label="Employee ID:"
                placeholder={TicketUser?.employee_id}
                disabled
              />
            </div>
            <div className="flex-center justify-between gap-3 py-3">
              <Input
                label="Department:"
                placeholder={TicketUser?.department}
                disabled
              />
              <Input
                label="Reporting To:"
                placeholder={TicketUser?.report_to}
                disabled
              />
            </div>
            <div className="flex-center py-2">
              <label className="mr-3">Title:</label>
              <Text
                className="capitalize"
                type="h5"
                children={TicketUser?.title}
              />
            </div>
            <div className="flex-center py-2">
              <label className="mr-3">Description:</label>
              <Text
                className="capitalize"
                type="h5"
                children={TicketUser?.description}
              />
            </div>
            <div className="flex-center py-2">
              <label className="capitalize mr-3">issue type:</label>
              <Text type="h5" children={TicketUser?.type} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OpenTicket;
