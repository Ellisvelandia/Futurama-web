import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EpisodeVideo = () => {
  const [videos, setVideos] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await axios.get(
          `https://api.sampleapis.com/futurama/episodes/${id}`
        );
        setVideos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getVideos();
  }, [id]);

  const { number, title } = videos;
  const src = "https://www.youtube.com/embed/PP_gho2e4Jk";

  return (
    <div className="w-full flex flex-col justify-center textShadows">
      <h1 className="text-white mt-4 w-full  md:text-5xl text-2xl">
        Episode: {title}
      </h1>
      <p className="text-3xl font-bold text-white">{number}</p>
      <iframe
        width="100%"
        height="100%"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="md:aspect-video aspect-square lg:h-[580px] lg:mt-2 mt-16 md:px-20 w-full"
      ></iframe>
    </div>
  );
};

export default EpisodeVideo;
