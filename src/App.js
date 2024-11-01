import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import "./App.css"
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import DynamicRoute from "./components/DynamicRoute";
import Vehicle from "./components/Vehicle";
import BuildYourVehicle from "./components/BuildYourVehicle";
import Board from "./components/Board";
import BuildDynamic from "./components/BuildDynamic";

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

  return (
    <HelmetProvider>
      {/* Your routes and components */}
      <div className="relative">
        {/* <Text /> */}
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/vehicle/:name" element={<DynamicRoute />} />

            <Route path="/vehicles" element={<Vehicle />} />
            <Route path="/board" element={<Board />} />

            <Route path="/build-your-vehicle" element={<BuildYourVehicle />} />
            <Route path="/build-vehicle/:name" element={<BuildDynamic />} />


          </Routes>
        </BrowserRouter>

       
      </div>

    </HelmetProvider>
  );
}

export default App;
