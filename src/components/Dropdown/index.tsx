import { useRef, useState } from "react";
import { ChevronDown } from "../../assets/icons";

const Dropdown = ({ options, onChange, value, label }: any) => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<null | HTMLDivElement>(null);

  const dropdownHandler = (val: any) => {
    onChange(val);
    setIsActive(false);
  };

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current) {
      setIsActive(false);
    }
  });

  return (
    <div className="relative w-full">
      <div
        ref={menuRef}
        className="flex justify-between items-center py-4 px-6 border rounded shadow cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <p className="capitalize"> {value || label} </p>
        <span className={isActive ? "rotate-180 transition" : ""}>
          <ChevronDown />
        </span>
      </div>
      {isActive && (
        <div className="absolute h-[14vh] overflow-scroll w-full bg-white py-4 px-3 rounded shadow my-1 hover:w-full">
          {options?.map((option: { value: string; text: string }) => (
            <div
              onClick={() => {
                dropdownHandler(option.value);
              }}
              className="capitalize p-4  cursor-pointer transition-all  hover:bg-[#f4f4f4] rounded-r-xl "
              key={option.value}
            >
              {option.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
