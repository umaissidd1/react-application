import React from "react";
import { useState } from "react";

const sampleData = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    city: "New York",
    occupation: "Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 30,
    city: "San Francisco",
    occupation: "Designer",
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 28,
    city: "Los Angeles",
    occupation: "Doctor",
  },
  { id: 4, name: "Bob Brown", age: 35, city: "Chicago", occupation: "Teacher" },
];

const FilterTable = () => {
  const [filters, setFilters] = useState({
    name: "",
    age: "",
    city: "",
    occupation: "",
  });
  const [filteredData, setFilteredData] = useState(sampleData);

  // Handle input changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });

    // Apply filtering logic
    let updatedData = sampleData.filter((item) => {
      return (
        (filters.name === "" ||
          item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.age === "" || item.age.toString().includes(filters.age)) &&
        (filters.city === "" || item.city === filters.city) &&
        (filters.occupation === "" || item.occupation === filters.occupation)
      );
    });

    setFilteredData(updatedData);
  };

  // Reset Filters
  const resetFilters = () => {
    setFilters({ name: "", age: "", city: "", occupation: "" });
    setFilteredData(sampleData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Filterable Table</h2>

      {/* Filter Inputs */}
      <input
        type="text"
        name="name"
        placeholder="Search by Name"
        value={filters.name}
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Search by Age"
        value={filters.age}
        onChange={handleFilterChange}
      />

      {/* Dropdown Filters */}
      <select name="city" value={filters.city} onChange={handleFilterChange}>
        <option value="">Select City</option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
      </select>

      <select
        name="occupation"
        value={filters.occupation}
        onChange={handleFilterChange}
      >
        <option value="">Select Occupation</option>
        <option value="Engineer">Engineer</option>
        <option value="Designer">Designer</option>
        <option value="Doctor">Doctor</option>
        <option value="Teacher">Teacher</option>
      </select>

      <button onClick={resetFilters}>Reset Filters</button>

      {/* Display Table */}
      <table
        border="1"
        cellPadding="10"
        style={{ marginTop: "10px", width: "100%" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
                <td>{user.occupation}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FilterTable;
