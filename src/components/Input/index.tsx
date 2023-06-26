import { ChangeEvent } from "react";
import Text from "../Text";

type Props = {
  type?: string;
  name?: string;
  value?: string;
  placeholder: string;
  className?: string;
  label?: string;
  labelClassName?: string;
  fontType?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type,
  name,
  value,
  placeholder,
  className,
  label,
  labelClassName,
  fontType,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col">
      <label className={labelClassName}>
        <Text type={fontType} children={label} />
      </label>
      <input
        className={`${className}`}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
