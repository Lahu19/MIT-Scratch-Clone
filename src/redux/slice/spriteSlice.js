import { createSlice } from "@reduxjs/toolkit";
// Iniatialize the state of Sprite
const initialState = {
  characters: [{ id: "sprite0", angle: 0 }],
  active: "sprite0",
  thisSprite: false,
};
// Creating the Sprite 
const spriteSlice = createSlice({
  name: "sprite",
  initialState,
  reducers: {
    // Adding a new sprite
    setActiveCharacter: (state, action) => {
      state.active = action.payload;
    },
    // Adding a new sprite
    addCharacter: (state) => {
      var newId = state.characters.length;

      state.characters.push({
        id: `sprite${newId}`,
        angle: 0,
      });
      setTimeout(() => {
        const el = document.getElementById(`sprite${newId}-div`);
        el.style.position = "relative";
        console.log("🚀 ~ setTimeout ~ el:", el);
        el.style.left = "0px";
        el.style.top = "0px";
      }, 100);
    },
    //Updating the angle of Sprite
    updateAngle: (state, action) => {
      state.characters.find((obj) => obj.id === state.active).angle = action.payload;
    },
  },
});

export const {
  addCharacter,
  setActiveCharacter,
  updateAngle,
} = spriteSlice.actions;
export default spriteSlice.reducer;
