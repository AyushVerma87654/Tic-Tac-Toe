import React, { FC, useState } from "react";
import Button from "./Button";
import Calculate from "./Calculate";
import DivInput from "./DivInput";
import { allData } from "./dummyData";
import Heading from "./Heading";
import Layout from "./Layout";

const MainPage = () => {
  const newData = allData();
  const [list, setList] = useState(newData);
  const [result, setResult] = useState("");

  const handleClick = () => {
    setResult("");
    setList(newData);
  };
  return (
    <div className="p-4 bg-blue-500 h-screen">
      <div className="flex justify-around">
        <Heading className="text-xl">Player 1 : X</Heading>
        <Heading className="text-xl">Player 2 : O</Heading>
      </div>
      <div className="flex h-32 items-center justify-around">
        <div className="w-40">
          {result.length > 0 && (
            <Heading className="m-0">{`${result} wins`}</Heading>
          )}
        </div>
        <Button onClick={handleClick}>Reset</Button>
      </div>
      <Layout result={result} list={list} setList={setList} />
      <Calculate list={list} setList={setList} setResult={setResult} />
    </div>
  );
};

export default MainPage;
