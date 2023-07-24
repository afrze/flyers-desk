/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InfraTeam from "./infra-team";
import { assigneArr, statusArr } from "./data-arrays";
import Text from "../../components/Text";
import { updateTicketAsync } from "../../store/ticketSlice";
import EmployeeTicket from "./employee-ticket";

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
      updateTicketAsync({
        id: TicketUser?.id,
        updateData: {
          assignee_id: values?.assignee_id,
          status: values?.status,
        },
      })
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
          <InfraTeam
            updateTicketHandler={updateTicketHandler}
            TicketUser={TicketUser}
            changeHandler={changeHandler}
            values={values}
            statusArr={statusArr}
            assigneArr={assigneArr}
          />
        ) : (
          <EmployeeTicket TicketUser={TicketUser} />
        )}
      </div>
    </div>
  );
};

export default OpenTicket;
