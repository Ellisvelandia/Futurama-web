import axios from "axios";
import React, { useEffect, useState } from "react";

const ListSimpsons = () => {
  const [simpsons, setSimpsons] = useState([]);

  useEffect(() => {
    const getSimpsons = async () => {
      const res = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=40"
      );
      setSimpsons(res.data);
      console.log(res.data);
    };
    getSimpsons();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 place-content-center">
      {simpsons.map((simpson) => (
        <div key={simpson.id} className="w-60 h-72 shadow rounded m-20">
          <h2>{simpson.character}</h2>
          <img src={simpson.image} alt={simpson.id} className="w-60 h-72" />
          <p>{simpson.quote}</p>
        </div>
      ))}
    </div>
  );
};

export default ListSimpsons;
