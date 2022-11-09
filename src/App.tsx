import React from "react";
import Last from "./Last";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
// import Heading from "./Heading";

const App = () => {
  return (
    <div>
      <div className="bg-black text-xl flex justify-center items-center text-rose-500 font-bold fixed top-0 h-20 w-full">
        Welcome to my Tic Tac Toe Game...
      </div>
      <Routes>
        <Route index element={<Last />} />
        <Route path="/game" element={<MainPage />} />
      </Routes>
      <div className="bg-black text-xl flex justify-center items-center text-rose-500 font-bold fixed bottom-0 h-20 w-full">
        Created & Powered By Ayush
      </div>
    </div>
  );
};

export default App;
