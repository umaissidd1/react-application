import React from "react";
import { useState } from "react";
import "./SmartHome.css";

const SmartHome = () => {
  const [isHome, setIsHome] = useState(false);
  const [light, setLight] = useState(false);
  const [tv, setTv] = useState(false);
  const [fan, setFan] = useState(false);
  const [ac, setAc] = useState(false);

  const enterRoom = () => {
    setIsHome(true);
    setLight(true);
    setTv(true);
    setFan(true);
    setAc(true);
  };

  const leaveRoom = () => {
    setIsHome(false);
    setLight(false);
    setTv(false);
    setFan(false);
    setAc(false);
  };

  return (
    <div>
      SmartHome
      <div>
        {!isHome ? (
          <button className="enter-btn" onClick={enterRoom}>
            Enter Room
          </button>
        ) : (
          <div className="devices">
            <h1>Welcome Home</h1>

            <div className="device-grid"></div>
            <div
              className={`device light ${light ? "on" : "off"}`}
              onClick={() => setLight(!light)}
            >
              Lights {light ? "ON" : "OFF"}
            </div>

            <div
              className={`device tv ${tv ? "on" : "off"}`}
              onClick={() => setTv(!tv)}
            >
              TV {tv ? "ON" : "OFF"}
            </div>

            <div
              className={`device ac ${ac ? "on" : "off"}`}
              onClick={() => setAc(!ac)}
            >
              Air Conditioner {ac ? "ON" : "OFF"}
            </div>

            <div
              className={`device fan ${fan ? "on" : "off"}`}
              onClick={() => setFan(!fan)}
            >
              Fan {fan ? "ON" : "OFF"}
            </div>

            <button className="leave-btn" onClick={leaveRoom}>
              Leave Room
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartHome;
