import React from "react";
import SayMessageWithTimer from "./looks/SayMessageWithTimer";
import GotoXY from "./motion/GotoXY";
import MoveX from "./motion/MoveX";
import MoveY from "./motion/MoveY";
import TurnAntiClockwise from "./motion/RotateAntiClockwise";
import TurnClockwise from "./motion/RotateClockwise";
import Repeate  from "./motion/Repeate";

const componentMap = {
  MOVEX_TEN: <MoveX type="MOVEX_TEN" val1={0} val2={0} />,
  MOVEY_TEN: <MoveY type="MOVEY_TEN" val1={0} val2={0} />,
  CLOCKWISE_TEN: (
    <TurnClockwise type="CLOCKWISE_TEN" val1={0} val2={0} />
  ),
  ANTICLOCKWISE_TEN: (
    <TurnAntiClockwise
      type="ANTICLOCKWISE_TEN"
      val1={0}
      val2={0}
    />
  ),
  REPEAT: <Repeate type="REPEATE" val1={0} val2={0} />,
  GOTO_XY: <GotoXY type="GOTO_XY" val1={0} val2={0} />,
  SAY_TEN: <SayMessageWithTimer type="SAY_TEN" defaultval={10} />,
};

export const fetchComponent = (key, id, val1, val2) => {
  const Component = componentMap[key];
  return Component ? React.cloneElement(Component, { id, val1, val2 }) : null;
};
