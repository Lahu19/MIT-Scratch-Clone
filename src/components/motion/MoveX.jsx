import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React, { useState } from "react";
import { MoveStepsX } from "../../redux/functions/motion";

const MoveX = ({ type , compId, val1 }) => {
  const [inputValue, setInputValue] = useState(0);

  function handleMove() {
    MoveStepsX(type, inputValue);
  }

  return (
    <div id={compId} className="movebox">
      Move X 
      <input
        className="moveinput w-[50px]"
        type="number"
        value={inputValue}
        onChange={(e) => {
          parseInt(e.target.value) !== 0 &&
          setInputValue(parseInt(e.target.value) );
        }}
      />Steps
      <PlayArrowIcon
        className="moveicon bg-green-600 rounded-full ml-2"
        onClick={handleMove}
      />
    </div>
  );
};

export default MoveX;
