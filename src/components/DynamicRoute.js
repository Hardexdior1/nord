import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import a31 from "../images/a31.jpg";
import a32 from "../images/a32.jpg";
import a33 from "../images/a33.jpg";
import a34 from "../images/a34.jpg";
import a35 from "../images/a35.jpg";
import a36 from "../images/a36.jpg";
import slide1 from "../images/slider1.jpg";
import slide2 from "../images/slider2.jpg";
import slide3 from "../images/slider3.jpg";
import slide4 from "../images/slider4.jpg";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Helmet } from "react-helmet-async";

const DynamicRoute = () => {
  const carData = [
    {
      name: "Tesla Model S",
      description: `The Tesla Model S is an all-electric sedan that has revolutionized the automotive industry with its cutting-edge technology and performance. The car features a sleek, futuristic design and is known for its impressive range of over 400 miles on a single charge. It offers one of the fastest accelerations among electric cars, reaching 0 to 60 mph in just under 2 seconds in the Plaid version. Inside, the cabin is spacious and modern, with a 17-inch touchscreen interface for controlling most of the car's functions. The Model S also includes advanced safety features such as Autopilot, making it one of the safest cars on the road.`,
      img: a31,

      images: [
        {
          image: slide1,
        },
        {
          image: slide2,
        },
        {
          image: slide3,
        },
        {
          image: slide4,
        },
      ],
    },
    {
      name: "NORD A5",
      description: `The Porsche 911 is a sports car legend that has set the standard for driving performance and precision engineering for over 50 years. The car is known for its rear-engine layout, sharp handling, and potent turbocharged flat-six engine that delivers exhilarating performance on both the track and the street. Inside, the 911 offers a mix of luxury and modern technology, with premium materials and a user-friendly infotainment system. The car's iconic design has remained largely unchanged, yet modernized over the years. The Porsche 911 is a dream car for driving enthusiasts seeking unmatched agility and speed.`,
      img: a36,
      images: [
        {
          image: a31,
        },
        {
          image: a32,
        },
        {
          image: a33,
        },
        {
          image: a34,
        },
      ],
    },
    {
      name: "NORD A9",
      description: `The Porsche 911 is a sports car legend that has set the standard for driving performance and precision engineering for over 50 years. The car is known for its rear-engine layout, sharp handling, and potent turbocharged flat-six engine that delivers exhilarating performance on both the track and the street. Inside, the 911 offers a mix of luxury and modern technology, with premium materials and a user-friendly infotainment system. The car's iconic design has remained largely unchanged, yet modernized over the years. The Porsche 911 is a dream car for driving enthusiasts seeking unmatched agility and speed.`,
      img: a36,
      images: [
        {
          image: a31,
        },
        {
          image: a32,
        },
        {
          image: a33,
        },
        {
          image: a34,
        },
      ],
    },
    {
      name: "BMW X5",
      description: `The BMW X5 is a luxury SUV that combines performance, versatility, and comfort in one stylish package. Known for its powerful engine options, including a turbocharged inline-six and V8, the X5 offers exceptional handling and a smooth ride both on and off the road. The interior is designed with high-quality materials, providing a premium feel with modern technology like a 12.3-inch touchscreen, digital cockpit, and numerous driver-assistance features. With ample cargo space and a comfortable ride for both driver and passengers, the BMW X5 is a great choice for those looking for a family-friendly yet dynamic SUV.`,
      img: a32,
    },
    {
      name: "Audi A8",
      description: `The Audi A8 is a full-size luxury sedan that delivers an elegant blend of power, technology, and opulence. The car comes equipped with a variety of engine options, including a turbocharged V6 and V8, offering a smooth yet powerful driving experience. The A8's interior is filled with premium materials, cutting-edge tech like a dual touchscreen infotainment system, and features such as massaging seats. Audi's signature Quattro all-wheel-drive system provides excellent traction, while the adaptive air suspension ensures a comfortable ride. Whether you're cruising on the highway or navigating city streets, the Audi A8 provides a refined and comfortable experience.`,
      img: a33,
    },
    {
      name: "Ford Mustang",
      description: `The Ford Mustang is an American muscle car icon that has been thrilling drivers for decades. Known for its aggressive styling and powerful engine options, including the legendary V8, the Mustang delivers a thrilling driving experience. It offers a perfect blend of performance and modern features, with updated versions featuring a sleek design, high-tech infotainment system, and various driver-assistance features. The Mustang is available in both coupe and convertible styles, making it a versatile choice for car enthusiasts. Whether you're on the track or cruising through town, the Ford Mustang always stands out.`,
      img: a35,
    },
    {
      name: "Mercedes-Benz G-Class",
      description: `The Mercedes-Benz G-Class, often referred to as the G-Wagon, is an iconic luxury SUV known for its distinctive boxy shape and off-road capabilities. Despite its rugged design, the G-Class offers a plush interior with top-tier luxury appointments, including leather upholstery and advanced technology. The car is powered by a potent V8 engine, which ensures strong acceleration and power both on and off the road. The G-Class also comes with a wide range of customizable features, making it a favorite among celebrities and car enthusiasts alike. With its commanding presence, the G-Wagon is a true status symbol.`,
      img: a34,
    },
  ];
  const name = useParams();

  const filtered = carData.filter(
    (item) => item.name.toLowerCase() == name.name.toLowerCase()
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="bg-black py-40 px-6 md:px-20  text-white">
      <Helmet>
        <title> {name.name}-Nord Motion</title>
        <meta name="description" content={`About ${name.name}`} />
      </Helmet>
      {filtered.length > 0 ? (
        <div>
          {filtered.map((car) => {
            return (
              <div className=" md:grid gap-8 grid-cols-2">
                <div className="w-full">
                  {/* Mobile heading */}
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 md:hidden">
                    {car.name}
                  </h1>

                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{ clickable: true }}>
                    {car?.images.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-center bg-cover mb-5 md:mb-0"
                          style={{
                            backgroundImage: `url(${item.image})`,
                          }}>
                          <div className="flex items-center justify-center h-full bg-black bg-opacity-40 text-white font-bold"></div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {/* Car Details */}
                <div className="flex flex-col gap-4">
                  {/* Desktop heading */}
                  <h1 className="text-3xl hidden md:text-4xl font-bold md:block">
                    {car.name}
                  </h1>

                  <h1 className="text-2xl mt-5 md:text-3xl font-semibold mt-0">
                    About Car
                  </h1>
                  <p>{car.description}</p>
                  <div>
                    <Link to={`/build-vehicle/${car.name}`}>
                      <button className="inline-block px-8 py-2 rounded border border-gray-400 bg-white font-semibold text-black">
                        Customize this car
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div className=" md:grid gap-8 grid-cols-2">
            <div className="w-full">
              {/* Mobile heading */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4 md:hidden">
               { name.name}
              </h1>

              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                pagination={{ clickable: true }}>
                {carData[0]?.images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-center bg-cover mb-5 md:mb-0"
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}>
                      <div className="flex items-center justify-center h-full bg-black bg-opacity-40 text-white font-bold"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Car Details */}
            <div className="flex flex-col gap-4">
              {/* Desktop heading */}
              <h1 className="text-3xl hidden md:text-4xl font-bold md:block">
                {name.name}
              </h1>

              <h1 className="text-2xl mt-5 md:text-3xl font-semibold mt-0">
                About Car
              </h1>
              <p>{carData[0].description}</p>
              <div>
                <Link to={`/build-vehicle/${name.name}`}>
                  <button className="inline-block px-8 py-2 rounded border border-gray-400 bg-white font-semibold text-black">
                    Customize this car
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicRoute;
