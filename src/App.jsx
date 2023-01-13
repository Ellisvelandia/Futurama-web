import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home";
import ListSimpsons from "./pages/ListSimpsons";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<ListSimpsons />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
