import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessfulPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!location.state || !location.state.canViewSuccess) {
      navigate("/");
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6 text-center">
      <Helmet>
        <title>Payment Successful </title>
        <meta name="description" content={`Vehicles`} />
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Payment Successfully Made!
        </h2>
        <Link
          to="/order-history"
          className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors duration-200">
          Go to Order History
        </Link>
      </div>
    </div>
  );
};

export default SuccessfulPayment;
