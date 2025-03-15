import React from "react";

const Student = ({ name, age }) => {
  return (
    <div>
      Student
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};

export default Student;
