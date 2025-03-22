import React from "react";
import { useState, useEffect } from "react";

const PersonApiFiltering = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState({ username: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const resetFilter = () => {
    setFilter({ username: "" });
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.username.toLowerCase())
  );

  return (
    <div>
      PersonApiFiltering
      <input
        type="text"
        name="username"
        value={filter.username}
        onChange={handleChange}
      ></input>
      <button onClick={resetFilter}>Reset</button>
      <table border="1" cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonApiFiltering;
