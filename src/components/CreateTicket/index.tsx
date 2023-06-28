import { useState } from "react";
import {
  createTicket,
  useTicketListener,
} from "../../services/firebase/database.service";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";
import Text from "../Text";
import { useSelector } from "react-redux";

const CreateTicket = ({ toggleState }: any) => {
  const [values, setValues] = useState<{
    desc: string;
    priority: "high" | "low" | "medium";
    title: string;
    requestType: "purchase" | "issue";
  }>({
    desc: "",
    priority: "high",
    requestType: "purchase",
    title: "",
  });

  const changeHandler = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log("values", values);
  const user = useSelector((state: any) => state?.user.data);

  const CreateTicketHandler = () => {
    createTicket({
      assignee: {
        uid: "",
        name: "Ramesh Sankaran",
        employee_id: "FEC0048",
        email: "ramesh.sankaran@flyerssoft.com",
      },
      report_to: "Ali",
      created_by: {
        name: user?.displayName,
        employee_id: user?.employeeId,
        uid: user?.uid,
      },
      attachments: ["manoj"],
      title: values.title,
      department: {
        id: "1",
        name: "Front End",
      },
      description: values.desc,
      priority: values.priority,
      type: values.requestType,
      status: "pending",
      created_at: new Date(),
      resolved_at: null,
    });
    toggleState();
  };

  return (
    <div>
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
      <div className="pt-3">
        <Input
          className="border py-2 px-3 rounded text-[#757575] outline-none"
          type="text"
          labelClassName="pb-2"
          label="Assign To"
          fontType="h5"
          placeholder="FEC0048"
          disabled
        />
      </div>
      <div className="pt-3">
        <Input
          className="border py-2 px-3 rounded text-[#757575] outline-none"
          type="text"
          labelClassName="pb-2"
          label="Title"
          fontType="h5"
          placeholder="Title"
          onChange={changeHandler}
          value={values?.title}
          name="title"
        />
      </div>
      <div className="pt-3 flex flex-col">
        <Dropdown
          className="py-2"
          label="Request Ticket Type"
          fontType="h5"
          options={["purchase", "issue"]}
          name="priority"
          value={values.priority}
          onChange={changeHandler}
        />
      </div>

      <div className="pt-3 flex flex-col">
        <Dropdown
          className="py-2"
          label="Priority Status"
          fontType="h5"
          options={["high", "low", "medium"]}
          name="requestType"
          value={values?.requestType}
          onChange={changeHandler}
        />
      </div>
      <div className="flex flex-col py-3 ">
        {/* <label>
          <Text type="h5" children="Ticket Body" />
        </label> */}
        <Input
          className="capitalize border py-2 px-3 rounded text-[#757575] outline-none"
          type="text"
          labelClassName="pb-2 capitalize"
          label="Ticket Body"
          fontType="h5"
          placeholder="Description"
          value={values.desc}
          name="desc"
          onChange={changeHandler}
        />
      </div>
      <Button
        onClick={CreateTicketHandler}
        className="w-full border rounded flex items-center justify-center p-2  bg-[#AE8EF1]"
      >
        <Text className="text-[#FFFFFF]" type="h4" children="Submit" />
      </Button>
    </div>
  );
};

export default CreateTicket;
