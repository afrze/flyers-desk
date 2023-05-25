import { ChangeEvent } from "react";

type Props = {
  type: string;
  name: string;
  value?: string;
  placeholder: string;
  className: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const Input = ({
  type,
  name,
  value,
  placeholder,
  className,
  onChange,
  error,
}: Props) => {
  return (
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      <p className="text-red-600 capitalize">{error} </p>
    </>
  );
};

export default Input;
