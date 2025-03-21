import React from "react";
import { useState } from "react";

const sampleData = [
  {
    id: 1,
    name: "john Doe",
    age: 30,
    city: "Sukkur",
    occupation: "Doctor",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    city: "Lahore",
    occupation: "Engineer",
  },
  {
    id: 3,
    name: "Alice Doe",
    age: 25,
    city: "Karachi",
    occupation: "Teacher",
  },
  {
    id: 4,
    name: "Bob Doe",
    age: 35,
    city: "Islamabad",
    occupation: "Developer",
  },
];

const FilterTablee = () => {
  const [filter, setFilter] = useState({
    name: "",
    age: "",
    city: "",
    occupation: "",
  });
  const [filteredData, setFilteredData] = useState(sampleData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });

    //Apply Filtering logic

    let updateData = sampleData.filter((item) => {
      return (
        (filter.name === "" ||
          item.name.toLowerCase().includes(filter.name.toLowerCase())) &&
        (filter.age === "" || item.age.toString().includes(filter.age)) &&
        (filter.city === "" ||
          item.city.toLowerCase().includes(filter.city.toLowerCase())) &&
        (filter.occupation === "" ||
          item.occupation
            .toLowerCase()
            .includes(filter.occupation.toLowerCase()))
      );
    });
    setFilteredData(updateData);
  };

  const resetData = () => {
    setFilter({ name: "", age: "", city: "", occupation: "" });
    setFilteredData(sampleData);
  };

  return (
    <div>
      FilterTablee
      <input
        name="name"
        type="text"
        value={filter.name}
        placeholder="Search by Name"
        onChange={handleChange}
      />
      <input
        name="age"
        type="number"
        value={filter.age}
        placeholder="Search by Age"
        onChange={handleChange}
      />
      <select name="city" value={filter.city} onChange={handleChange}>
        <option value="">Select City</option>
        <option value="Sukkur">Sukkur</option>
        <option value="Lahore">Lahore</option>
        <option value="Karachi">Karachi</option>
        <option value="Islamabad">Islamabad</option>
      </select>
      <select
        name="occupation"
        value={filter.occupation}
        onChange={handleChange}
      >
        <option value="">Select Occupation</option>
        <option value="Doctor">Doctor</option>
        <option value="Engineer">Engineer</option>
        <option value="Teacher">Teacher</option>
        <option value="Developer">Developer</option>
      </select>
      <button onClick={resetData}>Reset Button</button>
      <table
        border="1"
        cellPadding={10}
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
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default FilterTablee;
