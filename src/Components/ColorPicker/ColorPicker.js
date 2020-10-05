import React, { useState } from "react";
import "./colorPicker.css";
import { useSetRecoilState } from 'recoil';
import { canvasBackgroundColorState } from '../Atoms'

function ColorPicker() {
const setBackgroundColor = useSetRecoilState(canvasBackgroundColorState)	
  return (
    <div className="colorPicker">
      <label htmlFor="colorPickerInput">
        change canvas color to random color:
        <input
          id="colorPickerInput"
          type="color"
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </label>
    </div>
  );
}

export default ColorPicker;
