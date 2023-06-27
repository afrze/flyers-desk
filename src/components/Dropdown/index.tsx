import Text from "../Text";

const Dropdown = ({
  label,
  className,
  fontType,
  options,
  name,
  value,
  onChange,
}: any) => {
  return (
    <>
      <label className="py-2">
        <Text type={fontType} children={label} />
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border py-2 outline-none px-4"
      >
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
