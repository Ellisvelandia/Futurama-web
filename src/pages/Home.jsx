import React, { useState } from "react";
import PageTransition from "../components/PageTransition";
import Video from "../components/Video";
import poster from "../assets/poster.jpg";
import futurama from "../assets/futurama.png";

const Home = () => {
  const [showImage, setShowImage] = useState(true);

  return (
    <PageTransition>
      <div className="relative without" onClick={() => setShowImage(false)}>
        <div
          className="w-full h-full object-fill flex__center absolute inset-0 z-99"
          style={{ background: "rgba(0,0,0,0.65)" }}
        >
          <Video />
          {showImage && (
            <>
              <img src={futurama} alt="logo"
              className="top-5"
              style={{ position: "absolute", zIndex: 2}}
              />
            <img
              src={poster}
              alt="poster"
              style={{ position: "absolute", zIndex: 1, objectFit: "fill", background:"no-repeat"}}
              className="without w-full"
            />
            </>
            )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
