import React, { FC } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Heading from "./Heading";

const Last = () => {
  return (
    <div className="p-4 bg-blue-500 h-screen">
      <Heading>Welcome to my Tic Tac Toe Game...</Heading>
      <div className="flex items-center mt-32 justify-center">
        <Link to="/game">
          <Button>Start</Button>
        </Link>
      </div>
    </div>
  );
};

export default Last;
