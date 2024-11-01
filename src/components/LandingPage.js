import React, { useState } from "react";
import Slider from "./Slider";
import Product from "./Product";
const LandingPage = () => {
  const carType = [
    {
      id: 1,
      label: "Driving Mode",

      options: [
        {
          option: "Luxury (1.6T)",
          description: "Environmentally cost reflective offer",
          price: "₦46,500,000",
          imageUrl: "https://example.com/luxury-image.jpg",
        },
        {
          option: "Luxury Pro (2.0T)",
          description: "Be more, be better, be greater.",
          price: "₦49,000,000",
          imageUrl: "https://example.com/luxury-pro-image.jpg",
        },
      ],
    },
    {
      id: 2,
      label: "Transmission",

      options: [
        {
          option: "Manual Transmission",
          description: "Full control over the car performance.",
          imageUrl: "https://example.com/manual-mode.jpg",
          price: "12,000,000",
        },
        {
          option: "Automatic Transmission",
          description: "Full control over the car performance.",
          imageUrl: "https://example.com/manual-mode.jpg",
          price: "10,000,000",
        },
      ],
    },
  ];

  return (
    <div>
      <Slider />

      <table>
        <tr>
          <th>company</th>
          <th> contact </th>
        </tr>

        <tr>
          <td>ojutu</td>
          <td>alhaji street</td>
        </tr>
      </table>

      <table>
        <tr>
          {carType.map((item) => {
            return <th className="px-5">{item.label}</th>;
          })}
        </tr>
        <tr>
          {carType[0].options.map((car) => {
            return <td className="px-5"> {car.option} </td>;
          })}
        </tr>
      </table>
    </div>
  );
};

export default LandingPage;
