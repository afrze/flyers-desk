import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Text from "../../components/Text";

const InfraTeam = ({
  updateTicketHandler,
  TicketUser,
  values,
  changeHandler,
  statusArr,
  assigneArr,
}: any) => {
  return (
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
          {TicketUser?.assignee_id ? (
            <Text
              className="capitalize w-[90%] border p-2 rounded"
              type="h5"
              children={TicketUser?.assignee_id}
            />
          ) : (
            <Text
              className="capitalize w-[90%] border p-2 rounded"
              children="--NA--"
            />
          )}
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
          <label className="w-1/2 md:w-[35%] whitespace-nowrap">Title:</label>
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
            label="Assigne Id"
            options={assigneArr}
            onChange={(value: string) => {
              changeHandler({ target: { name: "assignee_id", value } });
            }}
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
          label="select status"
          options={statusArr}
          onChange={(value: string) => {
            changeHandler({ target: { name: "status", value } });
          }}
          value={values?.status}
          className="w-full capitalize rounded bg-[#f5f5f5f5]"
        />
      </div>
      <div className="flex-center w-full gap-3 py-5">
        <Button
          onClick={updateTicketHandler}
          className="w-1/2 border rounded flex items-center justify-center p-2  bg-[#9230D0]"
        >
          <Text className="text-[#FFFFFF]" type="h4" children="Submit" />
        </Button>
      </div>
    </>
  );
};

export default InfraTeam;
