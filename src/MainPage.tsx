import React, { FC, useState } from "react";
import Calculate from "./Calculate";
import DivInput from "./DivInput";
import { allData } from "./dummyData";
import Heading from "./Heading";
import Layout from "./Layout";

const MainPage = () => {
  const newData = allData();
  const [list, setList] = useState(newData);
  const [result, setResult] = useState("");

  return (
    <div>
      {result.length > 0 && (
        <div className="fixed top-0 w-screen">
          <Heading>{`${result} wins`}</Heading>
        </div>
      )}
      <Layout result={result} list={list} setList={setList} />
      <Calculate list={list} setList={setList} setResult={setResult} />
    </div>
  );
};

export default MainPage;
