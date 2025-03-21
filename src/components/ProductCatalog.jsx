import React from "react";
import { useState } from "react";

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      name: "PS5",
      price: 500,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Xbox Series X",
      price: 450,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Shirt",
      price: 900,
      category: "Clothes",
    },
    {
      id: 4,
      name: "Shoes",
      price: 1200,
      category: "Footwear",
    },
    {
      id: 5,
      name: "Headphones",
      price: 150,
      category: "Electronics",
    },
    {
      id: 6,
      name: "Laptop",
      price: 1000,
      category: "Electronics",
    },
  ];

  const [filter, setFilter] = useState({ search: "", category: "", price: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const resetFilters = () => {
    setFilter({ search: "", category: "", price: "" });
    setSortOrder("");
  };

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.search.toLowerCase())
  );
  if (filter.category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === filter.category
    );
  }

  if (filter.price) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseInt(filter.price)
    );
  }

  return (
    <div>
      Product Catalog
      <input
        type="text"
        name="search"
        value={filter.search}
        placeholder="Search product"
        onChange={handleChange}
      ></input>
      <select name="category" value={filter.category} onChange={handleChange}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothes">Clothes</option>
        <option value="Footwear">Footwear</option>
      </select>
      <button onClick={resetFilters}>Reset Filters</button>
      <table border="1" cellPadding={10} style={{ margin: "10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Products: {filteredProducts.length}</p>
      <button onClick={() => setSortOrder("")}>Clear Sort Order</button>
    </div>
  );
};

export default ProductCatalog;
