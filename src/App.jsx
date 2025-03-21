import React from "react";
import { useState, useEffect } from "react";
import API from "./components/API";
import ToggleSwitcher from "./components/ToggleSwitcher";
import SmartHome from "./components/SmartHome";
import ToDoList from "./components/ToDoList";
import WeatherAPI from "./components/WeatherAPI";

import UserSearch from "./components/UserSearch";

const App = () => {
  return (
    <>
      {/* <SmartHome></SmartHome> */}
      {/* <ToDoList></ToDoList> */}
      {/* <WeatherAPI></WeatherAPI> */}
      <UserSearch></UserSearch>
    </>
  );
};

export default App;

// useEffect(() => {
//   setInterval(() => {
//     setCount((prevCount) => ++prevCount);
//   }, 1000);

{
  /* <h1>Counter: {count}</h1> */
}

{
  /* <button onClick={() => setCount(count + 1)}>Button</button> */
}

{
  /* <Student name="Kabeer" age={20}></Student> */
}
