/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Text from "../../components/Text";
import Dropdown from "../../components/Dropdown";
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
      updateTicketAsync(
        {
          id: TicketUser?.id,
          updateData: {
            assignee_id: values?.assignee_id,
            status: values?.status,
          },
        }
        //   TicketUser?.id, {
        //   assignee_id: values?.assignee_id,
        //   status: values?.status,
        // }
      )
    );
  };
  useEffect(() => {
    if (TicketUser) {
      setValues(TicketUser);
    }
  }, [TicketUser]);

  return (
    <div className="py-4 px-5">
      <Text type="h2" children="Ticket Details" />
      <div className="border rounded py-5 px-7 mx-w-[1200px] my-7 mx-auto border-[#f5f5f5] bg-[#f5f5f5] ">
        {department === "Infra" ? (
          <>
            <div className="flex justify-between w-full gap-2 md:gap-5 flex-wrap md:flex-nowrap">
              <div className="flex-center w-full md:w-1/2 gap-3 py-2">
                <label className="w-1/2 md:w-[35%] whitespace-nowrap">
                  Employee Name:
                </label>
                <Text
                  className="capitalize w-[90%] border p-2 rounded"
                  type="h5"
                  children={TicketUser?.employee_name}
                />
              </div>
              <div className="flex-center w-full gap-3 md:w-1/2 py-2">
                <label className="capitalize w-1/2 md:w-[35%] whitespace-nowrap">
                  Employee ID:
                </label>
                <Text
                  type="h5"
                  className="capitalize border p-2 w-[90%] rounded"
                  children={TicketUser?.employee_id}
                />
              </div>
            </div>
            <div className="flex justify-between w-full gap-2 md:gap-5 flex-wrap md:flex-nowrap">
              <div className="flex-center w-full md:w-1/2 gap-3 py-2">
                <label className="w-1/2 md:w-[35%] whitespace-nowrap">
                  Department:
                </label>
                <Text
                  className="capitalize w-[90%] border p-2 rounded"
                  type="h5"
                  children={TicketUser?.department}
                />
              </div>
              <div className="flex-center w-full gap-3 md:w-1/2 py-2">
                <label className="capitalize w-1/2 md:w-[35%] whitespace-nowrap">
                  Reporting To:
                </label>
                <Text
                  type="h5"
                  className="capitalize border p-2 w-[90%] rounded"
                  children={TicketUser?.report_to}
                />
              </div>
            </div>
            <div className="flex justify-between w-full gap-2 md:gap-5 flex-wrap md:flex-nowrap">
              <div className="flex-center w-full md:w-1/2 gap-3 py-2">
                <label className="w-1/2 md:w-[35%] whitespace-nowrap">
                  Assigned To:
                </label>
                <Text
                  className="capitalize w-[90%] border p-2 rounded"
                  type="h5"
                  children={TicketUser?.assignee_id}
                />
              </div>
              <div className="flex-center w-full gap-3 md:w-1/2 py-2">
                <label className="capitalize w-1/2 md:w-[35%] whitespace-nowrap">
                  Status:
                </label>
                <Text
                  type="h5"
                  className="capitalize border p-2 w-[90%] rounded"
                  children={TicketUser?.status}
                />
              </div>
            </div>
            <div className="flex justify-between w-full gap-2 md:gap-5 flex-wrap md:flex-nowrap">
              <div className="flex-center w-full md:w-1/2 gap-3 py-2">
                <label className="w-1/2 md:w-[35%] whitespace-nowrap">
                  Title:
                </label>
                <Text
                  className="capitalize w-[90%] border p-2 rounded"
                  type="h5"
                  children={TicketUser?.title}
                />
              </div>
              <div className="flex-center w-full gap-3 md:w-1/2 py-2">
                <label className="capitalize w-1/2 md:w-[35%] whitespace-nowrap">
                  issue type:
                </label>
                <Text
                  type="h5"
                  className="capitalize border p-2 w-[90%] rounded"
                  children={TicketUser?.type}
                />
              </div>
            </div>
            <div className="flex justify-between w-full md:gap-5 flex-wrap md:flex-nowrap">
              <div className="flex-center w-full md:w-1/2 gap-3 py-2">
                <label className="w-1/2 md:w-[35%] whitespace-nowrap">
                  Description:
                </label>
                <Text
                  className="capitalize w-[90%] border p-2 rounded"
                  type="h5"
                  children={TicketUser?.description}
                />
              </div>
              <div className="flex-center w-full gap-3 md:w-1/2 py-2">
                <label className="capitalize w-1/2 md:w-[35%] whitespace-nowrap">
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
                  className="w-full rounded bg-[#f5f5f5f5]"
                />
              </div>
            </div>
            <div className="flex-center w-full py-3 gap-3 md:w-[49%]">
              <label className="capitalize w-1/2 md:w-[35%] whitespace-nowrap">
                <Text type="h4" children="Status :" />
              </label>
              <Dropdown
                options={[
                  "select status",
                  "pending",
                  "in progress",
                  "blocked",
                  "completed",
                ]}
                onChange={changeHandler}
                name="status"
                value={values?.status}
                className="w-full capitalize rounded bg-[#f5f5f5f5]"
              />
            </div>
            <div className="flex-center w-full gap-3 py-5">
              <Button
                onClick={updateTicketHandler}
                className="w-full border rounded flex items-center justify-center p-2  bg-[#9230D0]"
              >
                <Text className="text-[#FFFFFF]" type="h4" children="Submit" />
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between w-full gap-2 md:gap-5 flex-wrap md:flex-nowrap">
              <div className="flex-center w-full md:w-1/2 gap-3 py-2">
                <label className="w-1/2 md:w-[35%] whitespace-nowrap">
                  Employee Name:
                </label>
                <Text
                  className="capitalize w-[90%] border p-2 rounded"
                  type="h5"
                  children={TicketUser?.employee_name}
                />
              </div>
              <div className="flex-center w-full gap-3 md:w-1/2 py-2">
                <label className="capitalize w-1/2 md:w-[35%] whitespace-nowrap">
                  Employee ID:
                </label>
                <Text
                  type="h5"
                  className="capitalize border p-2 w-[90%] rounded"
                  children={TicketUser?.employee_id}
                />
              </div>
            </div>
            <div className="flex justify-between w-full gap-2 md:gap-5 flex-wrap md:flex-nowrap">
              <div className="flex-center w-full md:w-1/2 gap-3 py-2">
                <label className="w-1/2 md:w-[35%] whitespace-nowrap">
                  Department:
                </label>
                <Text
                  className="capitalize w-[90%] border p-2 rounded"
                  type="h5"
                  children={TicketUser?.department}
                />
              </div>
              <div className="flex-center w-full gap-3 md:w-1/2 py-2">
                <label className="capitalize w-1/2 md:w-[35%] whitespace-nowrap">
                  Reporting To:
                </label>
                <Text
                  type="h5"
                  className="capitalize border p-2 w-[90%] rounded"
                  children={TicketUser?.report_to}
                />
              </div>
            </div>
            <div className="flex justify-between w-full gap-2 md:gap-5 flex-wrap md:flex-nowrap">
              <div className="flex-center w-full md:w-1/2 gap-3 py-2">
                <label className="w-1/2 md:w-[35%] whitespace-nowrap">
                  Assigned To:
                </label>
                <Text
                  className="capitalize w-[90%] border p-2 rounded"
                  type="h5"
                  children={TicketUser?.assignee_id}
                />
              </div>
              <div className="flex-center w-full gap-3 md:w-1/2 py-2">
                <label className="capitalize w-1/2 md:w-[35%] whitespace-nowrap">
                  Status:
                </label>
                <Text
                  type="h5"
                  className="capitalize border p-2 w-[90%] rounded"
                  children={TicketUser?.status}
                />
              </div>
            </div>
            <div className="flex justify-between w-full gap-2 md:gap-5 flex-wrap md:flex-nowrap">
              <div className="flex-center w-full md:w-1/2 gap-3 py-2">
                <label className="w-1/2 md:w-[35%] whitespace-nowrap">
                  Title:
                </label>
                <Text
                  className="capitalize w-[90%] border p-2 rounded"
                  type="h5"
                  children={TicketUser?.title}
                />
              </div>
              <div className="flex-center w-full gap-3 md:w-1/2 py-2">
                <label className="capitalize w-1/2 md:w-[35%] whitespace-nowrap">
                  issue type:
                </label>
                <Text
                  type="h5"
                  className="capitalize border p-2 w-[90%] rounded"
                  children={TicketUser?.type}
                />
              </div>
            </div>
            <div className="flex-center w-full md:w-1/2 gap-3 py-2">
              <label className="w-1/2 md:w-[35%] whitespace-nowrap">
                Description:
              </label>
              <Text
                className="capitalize w-[90%] border p-2 rounded"
                type="h5"
                children={TicketUser?.description}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OpenTicket;
