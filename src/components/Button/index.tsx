import classNames from "classnames";

type Props = {
  type?: string;
  className?: string;
  children?: JSX.Element | string;
  onClick?: () => void;
  suffix?: JSX.Element;
  prefix?: JSX.Element;
};

const Button = ({
  className,
  type,
  children,
  onClick,
  prefix,
  suffix,
}: Props) => {
  const buttonClasses = classNames(
    "flex items-center gap-4 text-xl text-primary-500",
    {
      "p-4 border border-slate-600 hover:bg-slate-200 transition-colors duration-500":
        type === "microsoft",
    },
    className
  );

  return (
    <button
      className={`${buttonClasses} rounded flex items-center justify-center p-2 text-[#000000]`}
      type="button"
      onClick={onClick}
    >
      {prefix ? prefix : null}
      {children}
      {suffix ? suffix : null}
    </button>
  );
};

export default Button;
