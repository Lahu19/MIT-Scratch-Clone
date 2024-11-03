import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import UndoIcon from "@mui/icons-material/Undo";
import React from "react";
import { RotateAntiClockwise } from "../../redux/functions/motion";
import { useState } from "react";
const TurnAntiClockWise = ({ type, compId, val1 }) => {
  const [inputAngle, setInputAngle]= useState(0);
  function handleAntiClockwise() {
    RotateAntiClockwise(type, inputAngle);

  }

  return (
    <div className="movebox">
      <div className="text-white">
        Turn <UndoIcon className="moveicon" /> 
        <input
        className="moveinput w-[50px]"
        type="number"
        value={inputAngle}
        onChange={(e) => {
          parseInt(e.target.value) !== 0 &&
            setInputAngle(parseInt(e.target.value) );
        }}
      /> Degrees
      </div>
      <PlayArrowIcon
        className="moveicon bg-green-600 rounded-full ml-2"
        onClick={() => {
          handleAntiClockwise();
        }}
      />
    </div>
  );
};

export default TurnAntiClockWise;
