import { ChangeEvent } from "react";

type Props = {
  type: string;
  name: string;
  value?: string;
  placeholder: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type,
  name,
  value,
  placeholder,
  className,
  onChange,
}: Props) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
