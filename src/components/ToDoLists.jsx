import React, { useState } from "react";

const ToDoLists = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null); // Store the task being edited
  const [updatedText, setUpdatedText] = useState(""); // Store new task text during editing

  const addTask = () => {
    if (newTask.trim() === "") return;
    const taskObject = { id: Date.now(), text: newTask };
    setTasks([...tasks, taskObject]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setUpdatedText(task.text);
  };

  const saveUpdatedTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      )
    );
    setEditingId(null); // Exit editing mode
    setUpdatedText(""); // Clear input
  };

  return (
    <div>
      <h2>ToDoLists</h2>
      <input
        type="text"
        value={newTask}
        placeholder="Enter the task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <table border="1" cellPadding={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>
                {editingId === task.id ? (
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                ) : (
                  task.text
                )}
              </td>
              <td>
                {editingId === task.id ? (
                  <button onClick={() => saveUpdatedTask(task.id)}>Save</button>
                ) : (
                  <button onClick={() => startEditing(task)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoLists;
