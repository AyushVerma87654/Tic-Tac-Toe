import React from "react";
import Last from "./Last";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Last />} />
        <Route path="/game" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
