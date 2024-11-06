import React, { useState } from "react";

const Work = () => {
  const [value, setValue] = useState("");
  const change = (e) => {
    setValue(e.target.value);
  };

  const roomPrice = 10;
  const [numberOfPeople, setNumberOfPeople] = useState(Number);
  const changePeopleComing = (e) => {
    setNumberOfPeople(e.target.value);
  };
  const dummy = [
    {
      name: "1 bedroom flat",
      price: 100,
    },
    {
      name: "1 bedroom flat",
      price: 200,
    },
  ];
  return (
    <div>
      <input type="date" onChange={change} />
      <h1> {value ? value : ""} </h1>

      <h1 className="text-3xl font-bold">
        {" "}
        {value !== "" ? (
          <div>
            {new Date(value).toLocaleDateString("en-Us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        ) : (
          ""
        )}
      </h1>

      <div className="p-20">
        <input type="number" onChange={changePeopleComing} />
        <h1> TotalPrice {roomPrice * numberOfPeople}$ </h1>
      </div>

      <div className="grid grid-cols-2 gap-8 ">
        {dummy?.map((item, index) => {
          return (
            <div
              key={index}
              className="px-5 py-10 rounded bg-white rounded shadow">
              <h1> {item.name} </h1>
              <h1> {item.price} </h1>
              <h1> {item.price*numberOfPeople}$ </h1>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
