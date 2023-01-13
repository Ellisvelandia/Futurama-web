import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Card = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const res = await fetch(
          `https://api.sampleapis.com/futurama/characters/${id}`
        );
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCharacter();
  }, [id]);

  return (
    <>
      <section className="w-full h-full md:mt-20 mt-8 flex justify-center items-center">
        <div className="grid grid-cols-1 p-4 md:grid-cols-2 place-items-center">
          <div className="md:w-3/4">
            {character.images && (
              <motion.img
                src={`${character.images.main}`}
                alt={character.id}
                className="rounded-lg md:h-400px h-250px object-cover"
                initial={{ opacity: 0, y: "-100vh" }}
                animate={{ opacity: 1, y: 0 }}
              />
            )}
          </div>
          <div className="w-full md:my-8">
            {character.name && (
              <h1 className=" text-5xl font-bold text-white my-1 md:mb-8 md:text-6xl">
                {character.name.first} {character.name.middle}{" "}
                {character.name.last}
              </h1>
            )}
            <p className="text-gray-100 md:my-1 -my-2  text-2xl md:text-4xl leading-loose md:leading-relaxed">
              Age: {character.age}
            </p>
            <p className="text-gray-100 md:my-1 -my-2  text-2xl md:text-4xl leading-loose md:leading-relaxed">
              Gender: {character.gender}
            </p>
            <p className="text-gray-100 md:my-1 -my-2  text-2xl md:text-4xl leading-loose md:leading-relaxed">
              Homeplanet: {character.homePlanet}
            </p>
            <p className="text-gray-100 md:my-1 -my-2  text-2xl md:text-4xl leading-loose md:leading-relaxed">
              Occupation: {character.occupation}
            </p>
          </div>
          <Link
            to="/list"
            className="flex bg-[#459ED3] py-2 md:mb-0 justify-center px-6 rounded mt-2 text-white hover:bg-cyan-600 drop-shadow-2xl transition-all duration-200 active:scale-90"
          >
            &larr; Back
          </Link>
        </div>
      </section>
    </>
  );
};

export default Card;
