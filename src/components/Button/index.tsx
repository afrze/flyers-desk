// import React from 'react'

type Props = {
  type?: string;
  className?: string;
  children?: JSX.Element | string;
  onClick?: () => void;
};

const Button = ({ className, children, onClick }: Props) => {
  return (
    <button
      className={`${className} "flex justify-center w-full py-4 px-5 border-primary-500 hover:bg-primary-500 hover:text-white hover:rounded-2xl"`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
