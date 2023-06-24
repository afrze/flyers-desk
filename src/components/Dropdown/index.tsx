import Text from "../Text";

const Dropdown = ({ label, className, fontType, options }: any) => {
  return (
    <>
      <label className={className}>
        <Text type={fontType} children={label} />
      </label>
      <div className="border py-2 outline-none">
        {options?.map((option: string, index: any) => (
          <div key={index}>
            <Text type="h6" children={option} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Dropdown;
