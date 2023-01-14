import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ListCharacter from "./pages/ListCharacter";
import Card from "./pages/Card";
import Info from "./pages/Info";
import { AnimatePresence } from "framer-motion";
import "./App.css";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list" element={<ListCharacter />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/card/:id" element={<Card />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
