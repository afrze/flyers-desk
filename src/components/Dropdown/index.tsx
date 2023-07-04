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
        <Text className="py-2" type={fontType} children={label} />
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`${className} border py-2 outline-none px-4`}
      >
        {options?.map((option: string, i: any) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
