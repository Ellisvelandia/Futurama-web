import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import futurama from "../assets/futurama.mp4";
import logo from "../assets/futurama.png";

const Home = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  return (
    <div className="relative without">
      <video
        ref={vidRef}
        src={futurama}
        type="video/mp4"
        loop
        controls={false}
        className="object-fill h-full w-full -h-20"
      />
      <div className="absolute inset-0 flex__center" style={{  background: "rgba(0,0,0,0.40)"}}>
        <div
          className="w-full h-full rounded-md border-solid border-[#a6c1d6] flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={80} className="cursor-pointer"/>
          ) : (
            <div>
              <img src={logo} alt="futurama" className="logo"/>
            <BsFillPlayFill color="#fff" fontSize={80} className="cursor-pointer" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
