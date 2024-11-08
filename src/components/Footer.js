import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footer = [
    {
      title: "Headquarters",
      address:
        "Nord Automotive complex, Danfodio Boulevard, University Of Lagos, Akoka, Lagos Nigeria",
    },
  ];
  const carNames = [
    "Nord Flit",
    "Nord Max",
    "Nord A3",
    "Nord A5",
    "Nord A7",
    "Nord Demir",
    "Nord Tank",
    "Nord Tusk",
    "Nord Tripper",
  ];

  return (
    <div className="p-10 bg-black text-gray-400">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Address and Contact Section */}
    <div>
      {footer.map((item, index) => (
        <div key={index} className="mb-8">
          <h1 className="text-2xl font-bold mb-4 text-white">{item.title}</h1>
          <p className="mb-2">{item.address}</p>
          <div className="space-y-1">
            <p>T: +2348149799150</p>
            <p>E: info@nordmotion.com</p>
            <p>
              W:{" "}
              <a
                href="https://nordmotion.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                www.nordmotion.com
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Vehicles Section */}
    <div>
      <h1 className="text-2xl font-bold mb-4 text-white">Vehicles</h1>
      <ul className="space-y-2">
        {carNames.map((item, index) => (
          <li key={index}>
            <Link
              to={`/vehicle/${item}`}
              className="hover:text-white transition duration-200"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Quick Links Section */}
    <div>
      <h1 className="text-2xl font-bold mb-4 text-white">Quick Links</h1>
      <ul className="space-y-2">
        <li>
          <Link
            to="/build-your-vehicle"
            className="hover:text-white transition duration-200"
          >
            Build Your Vehicle
          </Link>
        </li>
        {/* Add more quick links here if needed */}
      </ul>
    </div>
  </div>
</div>

  );
};

export default Footer;
