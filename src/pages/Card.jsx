import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useTransform, useMotionValue } from "framer-motion";

const widthAnimation = {
  initial: { width: 0.8 },
  animate: { width: "100%" },
  exit: { width: "100%", x: window.innerWidth },
};

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

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
      <motion.section
        transition={{ ease: "easeInOut", duration: 0.1 }}
        variants={widthAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="grid place-content-center without media md:p-12"
        style={{ perspective: 10000 }}
      >
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 10 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          className="grid grid-cols-1 h-full md:grid-cols-2 place-items-center md:px-8 shadow rounded my-4 hover:bg-[#459ED3]"
        >
          <div className="w-full flex h-[400px] justify-center mt-4">
            {character.images && (
              <motion.img
                src={`${character.images.main}`}
                alt={character.id}
                className="rounded-lg w-[300px] object-fill"
                initial={{ opacity: 0, y: "-100vh" }}
                animate={{ opacity: 1, y: 0 }}
              />
            )}
          </div>
          <div className="sm:mx-0 m-4">
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
              Homeplanet: {character.homePlanet || "unknown"}
            </p>
            <p className="text-gray-100 md:my-1 -my-2  text-2xl md:text-4xl leading-loose md:leading-relaxed">
              Occupation: {character.occupation || "unknown"}
            </p>
          </div>
          <Link
            to="/list"
            className="flex bg-[#459ED3] py-2 md:mb-0 justify-center px-6 rounded mt-2 text-white hover:bg-cyan-600 drop-shadow-2xl transition-all duration-200 active:scale-90"
          >
            &larr; Back
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Card;
