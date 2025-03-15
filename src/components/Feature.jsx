import React from "react";

const Feature = () => {
  return <div>Feature</div>;
};

//create a function for api call:

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export default Feature;
