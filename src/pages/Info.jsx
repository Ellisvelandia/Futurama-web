import { useEffect, useState } from "react";
import React from "react";
import poster from "../assets/poster.jpg";

const Info = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.sampleapis.com/futurama/info");
      const data = await res.json();
      setInfo(data);
      console.log(data);
    };

    getData();
  }, []);
  return (
    <div className="relative w-full flex justify-center mt-8">
      {info.map((data) => {
        return (
          <div className="w-full flex flex-col justify-center align-center m-4 text-white font-black text-xl">
            <span className="text-white font-black text-4xl text-center ">
              synopsis
            </span>
            <img src={poster} alt="poster" className="rounded md:-mt-6 md:-mb-8 my-4 w-full px-2 md:p-20"/>
            <p className="md:object-fill object-contain md:-mt-6 md:-mb-8 my-4 px-2 md:p-20 w-full text-justify -h-56">
              {data.synopsis}
            </p>
            <span>yearsAired: {data.yearsAired}</span>
            {data.creators && data.creators.length > 0 && (
              <div className="my-8">
                <h1>Creators:</h1>
                {data.creators.map((creator) => (
                  <div className="my-4">
                    <a href={creator.url} target="_blank">
                      <p>
                        follow link for more information:{" "}
                        <span className="underline">{creator.name}</span>
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Info;
