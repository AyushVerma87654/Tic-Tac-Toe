import React, { FC, useState } from "react";
import DivInput from "./DivInput";

type listProps = { id: number; value: string }[];

type LayoutProps = {
  list: listProps;
  setList: (a: listProps) => void;
  result: string;
  turn: boolean;
  setTurn: (a: boolean) => void;
};

const Layout: FC<LayoutProps> = ({ list, setList, result, turn, setTurn }) => {
  const handleClick = (num: number) => {
    if (result.length == 0) {
      if (list[num - 1].value != "X") {
        if (list[num - 1].value != "O") {
          const newList = [...list];
          if (turn) {
            newList[num - 1].value = "X";
          } else {
            newList[num - 1].value = "O";
          }
          setTurn(!turn);
          setList(newList);
        }
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-60">
        <div className="flex">
          <DivInput onClick={() => handleClick(1)}>{list[0].value}</DivInput>
          <DivInput onClick={() => handleClick(2)} value={1}>
            {list[1].value}
          </DivInput>
          <DivInput onClick={() => handleClick(3)}>{list[2].value}</DivInput>
        </div>
        <div className="flex border-4 border-blue-500 border-y-red-500">
          <DivInput onClick={() => handleClick(4)}>{list[3].value}</DivInput>
          <DivInput onClick={() => handleClick(5)} value={1}>
            {list[4].value}
          </DivInput>
          <DivInput onClick={() => handleClick(6)}>{list[5].value}</DivInput>
        </div>
        <div className="flex">
          <DivInput onClick={() => handleClick(7)}>{list[6].value}</DivInput>
          <DivInput onClick={() => handleClick(8)} value={1}>
            {list[7].value}
          </DivInput>
          <DivInput onClick={() => handleClick(9)}>{list[8].value}</DivInput>
        </div>
      </div>
    </div>
  );
};

export default Layout;
