import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Link to="/list">
        <p>List characters</p>
      </Link>
    </div>
  );
};

export default Home;
