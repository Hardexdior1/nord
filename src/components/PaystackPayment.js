import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const PaystackPayment = ({ totalPrice, selectedOptions, parameter }) => {
  const publicKey = "pk_test_b8b7d8af804f4f40170a151f7ba3173fc325c591"; // Replace with your Paystack public key
  const [transactionHistory, setTransactionHistory] = useState([]);
  console.log(transactionHistory);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const validate = email && name.trim() !== "";
  const amount = totalPrice * 100; // Convert NGN to kobo (Naira * 100)

  const formattedPrice = totalPrice.toLocaleString("en-US");

  // Function to handle payment success
  const onSuccess = (reference) => {
    let ref = reference.reference;
    const transactionDate = new Date();
    const newTransaction = {
      formattedPrice,
      email,
      name,
      ref,
      date: transactionDate.toLocaleString(),
      selectedOptions,
    };
    setTransactionHistory((prevHistory) => [...prevHistory, newTransaction]);

    alert(`Payment successful! Reference: ${reference.reference}`);
    console.log(reference);
  };

  const onClose = () => {
    alert("Payment closed without completing.");
    console.log("Payment dialog closed");
  };

  // Paystack button properties
  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay Now",
    onSuccess,
    onClose,
    metadata: {
      name,
      email,
    },
  };

  return (
    // <div className="p-6 mx-auto text-center font-sans border border-gray-200 rounded-lg shadow-lg">
    //   <div>
    //     {" "}
    //     <div className="mb-6">
    //     <h2 className="text-2xl font-semibold text-gray-800 mb-0">
    //       Fill the delivery form and pay
    //     </h2>
    //     <small> the payment is just for testing, nothing would be deducted from your bank , Thank you </small>
    //     </div>
    //     {/* Inputs to capture user email and name */}
    //     <input
    //       type="email"
    //       placeholder="Enter Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       className="w-full text-black mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //     />
    //     <input
    //       type="text"
    //       placeholder="Enter your fullname"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       className="w-full text-black mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //     />
    //     <input
    //       type="text"
    //       placeholder="Enter address"
    //       className="w-full text-black mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //     />
    //     <input
    //       type="number"
    //       placeholder="Enter phone number"
    //       className="w-full text-black mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //     />
    //   </div>

    //   {/* Displaying the dynamic total price */}
    //   <div>
    //     <h3 className="text-xl font-medium text-gray-700 mb-4">
    //       Total Price: ₦{formattedPrice}
    //     </h3>

    //     {Object.keys(selectedOptions).length > 0 && (
    //       <div>
    //         <h1>Car Type</h1>
    //         <p>{parameter}</p>
    //         <table>
    //           <tr className="overflow-x-scroll">
    //             {Object.values(selectedOptions).map((car, index) => (
    //               <th className="px-8 shrink-0"> {car.label} </th>
    //             ))}
    //           </tr>

    //           <tr className="overflow-x-scroll">
    //             {Object.values(selectedOptions).map((car, index) => (
    //               <td className="px-8 shrink-0"> {car.option} </td>
    //             ))}
    //           </tr>

    //         </table>
    //       </div>
    //     )}

    //     <PaystackButton
    //       {...componentProps}
    //       className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200 ease-in-out"
    //     />
    //   </div>
    // </div>
    <div className="p-6 mx-auto font-sans border border-gray-200 rounded-lg shadow-lg max-w-4xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form Section */}
        <div className="lg:w-1/2">
          <div className="text-center mb-6">
            <h2 className="text-1xl font-semibold text-gray-800 mb-2 md:text-2xl mb-0">
              Fill the delivery form and pay
            </h2>
            <small>
              The payment is just for testing, nothing will be deducted from
              your bank. Thank you!
            </small>
          </div>

          {/* Inputs to capture user email, name, address, and phone number */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-black mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter your fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-black mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Enter address"
            className="w-full text-black mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            placeholder="Enter phone number"
            className="w-full text-black mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Selected Options Section */}
        {Object.keys(selectedOptions).length > 0 && (
          <div className="lg:w-1/2 bg-gray-50 p-4 rounded-lg shadow-md text-center overflow-x-auto">
            <h1 className="text-xl font-semibold mb-4 text-black">
              Order Summary
            </h1>

            <div className="inline-block min-w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-gray-700 border-b font-medium">
                      Driving Mode
                    </th>
                    <th className="px-4 py-2 text-gray-700 border-b font-medium">
                      Transmission
                    </th>
                    <th className="px-4 py-2 text-gray-700 border-b font-medium">
                      Color
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {Object.values(selectedOptions).map((car, index) => (
                      <td
                        key={index}
                        className="px-4 py-2 text-gray-600 border-b">
                        {car.option}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {Object.values(selectedOptions).map((car, index) => (
                      <td
                        key={index}
                        className="px-4 py-2 text-gray-600 border-b">
                        {car.price}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Displaying the dynamic total price and Paystack Button */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                Total Price: ₦{formattedPrice}
              </h3>

              <PaystackButton
                {...componentProps}
                className={
                  validate
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200 ease-in-out"
                    : "bg-[#646464] pointer-events-none text-white font-bold py-2 px-6 rounded-lg transition duration-200 ease-in-out"
                }
              />
              <small className="block text-gray-400 mt-3 font-bold">
                Make sure you fill the delivery form before clicking on the pay
                button, or you won't be able to pay*
              </small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaystackPayment;
