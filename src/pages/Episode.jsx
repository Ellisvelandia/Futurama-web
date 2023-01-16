import axios from "axios";
import React, { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import episodeposter from "../assets/episodeposter.jpg";

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

  console.log(episodes);
  return (
    <PageTransition>
      <>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full place-content-center md:p-8">
          {episodes.map((episode) => {
            const { number, title, writers, originalAirDate, desc, id } =
              episode;
            return (
              <div
                key={id}
                className="relative shadow-xl rounded w-full h-full mb-8 p-6 font-semibold text-white hover:bg-[#459ED3]"
              >
                <h1 className="text-2xl font-bold">Episode: {title}</h1>
                <h2 className="text-3xl my-1">{number}</h2>
                <img
                  src={episodeposter}
                  alt="episodeposter"
                  className="rounded"
                  loading="lazy"
                />
                <p className="text-justify text-md mb-1 mt-2 pb-4">{desc}</p>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p>Writers:{writers}</p>
                  <p>OriginalAirDate: {originalAirDate}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </PageTransition>
  );
};

export default Episode;
