import { sayMessageWithTimer } from "./looks";
import {
  MoveStepsX,
  MoveStepsY,
  RotateAntiClockwise,
  RotateClockwise,
  RepeateF,
} from "./motion";

const functionMap = {
  MOVEX_TEN: MoveStepsX,
  MOVEY_TEN: MoveStepsY,
  CLOCKWISE_TEN: RotateClockwise,
  ANTICLOCKWISE_TEN: RotateAntiClockwise,
  SAY_TEN: sayMessageWithTimer,
  REPEATE: RepeateF,
};

export default functionMap;
