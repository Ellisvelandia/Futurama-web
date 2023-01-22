import axios from "axios";
import React, { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import VideoCard from "../components/VideoCard";

const Episode = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const res = await axios.get(
        "https://api.sampleapis.com/futurama/episodes"
      );
      setEpisodes(res.data);
    };

    getCast();
  }, []);

  return (
    <PageTransition>
      <VideoCard episodes={episodes} key={episodes.id} />
    </PageTransition>
  );
};

export default Episode;
