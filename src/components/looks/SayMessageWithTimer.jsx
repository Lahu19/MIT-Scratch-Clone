import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import { sayMessageWithTimer } from "../../redux/functions/looks";

const SayMessageWithTimer = ({ type, defaultval }) => {

  const displayMsg = () => {
    sayMessageWithTimer(type);

    
  };

  return (
    <div elevation={3}>
      <div className="messagebox">
        <div className="text-white">Say Hello for {defaultval} seconds</div>

        <PlayArrowIcon
          className="moveicon bg-green-600 rounded-full"
          onClick={() => {
            displayMsg();
          }}
        />
      </div>
    </div>
  );
};

export default SayMessageWithTimer;
