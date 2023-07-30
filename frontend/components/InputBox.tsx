import { InputHTMLAttributes } from "react";

export const InputBox = ({
  className,
  children,
  ...restOfProps
}: {
  className?: string;
  children?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`inline-flex h-8 w-full min-w-[80px] flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] ${className}`}
      {...restOfProps}
    >
      {children}
    </input>
  );
};
