import React, { useEffect, useState } from "react";

const TypeSpeedTracker = () => {
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState(0);
  const [time, setTime] = useState(null); // Correct reference to time

  useEffect(() => {
    if (text.length === 1) {
      setTime(Date.now()); // Start timer when the user types the first character
    }

    if (text.length > 1 && time) {
      const elapsedTime = (Date.now() - time) / 1000; // Calculate elapsed time in seconds
      setSpeed((text.length / elapsedTime).toFixed(2)); // Calculate speed
    }
  }, [text, time]); // Ensure `time` is in the dependency array

  return (
    <div>
      <h2>Type Speed Tracker</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <h3>Speed: {speed} characters per second</h3>
    </div>
  );
};

export default TypeSpeedTracker;
