import React, { useState } from "react";
import "./sideBarItem.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { rectangleIdArrayState } from "../Atoms";
import { rectAtomFamily } from "../Atoms";

function SideBarItem({ id }) {
  const [rectanglesIdArray, setrectanglesIdArray] = useRecoilState(
    rectangleIdArrayState
  );
  const [rectAtom, setRectAtom] = useRecoilState(rectAtomFamily(id));
  const [widthInput, setWidthInput] = useState(rectAtom.width);
  const [heightInput, setHeightInput] = useState(rectAtom.height);
  const [colorInput, setColorInput] = useState(rectAtom.color);

  const change = () => {
	setRectAtom({width: widthInput, height: heightInput, color: colorInput});
  }
 

  return (
    <li className="sidebar__row">
      <span className="sidebarItemName">{rectAtom.name}</span>
      <label>width :</label>
      <input
        value={widthInput}
        id="shapeWidthInput"
        type="number"
        placeholder="width"
        min="0"
        onChange={(e) => {setWidthInput(e.target.value); change()}}
      />
      <label>height :</label>
      <input
        value={heightInput}
        id="shapeHeightInput"
        type="number"
        placeholder="height"
        min="0"
        onChange={(e) => {setHeightInput(e.target.value); change()}}
      />
      <label>color :</label>
      <input
        value={colorInput}
        type="color"
        id="colorModifier"
        onChange={(e) => {setColorInput(e.target.value); change()}}
      />
    </li>
  );
}

export default SideBarItem;
