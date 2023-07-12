import React, { useState } from "react";

function Value({ getColor }) {
  const [activeColor, setActiveColor] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setActiveColor(value);
    getColor(value);
  };
  
  return (
    <div>
      <input
        type="text"
        id="input"
        onChange={handleChange}
        value={activeColor}
      />
    </div>
  );
}

export default Value;
