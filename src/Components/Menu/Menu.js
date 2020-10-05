import React, { useState, useEffect } from "react";
import "./menu.css";
import { useRecoilState } from "recoil";
import { rectangleIdArrayState } from "../Atoms";
import { rectAtomFamily } from "../Atoms";


function Menu() {
  // Input states
  const [rectanglesIdArray, setRectangleIdArrayState] = useRecoilState(
    rectangleIdArrayState
  );
  let idCounter = rectanglesIdArray.length + 1
  const [widthInput, setWidthInput] = useState(75);
  const [heightInput, setHeightInput] = useState(75);
  const [colorInput, setColorInput] = useState("#769fcd");
  const [rectAtom, setRectAtom] = useRecoilState(rectAtomFamily(idCounter));

  const submitShape = () => {

	setRectAtom({
		...rectAtom, width: widthInput, height: heightInput, color: colorInput });

    setRectangleIdArrayState((oldArray) => [
      ...oldArray, idCounter
    ]);
  };

  return (
    <div className="sidebar__menu">
		{/* <div>{rectanglesIdArray.length}</div> */}
      <label htmlFor="widthInput">Width:</label>
      <input
        id="widthInput"
        type="number"
        placeholder="50"
        value={widthInput}
        onChange={({ target }) => setWidthInput(target.value)}
        min="0"
      />
      <label htmlFor="heightInput">Height:</label>
      <input
        id="heightInput"
        type="number"
        placeholder="50"
        value={heightInput}
        onChange={({ target }) => setHeightInput(target.value)}
        min="0"
      />
      <label htmlFor="colorPicker">Color:</label>
      <input
        type="color"
        id="colorPicker"
        value={colorInput}
        onChange={({ target }) => setColorInput(target.value)}
      />
      <button onClick={submitShape} id="add-shape">
        Add Shape
      </button>
    </div>
  );
}
export default Menu;
