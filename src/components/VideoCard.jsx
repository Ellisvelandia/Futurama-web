import episodeposter from "../assets/episodeposter.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { FiPlay } from "react-icons/fi";
import TextTruncate from "react-text-truncate";
import { useState } from "react";

const VideoCard = ({ episodes }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className="w-full mx-auto bg-body textShadows"
      style={{ textDecoration: "none", color: "white" }}
    >
      <Carousel
        showThumbs={false}
        autoPlay={false}
        transitionTime={6}
        infiniteLoop={true}
        showStatus={false}
        className="w-full"
      >
        {episodes.map((episode) => (
          <div key={episode.id} className="h-fit">
            <div className="object-cover w-full without">
              <img
                src={episodeposter}
                alt={episode.title}
                className="m-auto lg:aspect-video w-full h-full blur-0 "
                loading="lazy"
              />
            </div>
            <div className="absolute lg:p-20 py-16 px-4 bottom-0 flex flex-col w-full posterImage">
              <div className="font-black lg:text-5xl text-3xl my-2 lg:text-left w-full text-center flex flex-col">
                Episode-{episode.title}
                <span>{episode.number}</span>
              </div>
              <div className="md:text-3xl text-base my-2 md:text-left text-justify textShadows md:mx-0 mx-4">
                <TextTruncate
                  line={2}
                  element="span"
                  truncateText={isExpanded ? "..less" : " ...more"}
                  text={episode.desc}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="cursor-pointer"
                />
                <div className={`text-desc ${isExpanded ? "" : "hidden"}`}>
                  {episode.desc}
                </div>
              </div>
              <div className="md:w-1/2 w-full flex justify-center md:text-left md:justify-start text-justify  text-md mb-1 md:text-lg font-semibold">
                Writers: {episode.writers}
              </div>
              <div className="md:w-1/2 w-full md:text-left text-justify text-md flex md:justify-start justify-center mb-1 md:text-lg font-semibold">
                OriginalAirDate: {episode.originalAirDate}
              </div>
              <div className="flex gap-4 mt-2 justify-center w-full">
                <Link to={`/episodevideo/${episode.id}`} key={episode.id}>
                  <button
                    className="md:text-lg text-base p-3 rounded-md flex justify-center bg-[#90a8bb] hover:bg-[#9aafc0] active:scale-90"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Play
                    <FiPlay className="w-5 mt-1.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCard;
