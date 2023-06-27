import Text from "../Text";

const Dropdown = ({
  label,
  className,
  fontType,
  options,
  onChange,
  value,
  name,
  labelClassName,
  textClassName,
}: any) => {
  return (
    <>
      <label className={labelClassName}>
        <Text className={textClassName} type={fontType} children={label} />
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`${className} border py-2`}
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
