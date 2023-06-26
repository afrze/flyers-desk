import Text from "../Text";

const Dropdown = ({ label, className, fontType, options, onChange }: any) => {
  return (
    <>
      <label className={className}>
        <Text type={fontType} children={label} />
      </label>
      <select onChange={onChange} className="border py-2 outline-none">
        {options?.map((option: string, index: any) => (
          <option key={index}>
            <Text type="h6" children={option} />
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
