import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React, { useState } from "react";
import { RepeateF } from "../../redux/functions/motion";
const Repeate = ({ type, compId, val1 }) => {
  
  const [inputValue, setInputValue]= useState(0);
  function handleMove() {
    RepeateF("MOVEX_TEN", 10, inputValue )
   
  }

  return (
    <div id={compId} className="movebox">
      Repeate 
      <input
        className="moveinput w-[50px]"
        type="number"
        value={inputValue}
        onChange={(e) => {
          parseInt(e.target.value) !== 0 &&
            setInputValue(parseInt(e.target.value));
        }}
      /> Times
      <PlayArrowIcon
        className="moveicon bg-green-600 rounded-full ml-2"
        onClick={() => {
          handleMove();
        }}
      />
    </div>
  );
};

export default Repeate;
