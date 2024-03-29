import React, { FC } from "react";

type listProps = { id: number; value: string }[];
type CalculateProps = {
  list: listProps;
  setList: (a: listProps) => void;
  setResult: (a: string) => void;
};

const Calculate: FC<CalculateProps> = ({ list, setList, setResult }) => {
  let token = 2;

  if (list[1].value == "X" && list[4].value == "X" && list[7].value == "X") {
    token = 1;
  } else if (
    list[2].value == "X" &&
    list[5].value == "X" &&
    list[8].value == "X"
  ) {
    token = 1;
  } else if (
    list[0].value == "X" &&
    list[3].value == "X" &&
    list[6].value == "X"
  ) {
    token = 1;
  } else if (
    list[0].value == "X" &&
    list[1].value == "X" &&
    list[2].value == "X"
  ) {
    token = 1;
  } else if (
    list[3].value == "X" &&
    list[4].value == "X" &&
    list[5].value == "X"
  ) {
    token = 1;
  } else if (
    list[6].value == "X" &&
    list[7].value == "X" &&
    list[8].value == "X"
  ) {
    token = 1;
  } else if (
    list[0].value == "X" &&
    list[4].value == "X" &&
    list[8].value == "X"
  ) {
    token = 1;
  } else if (
    list[2].value == "X" &&
    list[4].value == "X" &&
    list[6].value == "X"
  ) {
    token = 1;
  } else if (
    list[1].value == "O" &&
    list[4].value == "O" &&
    list[7].value == "O"
  ) {
    token = 0;
  } else if (
    list[2].value == "O" &&
    list[5].value == "O" &&
    list[8].value == "O"
  ) {
    token = 0;
  } else if (
    list[3].value == "O" &&
    list[6].value == "O" &&
    list[0].value == "O"
  ) {
    token = 0;
  } else if (
    list[1].value == "O" &&
    list[2].value == "O" &&
    list[0].value == "O"
  ) {
    token = 0;
  } else if (
    list[4].value == "O" &&
    list[5].value == "O" &&
    list[3].value == "O"
  ) {
    token = 0;
  } else if (
    list[6].value == "O" &&
    list[7].value == "O" &&
    list[8].value == "O"
  ) {
    token = 0;
  } else if (
    list[0].value == "O" &&
    list[4].value == "O" &&
    list[8].value == "O"
  ) {
    token = 0;
  } else if (
    list[2].value == "O" &&
    list[4].value == "O" &&
    list[6].value == "O"
  ) {
    token = 0;
  }

  if (token == 0) {
    setResult("Player 2");
  } else if (token == 1) {
    setResult("Player 1");
  }

  return <div></div>;
};

export default Calculate;
