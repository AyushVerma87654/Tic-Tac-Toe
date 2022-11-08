import React, { FC, useState } from "react";
import DivInput from "./DivInput";

type listProps = { id: number; value: string }[];

type LayoutProps = {
  list: listProps;
  setList: (a: listProps) => void;
  result: string;
};

const Layout: FC<LayoutProps> = ({ list, setList, result }) => {
  const [data, setData] = useState("");
  const [turn, setTurn] = useState(false);

  const handleClick = (num: number) => {
    if (result.length == 0) {
      const newList = [...list];
      if (turn) {
        newList[num - 1].value = "X";
        setData("X");
      } else {
        newList[num - 1].value = "O";
        setData("O");
      }
      setTurn(!turn);
      setList(newList);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-60">
        <div className="flex">
          <DivInput onClick={() => handleClick(1)}>{list[0].value}</DivInput>
          <DivInput onClick={() => handleClick(2)} value={1}>
            {list[1].value}
          </DivInput>
          <DivInput onClick={() => handleClick(3)}>{list[2].value}</DivInput>
        </div>
        <div className="flex border-4 border-white border-y-red-500">
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
