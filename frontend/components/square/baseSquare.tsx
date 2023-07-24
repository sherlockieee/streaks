import React from "react";

interface BaseSquareProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export function BaseSquare({ children, className, ...rest }: BaseSquareProps) {
  return (
    <div
      className={`flex rounded-2xl border-black border-4 flex-col justify-center items-center p-4
      gap-2 aspect-square h-40 bouncing-animation cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
