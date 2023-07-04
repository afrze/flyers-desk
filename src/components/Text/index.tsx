import classNames from "classnames";

type Props = {
  type?: string;
  children?: JSX.Element | string;
  className?: string;
};

const Text = ({ type, children, className }: Props) => {
  const textClass = classNames(
    { "text-xl": type === "h2" },
    { "text-lg": type === "h3" },
    { "text-base": type === "h4" },
    { "text-sm": type === "h5" },
    { "text-xs": type === "h6" },
    className
  );
  if (type === "h1") {
    return (
      <>
        <h1 className={textClass}>{children}</h1>
      </>
    );
  }
  if (type === "h2") {
    return (
      <>
        <h2 className={textClass}>{children}</h2>
      </>
    );
  }
  if (type === "h3") {
    return (
      <>
        <h3 className={textClass}>{children}</h3>
      </>
    );
  }

  return <p className={`${textClass}`}>{children}</p>;
};

export default Text;
