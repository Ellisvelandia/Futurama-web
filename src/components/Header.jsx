import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/bender.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="sticky top-0 w-full h-20 flex justify-between items-center px-4 py-4 shadow-md z-10">
      <div className="flex justify-start w-full items-center">
        <img
          src={logo}
          alt="app logo"
          className="w-[150px] h-28 p-4"
        />
      </div>
      <ul className="flex flex-1 items-center w-full justify-end font-black text-white capitalize text-xl invisible md:visible drop-shadow-lg shadow-black">
        <li className="mx-2">
          <Link to="/" className="hover:text-[#459ED3]">
            Home
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/info" className="hover:text-[#459ED3]">
          synopsis
          </Link>
        </li>
        <li className="mx-2">
          <Link to="/list" className="hover:text-[#459ED3]">
            Characters
          </Link>
        </li>
      </ul>
      <div className="md:hidden">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          className="hamburgerMenu"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="" onClick={() => setToggleMenu(false)}>
            <ul className="">
              <li className="mx-2">
                <Link to="/" className="hover:text-[#FFF9BD]">
                  Home
                </Link>
              </li>
              <li className="mx-2">
                <Link to="/info" className="hover:text-[#FFF9BD]">
                  Info
                </Link>
              </li>
              <li className="mx-2">
                <Link to="/list" className="hover:text-[#FFF9BD]">
                  Characters
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
