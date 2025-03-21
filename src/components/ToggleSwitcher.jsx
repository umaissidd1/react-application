import React from "react";
import { useState } from "react";
import "./ToggleSwitcher.css";

const ToggleSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const toggleSwitcher = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`container ${theme}`}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>

      <button onClick={toggleSwitcher}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ToggleSwitcher;
