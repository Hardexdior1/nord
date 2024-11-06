
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
// import Work from "./Work";

const OrderHistory = ({ transactionHistory }) => {
  console.log(transactionHistory);

 
  return (
    <div className="p-6 bg-gray-100 min-h-screen py-40">
     {/* <Work /> */}
      <Helmet>
        <title>Order History</title>
        <meta name="description" content="Vehicle Order History" />
      </Helmet>
      {transactionHistory.length > 0 ? (
        <div>
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Order History
          </h1>

          <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-gray-700 border-b font-medium whitespace-nowrap min-w-[80px]">
                      No:
                    </th>
                    <th className="px-4 py-2 text-gray-700 border-b font-medium whitespace-nowrap min-w-[150px]">
                      Owner's Name
                    </th>
                    <th className="px-4 py-2 text-gray-700 border-b font-medium whitespace-nowrap min-w-[150px]">
                      Vehicle Name
                    </th>
                    <th className="px-4 py-2 text-gray-700 border-b font-medium whitespace-nowrap min-w-[200px]">
                      Owner's Email
                    </th>
                    <th className="px-4 py-2 text-gray-700 border-b font-medium whitespace-nowrap min-w-[120px]">
                      Date
                    </th>
                    <th className="px-4 py-2 text-gray-700 border-b font-medium whitespace-nowrap min-w-[100px]">
                      Time
                    </th>
                    <th className="px-4 py-2 text-gray-700 border-b font-medium whitespace-nowrap min-w-[100px]">
                      Amount Paid
                    </th>
                    <th className="px-4 py-2 text-gray-700 border-b font-medium whitespace-nowrap min-w-[150px]">
                      Reference
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactionHistory.map((car, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {car.name || "Nord A3"}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {car.parameter || "Nord A3"}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {car.email}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {new Date(car.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {new Date(car.date).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {car.formattedPrice}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">{car.ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center text-black font-bold text-2xl md:text-3xl">
          No order history yet
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
