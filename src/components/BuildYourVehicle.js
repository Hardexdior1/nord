import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import norda9 from "../images/A9-Home-page-1-1536x1024.jpg";
import norda5 from "../images/Nord-A5-featured (1).jpg";
import norda7 from "../images/Nord-A7_1.jpg";
import nordD from "../images/Nord-Demir-featured (1).jpg";
import nordY from "../images/Nord-Yarn (1).jpg";
import nordT from "../images/Nord-Tripper (1).jpg";
import nordF from "../images/Nord-Flit_1 (1).jpg";
import nordM from "../images/Max.jpg";
import nordTu from "../images/slider4.jpg";
import nordTa from "../images/Nord_Tank (1).jpg";
import norda3 from "../images/a31.jpg";

const BuildYourVehicle = () => {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black">
      <Helmet>
        <title>Build Your Vehicle </title>
        <meta name="description" content={`Vehicles`} />
      </Helmet>
      <div
        className="relative px-3 w-full grid items-center justify-center h-[50vh] md:h-screen md:px-10"
        id="vehicle1"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-40 text-white "></div>{" "}
        <div className="grid gap-3 z-10 text-center">
          <h1 className="text-5xl z-5 font-bold text-white md:text-8xl">
            Build Your Vehicle
          </h1>
          <p className=" text-[#DCDCDC] text-1xl md:text-2xl">
            Explore our truly made nigeria branded automobiles
          </p>
        </div>
      </div>

      <div className="px-4 py-8 md:px-20 bg-[#00001a]">
        {/* <div className="px-4 text-center py-8 grid gap-6 md:px-8 md:grid-cols-2">
          {vehicles.map((car, index) => {
            return (
              <div key={index} className="relative">
                        <div className="absolute inset-0 bg-black opacity-40 text-white "></div>{" "}

                <div>
                  <Link to={`/vehicle/${car.name}`}>
                    <img src={car.img} alt={car.name} />
                  </Link>
                </div>
                <Link to={`/vehicle/${car.name}`}>
                  <h1 className="text-white text-3xl mt-3 font-bold absolute top-30">
                    {" "}
                    {car.name}{" "}
                  </h1>
                </Link>
              </div>
            );
          })}
        </div> */}
        <div className="px-4 text-center py-8 grid gap-10 md:px-8 md:grid-cols-2 md:gap-6">
          {vehicles.map((car, index) => {
            return (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-black opacity-40 text-white"></div>

                <div>
                  <img src={car.img} alt={car.name} />
                </div>

                <div className="f absolute inset-0 flex items-center justify-center flex-col gap-2 text-white">
                  <h1 className="text-white text-3xl ont-bold ">{car.name}</h1>

                  <button className="px-2 py-1 rounded-full border border-grey-800  hover:text-gray-800 hover:bg-white">
                    <Link to={`/build-vehicle/${car.name}`}>
                      Customize this car
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BuildYourVehicle;

//
