import { ButtonHTMLAttributes } from "react";

export const Button = ({
  className,
  children,
  ...restOfProps
}: {
  className?: string;
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`border-4 border-black border-solid rounded-md font-serif uppercase font-bold bg-white px-4 py-2 hover:bg-gray-100 ${className}`}
      {...restOfProps}
    >
      {children}
    </button>
  );
};
