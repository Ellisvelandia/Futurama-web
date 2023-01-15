import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import poster from "../assets/poster.jpg";

const Video = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${poster})`,
        display: !showVideo ? "block" : "none",
      }}
      className="w-full h-full bg-cover bg-center flex__center"
    >
      <ReactPlayer
        url="https://youtu.be/PP_gho2e4Jk"
        controls
        onPlay={() => setShowVideo(true)}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Video;
