import { SearchIcon } from "../../assets/icons";
import Input from "../Input";

const Search = ({ className }: any) => {
  return (
    <div className={`${className} flex items-center border py-2 px-4 rounded`}>
      <SearchIcon className="mr-2" />
      <Input className="w-full outline-none" placeholder="search" />
    </div>
  );
};

export default Search;
