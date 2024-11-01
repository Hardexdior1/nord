import React from "react";
import logo from "../images/nord-white.png";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT",
      path: "board",
    },
    {
      name: "VEHICLES",
      path: "vehicles",
    },
    {
      name: "SERVICES",
      path: "service",
    },
    {
      name: "FIND US",
      path: "find-us",
    },
    {
      name: "BUILD YOUR VEHICLE",
      path: "build-your-vehicle",
    },

    
  ];
  return (
    <div className="relative hidden md:initial md:block ">
      <header
        className={`py-4 px-6 bg-transparent text-white font-semibold absolute left-0 right-0 top-0 z-20 grid gap-4 md:flex items-center justify-between z-10${
          isHomePage ? `` : `bg-black`
        }`}>
        <Link to='/'>
          <div className="">
            <img src={logo} alt="nord-logo" className="h-12 w-40" />
          </div>
        </Link>

        <ul className="grid gap-4 md:flex items-center gap-6">
          {navLinks.map((item) => {
            return (
              <Link to={`/${item.path}`}>
                <li key={item.name}> {item.name} </li>
              </Link>
            );
          })}
        </ul>
        <div>
          <FaSearch className="cursor-pointer" />
        </div>
      </header>
      {/* <FiMenu className="top-10 text-black right-10 " /> */}
    </div>
  );
};

export default NavBar;
