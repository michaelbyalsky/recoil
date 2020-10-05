import React from "react";
import "./canvas.css";
// DO NOT TOUCH THAT
import { canvasRenderMeterState } from "../../ChallengeUtils/renderMeter.js";
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";
import { canvasBackgroundColorState } from "../Atoms";
import { useRecoilValue } from "recoil";
import { rectangleIdArrayState } from "../Atoms";
import Rectangle from '../Rectangle/Rectangle'

function Canvas() {
  const canvasBackgroundColor = useRecoilValue(canvasBackgroundColorState);
  const rectanglesIdArray = useRecoilValue(rectangleIdArrayState);
  // TOUCH THAT IF YOU WANT TO GET KILLED
  useRenderMeter(canvasRenderMeterState);
  // ---------------------------------------------

  return (
    <div
      className="canvas"
      id="canvas"
      style={{ backgroundColor: canvasBackgroundColor }}
    >
	{rectanglesIdArray.map((id) => 
		<Rectangle id={id} key={id} />
	)}	
	</div>
  );
}

export default Canvas;
