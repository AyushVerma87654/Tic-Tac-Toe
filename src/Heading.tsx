import React, { FC } from "react";

type HeadingProps = { children: string };

const Heading: FC<HeadingProps> = ({ children }) => {
  return (
    <div className="text-3xl flex justify-center text-rose-500 font-bold h-20 mt-12">
      {children}
    </div>
  );
};

export default Heading;
