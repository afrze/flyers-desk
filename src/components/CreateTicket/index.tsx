import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";
import Text from "../Text";
import { FaTimes } from "react-icons/fa";

const CreateTicket = ({
  toggleState,
  changeHandler,
  values,
  CreateTicketHandler,
}: any) => {
  return (
    <div>
      <div className="flex justify-between">
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
        </div>
        <Button onClick={toggleState}>
          <FaTimes />
        </Button>
      </div>
      {/* <div className="pt-3">
        <Input
          className="border py-2 px-3 rounded text-[#757575] outline-none"
          type="text"
          labelClassName="pb-2"
          label="Assign To"
          fontType="h5"
          placeholder="FEC0048"
          disabled
        />
      </div> */}
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
          name="requestType"
          value={values?.requestType}
          onChange={changeHandler}
        />
      </div>

      <div className="flex flex-col py-3 ">
        <Input
          className="capitalize border py-2 px-3 rounded text-[#757575] outline-none"
          type="text"
          labelClassName="pb-2 capitalize"
          label="Description"
          fontType="h5"
          placeholder="Description"
          value={values.description}
          name="description"
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
