import React, { useState } from "react";
import "./styles.css";
import Callback from "./Callback";

function Body() {
  const [UIColor, setUIColor] = useState("");

  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className="App">
      <div
        className="App_color_container"
        style={{ background: `${UIColor}` }}
      ></div>
      <Callback getColor={getColor} />
    </div>
  );
}

export default Body;
