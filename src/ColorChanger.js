import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./features/theme";
const ColorChanger = () => {
  const [color, setColor] = useState("black");
  const dispatch = useDispatch();
  return (
    <div>
      <label>Pick a color </label>
      <input
        type="color"
        placeholder="pick a color "
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Color{" "}
      </button>
    </div>
  );
};

export default ColorChanger;
