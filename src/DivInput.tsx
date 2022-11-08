import React, { FC } from "react";

type DivInputProps = { children: string; value?: number; onClick: () => void };

const DivInput: FC<DivInputProps> = ({ children, value, onClick }) => {
  let theme;
  if (value == 1) {
    theme = "border-4 border-white border-x-red-500";
  }
  return (
    <div
      onClick={onClick}
      className={
        "w-20 h-16 flex items-center justify-center text-2xl font-bold " + theme
      }
    >
      {children}
    </div>
  );
};

export default DivInput;
