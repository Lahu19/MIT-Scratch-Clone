import { store } from "../../../store";
import { updateAngle } from "../../slice/spriteSlice";

const getActiveElement = () => document.getElementById(`${store.getState().sprite.active}-div`);

const updatePosition = (axis, distance) => {
  const element = getActiveElement();
  if (!element) return;

  if (element.style.position !== "relative") {
    element.style.position = "relative";
  }

  if (axis === "x") {
    element.style.left = element.offsetLeft + distance + "px";
  } else if (axis === "y") {
    element.style.top = element.offsetTop + distance + "px";
  }
};

export const MoveStepsX = (type, inputValue) => {
  updatePosition("x", inputValue);
};

export const MoveStepsY = (type, inputValue) => {
  updatePosition("y", inputValue);
};

const getCurrentAngle = () => {
  const state = store.getState();
  const activeSprite = state.sprite.characters.find(
    (obj) => obj.id === state.sprite.active
  );
  return activeSprite ? parseInt(activeSprite.angle) : 0;
};

const rotateElement = (angleChange) => {
  const element = document.getElementById(store.getState().sprite.active);
  if (!element) return;

  const newAngle = getCurrentAngle() + angleChange;
  element.style.transform = `rotate(${newAngle}deg)`;
  store.dispatch(updateAngle(newAngle));
};

export const RotateClockwise = (type, inputAngle) => {
  rotateElement(parseInt(inputAngle));
};

export const RotateAntiClockwise = (type, inputAngle) => {
  rotateElement(-parseInt(inputAngle));
};

export const GotoXY = (x, y) => {
  const element = getActiveElement();
  if (!element) return;

  if (element.style.position !== "relative") {
    element.style.position = "relative";
  }

  element.style.left = x + "px";
  element.style.top = y + "px";
};

export const RepeateF = (action, i, input)=>{
  if (i < 0) return;
  for(let j=0;j<i; j++){
  if( action === "MOVEX_TEN"){
    MoveStepsX("MOVEX_TEN", i*input);
  } else if( action === "MOVEY_TEN"){
    MoveStepsY("MOVEY_TEN", i*input);
  }else if( action === "ROTATE_CLOCKWISE"){
    RotateClockwise("ROTATE_CLOCKWISE", i*input);
  }else if( action === "ROTATE_ANTICLOCKWISE"){
    RotateAntiClockwise("ROTATE_ANTICLOCKWISE", i*input);
  }
}
}
