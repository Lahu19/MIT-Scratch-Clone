import { createSlice } from "@reduxjs/toolkit";
// Initialized the State of Sprite
const initialState = {
  moveStepsX: 0,
  moveStepsY: 0,
  spriteAngle: 0,
  position: { x: 0, y: 0 },
};
//Motion related Properties are handeled here
const motionSlice = createSlice({
  name: "motion",
  initialState,
  reducers: {
    setMoveStepsX: (state, action) => {
      state.moveStepsX = action.payload;
    },
    setMoveStepsY: (state, action) => {
      state.moveStepsY = action.payload;
    },
    setSpriteAngle: (state, action) => {
      state.spriteAngle = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
  },
});

export const { setMoveStepsX, setMoveStepsY, setSpriteAngle, setPosition } = motionSlice.actions;
export default motionSlice.reducer;
