import React from "react";
import ajayi from "../images/Oluwatobi-Ajayi.jpg";
import shola from "../images/Shola-Adeniyi.jpg";
import samson from "../images/Samson-Esemuede.jpg";
import { Helmet } from "react-helmet-async";

const Board = () => {
  const board = [
    {
      img: ajayi,
      name: "Ajayi Joshua Oluwatobi MBA FICA",
      title: "Chairman/CEO",
      desc: "Oluwatobi is a widely creative and astute entrepreneur, he is the founder of Nord Automobiles Limited, one of the first Nigerian automobile brands and Africa’s premier automobile corporation.He started his career at Mercedes-Benz Nigeria, growing very fast to become the head of division (vans) and later co-founded Jetvan, an authorised dealer of Mercedes-Benz.Oluwatobi is among the most influential people in the Nigerian Auto Industry, winning so many local and international awards and recognitions for his contributions to the automotive industry in Nigeria and Africa. He was listed by Forbes as one of the most promising young entrepreneurs in Africa for 2018",
    },
    {
      name: "Shola Adeniyi",
      img: shola,
      title: "Director",
      desc: "Shola is a first-class graduate of Mechanical Engineering, University College London. He is an expert in financial analysis, specializing in the fixed income securities market. He has worked in several financial institutions, most notably are Barclays Capital London, in the credit trading department as an European High Yield credit trader and at BGC Partners London as Sub Saharan Africa Fixed Income and Currency market dealer. He is currently the CEO of Krosk Parners Limited, an inter-dealer fixed income broker in Nigeria.",
    },
    {
      name: "Samson Esemuede, CFA",
      img: samson,
      title: "Director",
      desc: "Samson is a first-class graduate of Biochemistry, University College London. He is an experienced investment banker with speciality in Equities Sales and Trading. He has risen through the ranks in his career – as a Vice President covering Emerging Markets Equity desk at Deutsche Bank, London, and was responsible for Eastern European, Middle East and Africa, Emerging Markets Equity at Citi Bank, London. He is now currently the CEO of Zrosk Investment Managers, Nigeria.",
    },
  ];

  return (
    <div className="bg-black">
      <Helmet>
        <title>Board of Directors </title>
        <meta name="description" content={`Board`} />
      </Helmet>
      <div
        className="relative px-3 w-full grid items-center justify-center h-[50vh] md:h-screen md:px-10"
        id="vehicle2"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-40 text-white "></div>{" "}
        <div className="grid gap-3 z-10 text-center">
          <h1 className="text-5xl z-5 font-bold text-white md:text-8xl">
            BOARD OF DIRECTORS
          </h1>
        </div>
      </div>

      <div className="px-4 py-8 md:px-20 bg-gray-900 text-gray-200">
        <div className="px-4  py-8 grid gap-10 ">
          {board.map((car, index) => {
            return (
              <div key={index} className="md:flex gap-10">

                <div className="w-full border mb-4 md:mb-0">
                  <img className="w-full" src={car.img} alt={car.name} />
                </div>

                <div>
                <h1 className="text-[#e6e6e6] text-2xl font-bold ">{car.name}</h1>
                <p className="text-[#757575]"> {car.title} </p>


                <p className="mt-5 text-[#757575]"> {car.desc} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
