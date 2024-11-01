import React from "react";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import slide1 from "../images/slider1.jpg";
import slide2 from "../images/slider2.jpg";
import slide4 from "../images/slider3.jpg";
import slide8 from "../images/slider4.jpg";
import "swiper/css";
import { Link } from "react-router-dom";
const Slider = () => {
  const data = [
    {
      id: 1,
      name: "NORD YARN",
      sub_text: "When efficiency meets elegance",
      img: slide1,
    },
    {
      id: 2,
      name: "NORD TANK",
      sub_text: "A rugged and dependable partner",
      img: slide2,
    },
    {
      id: 3,
      name: "NORD A5",
      sub_text: "Where Style, Space, Economy and Performance Converage",
      img: slide4,
    },
    {
      id: 4,
      name: "NORD TUSK",
      sub_text: "When elegance meet utility",
      img: slide8,
    },
  ];
  return (
    <Swiper
      modules={[Autoplay]} // Add Autoplay module
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000, // Slide delay in ms
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      loop={true}
      pagination={{ clickable: true }}>
      <Swiper>
        {data?.map((item) => {
          return (
            <SwiperSlide>
              <div
                className="relative w-full grid items-center justify-center h-[50vh] md:h-screen md:justify-start md:pl-36"
                key={item.id}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
                {/* Overlay */}
                <div className="grid gap-10 relative z-10">
                  {" "}
                  {/* Ensure content is above the overlay */}
                  <div className="grid gap-3">
                    <h1 className="text-5xl z-5 font-bold text-white md:text-8xl">
                      {item.name}
                    </h1>
                    <p className="hidden md:block text-[#DCDCDC] text-2xl">
                      {item.sub_text}
                    </p>
                  </div>
                  <div>
                    <Link to={`/vehicle/${item.name}`}>
                      <button className="hidden md:block bg-white font-bold text-black border border-black px-14 py-4 rounded-full transition duration-300 ease-in-out hover:bg-black hover:text-white">
                        LEARN MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Swiper>
  );
};

export default Slider;
{/* <header
  className={`py-4 border px-6 text-white font-semibold absolute left-0 right-0 top-0 z-20 grid gap-4 md:flex items-center justify-between 
  ${isHomePage ? 'bg-transparent' : 'bg-black'}`}></header> */}