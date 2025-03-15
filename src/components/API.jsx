import React, { useEffect, useState } from "react";

const API = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          {" "}
          {/* ✅ Fix: Each item needs a unique key */}
          <h3>
            {product.name.firstname} {product.name.lastname}
          </h3>
          <p>Price: ${product.email}</p>
          <p>{product.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default API;
