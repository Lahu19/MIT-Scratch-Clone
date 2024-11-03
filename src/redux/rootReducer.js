import { combineReducers } from "redux";
import midReducer from "./slice/midSlice";
import motionReducer from "./slice/motionSlice";
import spriteReducer from "./slice/spriteSlice";

export const rootReducer = combineReducers({
  motion: motionReducer,
  mid: midReducer,
  sprite: spriteReducer,
});
