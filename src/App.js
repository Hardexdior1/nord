import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import DynamicRoute from "./components/DynamicRoute";
import Vehicle from "./components/Vehicle";
import BuildYourVehicle from "./components/BuildYourVehicle";
import Board from "./components/Board";
import BuildDynamic from "./components/BuildDynamic";
import { useEffect, useState } from "react";
import SuccessfulPayment from "./components/SuccessfulPayment";
import OrderHistory from "./components/OrderHistory";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import Text from "./components/Text";
function App() {
  const test = [
    {
      id: 1,
      name: "Quwam",

      favouritGirls: [
        {
          type: "fair",
          price: 100,
        },
        {
          type: "black",
          price: 300,
        },
      ],
    },
    {
      id: 2,
      name: "moshood",

      favouritGirls: [
        {
          type: "slim",
          price: 600,
        },
        {
          type: "fat",
          price: 700,
        },
      ],
    },
  ];
  const savedData = localStorage.getItem("transactionHistory");
  const initialHistory = savedData ? JSON.parse(savedData) : [];

  // Initialize transactionHistory with the saved data
  const [transactionHistory, setTransactionHistory] = useState(initialHistory);
  console.log(transactionHistory);
  // Save transactionHistory to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "transactionHistory",
      JSON.stringify(transactionHistory)
    );

    window.scrollTo(0, 0);
  }, [transactionHistory]);

  return (
    <HelmetProvider>
      {/* Your routes and components */}
      <div className="relative">
        <Helmet>
          <title>Home-Nord </title>
          <meta name="description" content={`Vehicles`} />
        </Helmet>
        {/* <Text /> */}
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/vehicle/:name" element={<DynamicRoute />} />

            <Route path="/vehicles" element={<Vehicle />} />
            <Route path="/board" element={<Board />} />
            <Route path="/find-us" element={<Contact />} />

            <Route path="/build-your-vehicle" element={<BuildYourVehicle />} />
            <Route
              path="/build-vehicle/:name"
              element={
                <BuildDynamic
                  setTransactionHistory={setTransactionHistory}
                  transactionHistory={transactionHistory}
                />
              }
            />
            <Route
              path="/success"
              element={
                <SuccessfulPayment transactionHistory={transactionHistory} />
              }
            />
            <Route
              path="/order-history"
              element={<OrderHistory transactionHistory={transactionHistory} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>

        {/* <div className="flex justify-center my-10">
            <a
              href=""
              className="text-blue-600 hover:underline font-medium"
            >
              Refresh
            </a>
          </div> */}
      </div>
    </HelmetProvider>
  );
}

export default App;
