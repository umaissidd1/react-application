import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredUsers(null);
      return;
    }

    const user =
      users.find((u) => u.id.toString() === searchTerm) ||
      users.find((u) => u.username.toLowerCase() === searchTerm.toLowerCase());

    setFilteredUsers(user);
  };

  return (
    <div style={{ margin: "5px", padding: "5px" }}>
      User Search
      <input
        type="text"
        placeholder="Enter the username/id"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <button onClick={handleSearch} style={{ padding: "8px", margin: "5px" }}>
        Search
      </button>
      {filteredUsers ? (
        <div>
          <h2>User Found: </h2>
          <h3>{filteredUsers.name}</h3>
          <h3>{filteredUsers.username}</h3>
          <h3>{filteredUsers.email}</h3>
          <h3>{filteredUsers.phone}</h3>
        </div>
      ) : (
        searchTerm && <p>User not found</p>
      )}
    </div>
  );
};

export default UserSearch;
