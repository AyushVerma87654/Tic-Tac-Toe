import React from "react";
import Last from "./Last";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Heading from "./Heading";

const App = () => {
  return (
    <div>
      <Heading className="bg-black m-0 fixed top-0 h-20 w-full">
        Welcome to my Tic Tac Toe Game...
      </Heading>
      <Routes>
        <Route index element={<Last />} />
        <Route path="/game" element={<MainPage />} />
      </Routes>
      <Heading className="bg-black m-0 fixed bottom-0 h-20 w-full">
        Created & Powered By Ayush
      </Heading>
    </div>
  );
};

export default App;
