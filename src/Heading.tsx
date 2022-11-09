import React, { FC } from "react";

type HeadingProps = { children: string; className?: string };

const Heading: FC<HeadingProps> = ({ children, className }) => {
  return (
    <div
      className={
        "text-xl flex justify-center text-rose-500 font-bold m-4 " + className
      }
    >
      {children}
    </div>
  );
};

export default Heading;
