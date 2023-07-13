/* eslint-disable @typescript-eslint/no-explicit-any */
import Text from "../../components/Text";

const EmployeeTicket = ({ TicketUser }: any) => {
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
  );
};

export default EmployeeTicket;
