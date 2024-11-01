import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  //dummyjson.com/products/category/${categories}
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/carts?limit=1&skip=12"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        setData(result?.carts[0].products);

        // setData(result.products);
      } catch (err) {
        console.log(err.message);
      } finally {
        console.log("");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid gap-4 p-40">
      {data?.map((item) => {
        return (
          <div key={item.id} className="shadow-md p-10 rounded ">
           <Link to={`/Product/${item.id}`}> <h1>
              {" "}
              {item.title} {item.id}
            </h1></Link>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
