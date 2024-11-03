import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RedoIcon from "@mui/icons-material/Redo";
import React from "react";
import { RotateClockwise } from "../../redux/functions/motion";
import { useState } from "react";

const TurnClockWise = ({ type, compId, val1 }) => {
  const [inputAngle, setInputAngle]= useState(0);
  function handleClockwise() {
    RotateClockwise(type, inputAngle);

  }

  return (
    <div className="movebox">
      <div className="text-white">
        Turn <RedoIcon className="moveicon" />
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
          handleClockwise();
        }}
      />
    </div>
  );
};

export default TurnClockWise;
