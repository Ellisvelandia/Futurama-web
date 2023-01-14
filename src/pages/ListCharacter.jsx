import axios from "axios";
import React, { useEffect, useState } from "react";
import ListCard from "../components/ListCard";

const ListCharacter = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const getFuturama = async () => {
      const res = await axios.get(
        "https://api.sampleapis.com/futurama/characters"
      );
      setSpaces(res.data);
    };
    getFuturama();
  }, []);

  return <ListCard spaces={spaces} />;
};

export default ListCharacter;
