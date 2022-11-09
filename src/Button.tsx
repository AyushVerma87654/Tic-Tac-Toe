import React, { FC } from "react";

type ButtonProps = { children: string; onClick?: () => void };

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div>
      <button
        className="bg-green-500 text-rose-500 font-bold text-xl rounded-md w-32 h-12"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
