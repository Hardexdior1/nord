import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import PaystackPayment from "./PaystackPayment";

const BuildDynamic = ({ setTransactionHistory, transactionHistory }) => {
  const name = useParams();
  // console.log(name.name)
  const carType = [
    {
      id: 1,
      label: "Driving Mode",

      options: [
        {
          label: "Driving Mode",

          option: "Luxury (1.6T)",
          description: "Environmentally cost reflective offer",
          price: "₦46,000",
          imageUrl: "https://example.com/luxury-image.jpg",
        },
        {
          label: "Driving Mode",

          option: "Luxury Pro (2.0T)",
          description: "Be more, be better, be greater.",
          price: "₦49,000",
          imageUrl: "https://example.com/luxury-pro-image.jpg",
        },
      ],
    },
    {
      id: 2,
      label: "Transmission",

      options: [
        {
          label: "Transmission",
          option: "Manual Transmission",
          description: "Full control over the car performance.",
          imageUrl: "https://example.com/manual-mode.jpg",
          price: "12,000,",
        },
        {
          label: "Transmission",

          option: "Automatic Transmission",
          description: "Full control over the car performance.",
          imageUrl: "https://example.com/manual-mode.jpg",
          price: "10,000",
        },
      ],
    },
  ];
  const exterior = [
    {
      label: "Color",
      id: 3,
      options: [
        {
          option: "A9 White",
          label: "Color",
          color: "#FFFFFF",
          price: "₦0.00",
        },
        {
          option: "A9 Black",
          label: "Color",
          color: "#000000",
          label: "Color",
          price: "₦0.00",
        },
        { option: "A9 Gray", label: "Color", color: "#808080", price: "₦0.00" },
        { option: "A9 Red", label: "Color", color: "#FF0000", price: "₦0.00" },
        {
          option: "A9 Yellow",
          label: "Color",
          color: "#FFD700",
          price: "₦0.00",
        },
        {
          option: "A9 Purple",
          label: "Color",
          color: "#9B30FF",
          price: "₦0.00",
        },
      ],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const totalPrice = Object.values(selectedOptions).reduce((acc, current) => {
    const priceValue = parseFloat(current.price.replace(/₦|,/g, ""));
    return acc + priceValue;
  }, 0);
  const add = (carId, option) => {
    setSelectedOptions((previousSelected) => ({
      ...previousSelected,
      [carId]: option,
    }));
  };

  const steps = [
    {
      label: "Car",
      options: carType,
    },
    {
      label: "Exterior",
      options: exterior,
    },
    { label: "Delivery Info / Payment", options: null },
  ];

  const isComplete = () => {
    const currentOptions = steps[currentStep].options;
    if (!currentOptions) return true;
    return currentOptions.every((option) => selectedOptions[option.id]);
  };

  const handleNext = () => {
    if (!isComplete()) {
      alert("Please select an option for each item.");
      return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // console.log("Submit the form:", formData);
      alert("Form submitted!");
    }
  };
  const handlePrev = () => {
    // if (!isComplete()) {
    //   alert("Please select an option for each item.");
    //   return;
    // }
    if (currentStep == steps.length - 1 || currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <img src={a36} className="w-full h-80 object-cover" alt="car-img" />

      <div className=" bg-gray-900 py-20 px-6 md:px-20  text-white">
        <Helmet>
          <title> {name.name}-Nord Motion</title>
          <meta name="description" content={`About ${name.name}`} />
        </Helmet>

        <div className="flex items-center gap-10 overflow-x-scroll mb-10 md:overflow-x-hidden">
          {steps.map((item, index) => {
            return (
              <h1
                className={
                  index == currentStep
                    ? " py-2 px-10 border-b text-black font-bold shrink-0"
                    : "text-gray-400 font-bold shrink-0 px-10"
                }>
                {" "}
                {item.label}{" "}
              </h1>
            );
          })}
        </div>
        <div className="">
          {currentStep < steps.length - 1 ? (
            <div className="grid gap-8">
              {steps[currentStep].options?.map((car) => {
                return (
                  <div
                    key={car.id}
                    className={
                      car.options.length > 2
                        ? "py-6 bg-black  border-b px-4  items-top overflow-x-scroll md:overflow-x-hidden md:gap-40 md:flex "
                        : "py-6 bg-black border-b px-4 flex items-center gap-20 overflow-x-scroll md:overflow-x-hidden md:gap-40"
                    }>
                    <div>
                      <h1>
                        {car.label.toUpperCase()} {"=>"}{" "}
                      </h1>
                    </div>

                    <div
                      className={
                        car.options.length > 2
                          ? " grid grid-cols-2 gap-10 overflow-x-scroll md:overflow-x-hidden md:grid-cols-5"
                          : " flex items-center gap-40 "
                      }>
                      {car.options.map((opt) => {
                        return (
                          <div
                            key={opt.option}
                            className={`p-4 rounded cursor-pointer text-center   ${
                              selectedOptions[car.id]?.option === opt.option
                                ? "border-2 border-blue-500"
                                : "border border-transparent"
                            }`}
                            onClick={() => {
                              add(car.id, opt);
                            }}>
                            {opt.color ? (
                              <div
                                className="rounded-full shrink-0 mb-4"
                                style={{
                                  backgroundColor: opt.color,
                                  width: "100px",
                                  height: "100px",
                                }}>
                                {" "}
                              </div>
                            ) : (
                              ""
                            )}
                            <p className="shrink-0"> {opt.option} </p>{" "}
                            <p> {opt.price} </p>{" "}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              {" "}
              <PaystackPayment
                totalPrice={totalPrice}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                parameter={name.name}
                setTransactionHistory={setTransactionHistory}
                transactionHistory={transactionHistory}
                setCurrentStep={setCurrentStep}
              />{" "}
            </div>
          )}
        </div>

        {/* {currentStep < steps.length - 1 && (
          <button
            onClick={handleNext}
            className="bg-blue-500 mt-5 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600">
            {currentStep < steps.length - 1 ? "Next" : "Submit"}
          </button>
        )}

        {currentStep > steps.length - 1 && (
          <button
            onClick={handlePrev}
            className="bg-blue-500 mt-5 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600">
            prev
          </button>
        )} */}
        <div className="flex items-center justify-around ">
          {currentStep > 0 && (
            <button
              onClick={handlePrev}
              className="bg-blue-500 mt-5 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600">
              Prev
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <button
              onClick={handleNext}
              className="bg-blue-500 mt-5 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildDynamic;
