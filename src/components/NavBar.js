// // import React from "react";
// // import logo from "../images/nord-white.png";
// // import { FaSearch } from "react-icons/fa";
// // import { FiMenu } from "react-icons/fi";
// // import { Link } from "react-router-dom";
// // import { useLocation } from "react-router-dom";

// // const NavBar = () => {
// //   const location = useLocation();
// //   const isHomePage = location.pathname === "/";

// //   const navLinks = [
// //     {
// //       name: "HOME",
// //       path: "/",
// //     },
// //     {
// //       name: "ABOUT",
// //       path: "board",
// //     },
// //     {
// //       name: "VEHICLES",
// //       path: "vehicles",
// //     },
// //     {
// //       name: "SERVICES",
// //       path: "service",
// //     },
// //     {
// //       name: "FIND US",
// //       path: "find-us",
// //     },
// //     {
// //       name: "BUILD YOUR VEHICLE",
// //       path: "build-your-vehicle",
// //     },

    
// //   ];
// //   return (
// //     <div className="relative  md:initial md:block ">
// //       <header
// //         className={`py-4 px-6 bg-transparent text-white font-semibold absolute left-0 right-0 top-0 z-20 grid gap-4 md:flex items-center justify-between z-10${
// //           isHomePage ? `` : `bg-black`
// //         }`}>
// //         <Link to='/'>
// //           <div className="">
// //             <img src={logo} alt="nord-logo" className="h-12 w-40" />
// //           </div>
// //         </Link>

// //         <ul className="grid gap-4 md:flex items-center gap-6">
// //           {navLinks.map((item) => {
// //             return (
// //               <Link to={`/${item.path}`}>
// //                 <li key={item.name}> {item.name} </li>
// //               </Link>
// //             );
// //           })}
// //         </ul>
// //         <div>
// //           <FaSearch className="cursor-pointer" />
// //         </div>
// //       </header>
// //       {/* <FiMenu className="top-10 text-black right-10 " /> */}
// //     </div>
// //   );
// // };

// // export default NavBar;
// import React, { useState, useEffect } from "react";
// import logo from "../images/nord-white.png";
// import { FaSearch } from "react-icons/fa";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link, useLocation } from "react-router-dom";

// const NavBar = () => {
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     { name: "HOME", path: "/" },
//     { name: "ABOUT", path: "board" },
//     { name: "VEHICLES", path: "vehicles" },
//     { name: "ORDER-HISTORY", path: "order-history" },
//     { name: "FIND US", path: "find-us" },
//     { name: "BUILD YOUR VEHICLE", path: "build-your-vehicle" },
//   ];

//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Set background on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative">
//       <header
//         className={`py-4 px-6 font-semibold fixed left-0 right-0 top-0 z-30 flex items-center justify-between transition-colors duration-300 ${
//           scrolled || !isHomePage ? "bg-black mb-40  " : "bg-transparent"
//         }`}
//       >
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="nord-logo" className="h-12 w-40" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-6 text-white">
//           {navLinks.map((item) => (
//             <li key={item.name}>
//               <Link to={`/${item.path}`} className="hover:underline">
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Search Icon */}
//         <div className="hidden md:block text-white">
//           <FaSearch className="cursor-pointer" />
//         </div>

//         {/* Mobile Menu Toggle Button */}
//         <div className="md:hidden z-30 flex items-center text-white">
//           <button onClick={toggleMenu} className="z-30">
//             {isOpen ? <FiX className="text-2xl z-30" /> : <FiMenu className="text-2xl z-30" />}
//           </button>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-x-0 top-0 bg-black z-30 text-white flex flex-col items-center justify-start transition-all duration-300 transform ${
//           isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
//         } md:hidden`}
//         style={{ maxHeight: '50vh' }} // Adjust this value to change the height
//       >
//         <ul className="flex flex-col items-center gap-4 text-lg overflow-y-auto pt-16 pb-16 relative"> 
//         <button onClick={toggleMenu} className="z-30 absolute right-0">
//             {isOpen ? <FiX className="text-2xl z-30" /> : <FiMenu className="text-2xl z-30" />}
//           </button>{/* Add padding-top to account for header */}
//           {navLinks.map((item) => (
//             <li key={item.name}>
//               <Link
//                 to={`/${item.path}`}
//                 onClick={() => setIsOpen(false)}
//                 className="hover:underline"
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//           <li>
//             <FaSearch className="cursor-pointer" />
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
import React, { useState, useEffect } from "react";
import logo from "../images/nord-white.png";
import { FaSearch } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/board" },
    { name: "VEHICLES", path: "/vehicles" },
    { name: "ORDER-HISTORY", path: "/order-history" },
    { name: "FIND US", path: "/find-us" },
    { name: "BUILD YOUR VEHICLE", path: "/build-your-vehicle" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Set background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <header
        className={`py-4 px-6 font-semibold fixed left-0 right-0 top-0 z-30 flex items-center justify-between transition-colors duration-300 ${
          scrolled || !isHomePage ? "bg-black mb-40" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="nord-logo" className="h-12 w-40" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-white">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link to={item.path} className="hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Icon */}
        <div className="hidden md:block text-white">
          <FaSearch className="cursor-pointer" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden z-30 flex items-center text-white">
          <button onClick={toggleMenu} className="z-30">
            {isOpen ? <FiX className="text-2xl z-30" /> : <FiMenu className="text-2xl z-30" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-0 bg-black z-30 text-white flex flex-col items-center justify-start transition-all duration-300 transform ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        } md:hidden`}
        style={{ maxHeight: '50vh' }}
      >
        <ul className="flex flex-col items-center gap-4 text-lg overflow-y-auto pt-16 pb-16 relative">
          <button onClick={toggleMenu} className="z-30 absolute right-0">
            {isOpen ? <FiX className="text-2xl z-30" /> :""}
          </button>
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <FaSearch className="cursor-pointer" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
