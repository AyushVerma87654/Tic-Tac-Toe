import React, { useState } from "react";
import Button from "./Button";
import Calculate from "./Calculate";
import { allData } from "./dummyData";
import Heading from "./Heading";
import Layout from "./Layout";

const MainPage = () => {
  const newData = allData();
  const [list, setList] = useState(newData);
  const [result, setResult] = useState("");
  const [turn, setTurn] = useState(true);

  const handleClick = () => {
    setResult("");
    setList(newData);
    setList(newData);
    setTurn(true);
  };
  return (
    <div className="p-4 bg-blue-500 h-screen">
      <div className="flex justify-around mt-16">
        <Heading className="text-xl">Player 1 : X</Heading>
        <Heading className="text-xl">Player 2 : O</Heading>
      </div>
      <div className="flex h-24 items-center justify-around">
        <div className="w-40">
          {result.length > 0 && (
            <Heading className="m-0">{`${result} wins`}</Heading>
          )}
        </div>
        <Button onClick={handleClick}>Reset</Button>
      </div>
      <Layout
        turn={turn}
        setTurn={setTurn}
        result={result}
        list={list}
        setList={setList}
      />
      <Calculate list={list} setList={setList} setResult={setResult} />
    </div>
  );
};

export default MainPage;
