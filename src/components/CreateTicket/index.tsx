import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";
import Text from "../Text";
import { FaTimes } from "react-icons/fa";

const CreateTicket = ({
  createTicketModalHandler,
  changeHandler,
  values,
  createTicketHandler,
}: any) => {
  return (
    <form className="p-6">
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
        <Button onClick={createTicketModalHandler}>
          <FaTimes />
        </Button>
      </div>
      <div className="py-3">
        <Input
          className="border py-4 px-3 rounded text-[#757575] outline-none"
          type="text"
          labelClassName="pb-2"
          label="Title"
          fontType="h5"
          placeholder="Title"
          onChange={changeHandler}
          value={values?.title || ""}
          name="title"
          // required
        />
      </div>
      <div className="py-3 flex flex-col">
        <Dropdown
          className="py-2"
          label="Choose Type"
          options={[
            { value: "purchase", text: "Purchase Request" },
            { value: "issue", text: "Issue Request" },
          ]}
          value={values?.requestType}
          onChange={(value: string) => {
            changeHandler({ target: { name: "requestType", value } });
          }}
        />
      </div>

      <div className="flex flex-col py-3 ">
        <Input
          className="capitalize border py-4 px-3 rounded text-[#757575] outline-none"
          type="text"
          labelClassName="pb-2 capitalize"
          label="Description"
          fontType="h5"
          placeholder="Description"
          value={values.description || ""}
          name="description"
          onChange={changeHandler}
          // required
        />
      </div>
      <div className="py-3">
        <Button
          type="submit"
          onClick={createTicketHandler}
          className="w-full border rounded flex items-center justify-center p-2  bg-[#7F56D8]"
        >
          <Text className="text-[#FFFFFF]" type="h4" children="Submit" />
        </Button>
      </div>
    </form>
  );
};

export default CreateTicket;
