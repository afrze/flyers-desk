import { createTicket } from "../../services/firebase/database.service";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";
import Text from "../Text";

const CreateTicket = () => {
  const CreateTicketHandler = () => {
    createTicket({
      assigned_to: "Chandran",
      report_to: "Ali",
      created_by: {
        name: "Manoj",
        employee_id: "FEC0021",
        uid: "dummy",
      },
      attachments: ["manoj"],
      title: "new ticket",
      department: {
        id: "1",
        name: "Front End",
      },
      description: "new laptop",
      priority: "high",
      type: "purchase",
      status: "pending",
      created_at: new Date(),
      resolved_at: new Date(),
    });
  };

  return (
    <>
      <Text
        type="h3"
        className="font-[Montserrat] font-semibold pt-3"
        children="Create Quick Ticket"
      />
      <Text
        type="h5"
        className="font-montserrat whitespace-nowrap text-[#84818A]"
        children="Write and address new queries and issues"
      />
      <div className="py-3">
        <Input
          className="border py-2 px-3 rounded text-[#757575] outline-none"
          labelClassName="pb-2"
          label="Customer Email"
          fontType="h5"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col">
        <Dropdown
          className="py-2"
          label="Request Ticket Type"
          fontType="h5"
          options={["Purchase", "Issue"]}
        />
      </div>

      <div className="flex flex-col">
        <Dropdown
          className="py-2"
          label="Priority Status"
          fontType="h5"
          options={["High Priority", "Low Priority", "Medium Priority"]}
          option1="High Priority"
          option2="Medium"
        />
      </div>
      <div className="flex flex-col py-3 ">
        <label>
          <Text type="h5" children="Ticket Body" />
        </label>
        <textarea className="border h-[130px] rounded" />
      </div>
      <Button
        onClick={CreateTicketHandler}
        className="w-full border rounded flex items-center justify-center p-2  bg-[#AE8EF1]"
      >
        <Text className="text-[#FFFFFF]" type="h4" children="Submit" />
      </Button>
    </>
  );
};

export default CreateTicket;
