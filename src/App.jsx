import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ListCharacter from "./pages/ListCharacter";
import Card from "./pages/Card";
import Info from "./pages/Info";
import "./App.css";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<ListCharacter />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/card/:id" element={<Card />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
