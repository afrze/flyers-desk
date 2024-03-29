import { useState } from "react";
import { useSelector } from "react-redux";
import { SearchIcon } from "../../assets/icons";
import Card from "../../components/Card";
import Text from "../../components/Text";
import Input from "../../components/Input";

const ALLTickets = () => {
  const tickets = useSelector((state: any) => state.ticket.tickets);
  const [searchFilter, setSearchFilter] = useState("");

  const searchFilterHandler = (e: any) => {
    setSearchFilter(e?.target?.value);
  };

  return (
    <div className="py-3 px-5 h-full overflow-scroll bg-[#f5f5f5]">
      <div className="flex-center justify-between py-3">
        <Text type="h2" children="All Tickets" />
      </div>
      <div className="flex gap-3 h-full">
        <div className="border rounded border-[#ffffff] flex flex-col gap-3 py-4 px-6 bg-white flex-grow">
          <div
            className={`w-full md:w-1/2  flex items-center border py-2 px-4 rounded`}
          >
            <SearchIcon className="mr-2" />
            <Input
              className="w-full outline-none"
              placeholder="search"
              onChange={searchFilterHandler}
            />
          </div>
          <div className="overflow-scroll">
            {tickets
              ?.filter((item: any) => {
                return searchFilter?.toLowerCase() === ""
                  ? item
                  : item?.created_by?.name
                      ?.toLowerCase()
                      ?.includes(searchFilter) ||
                      item?.title?.toLowerCase()?.includes(searchFilter);
              })
              ?.map((ticket: any, id: any) => (
                <div key={id} className="border rounded px-5 py-4 my-3">
                  <Card ticket={ticket} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ALLTickets;
