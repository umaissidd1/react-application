import React, { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
      }}
    >
      ToDoList
      <input
        style={{ margin: "20px", height: "35px", borderRadius: "15px" }}
        type="text"
        placeholder="Enter to add task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((ts, index) => (
          <li key={index}>{ts}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
