import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import norda9 from "../images/A9-Home-page-1-1536x1024.jpg";
import norda5 from "../images/Nord-A5-featured (1).jpg";
import norda7 from "../images/Nord-A7_1.jpg"
import nordD from "../images/Nord-Demir-featured (1).jpg"
import nordY from "../images/Nord-Yarn (1).jpg"
import nordT from "../images/Nord-Tripper (1).jpg"
import nordF from "../images/Nord-Flit_1 (1).jpg"
import nordM from "../images/Max.jpg"
import nordTu from "../images/slider4.jpg"
import nordTa from "../images/Nord_Tank (1).jpg"
import norda3 from "../images/a31.jpg"




const Vehicle = () => {
  const vehicles = [
    {
      name: "Nord a9",
      img: norda9,
    },
    {
      name: "Nord a5",
      img: norda5,
    },
    {
      name: "Nord a7",
      img: norda7,
    },
    {
      name: "Nord Demir",
      img: nordD,
    },
    {
      name: "Nord Yarn",
      img: nordY,
    },
    {
      name: "Nord Tripper",
      img: nordT,
    },
    {
      name: "Nord FLit",
      img: nordF,
    },
    {
      name: "Nord Max",
      img: nordM,
    },
    {
      name: "Nord Tusk",
      img: nordTu,
    },
    {
      name: "Nord Tank",
      img: nordTa,
    },
    {
      name: "Nord A3",
      img: norda3,
    },
   
  ];

  return (
    <div className="bg-black">
      <Helmet>
        <title> Vehicles-Nord Motion</title>
        <meta name="description" content={`Vehicles`} />
      </Helmet>
      <div
        className="relative w-full grid items-center justify-center h-[50vh] md:h-screen md:px-10"
        id="vehicle"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-40 text-white "></div>{" "}
        <div className="grid gap-3 z-10">
          <h1 className="text-5xl z-5 font-bold text-white md:text-8xl">
            Vehicles
          </h1>
          <p className="hidden md:block text-[#DCDCDC] text-2xl">
            Explore our truly made nigeria branded automobiles
          </p>
        </div>
      </div>

      <div className="px-4 -mt-20 md:px-20 absolute bg-black">
        <div className="bg-white  px-4 text-center py-8 grid gap-6 md:px-8 md:grid-cols-2 xl:grid-cols-3">
          {vehicles.map((car, index) => {
            return (
              <div key={index}   className="group relative overflow-hidden transition duration-300 ease-in-out hover:scale-105"
>
                <div>
                  <Link to={`/vehicle/${car.name}`}>
                    <img src={car.img} alt={car.name} />
                  </Link>
                </div>
                <Link to={`/vehicle/${car.name}`}>
                  <h1 className="text-[#000] text-3xl mt-3 font-bold">
                    {" "}
                    {car.name}
                  </h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
