import React from "react";
import { Link } from "react-router-dom";

const ListCard = ({ spaces }) => {
  return (
    <>
      <div className="grid grid-cols-1 2xl:grid-cols-5 md:grid-cols-3 w-full gap-4 p-4 place-items-center">
        {spaces.map((space) => (
          <Link
            to={`/card/${space.id}`}
            key={space.id}
            className="shadow rounded my-2 p-4 w-full h-96 cursor-pointer flex-col justify-center items-center active:scale-90 hover:bg-[#459ED3]"
          >
            <h2 className="text-white text-xl font-black my-2">
              {space.name.first} {space.name.middle} {space.name.last}
            </h2>
            <img
              src={space.images.main}
              alt={space.id}
              className="w-60 h-60 mx-auto"
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ListCard;
