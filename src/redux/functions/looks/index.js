import { store } from "../../../store";

export const sayMessageWithTimer = (type) => {
  const el = document.getElementById(
    `${store.getState().sprite.active}-message-box`
  );
  const el2 = document.getElementById(
    `${store.getState().sprite.active}-message-box1`
  );

  el2.style.display = "none";

  el.style.display = "block";
  el.style.position = "relative";

  el.innerHTML = "Hello";

  let time = 0;
  switch (type) {
    case "SAY_TEN":
      time = 10;
      break;
    default:
      time = 0;
  }

  window.setTimeout(() => {
    el.style.display = "none";
  }, time * 1000);
};

export const thinkMessageWithoutTimer = (time) => {
  const el = document.getElementById(
    `${store.getState().sprite.active}-message-box`
  );
  const el2 = document.getElementById(
    `${store.getState().sprite.active}-message-box1`
  );

  if (
    state.show_msg &&
    state.sprite_id === "${store.getState().sprite.active}"
  ) {
    setState({ ...state, show_msg: false });
    el.style.display = "none";
    el2.style.display = "none";
    return;
  }
  setState({ ...state, show_msg: true });
  el.style.display = "block";
  el.style.position = "relative";

  el2.style.display = "block";
  el2.style.position = "relative";

  window.clearTimeout();
  el.innerHTML = state.message;
};
export const hideMessage = () => {
  window.clearTimeout();
  const el = document.getElementById(
    `${store.getState().sprite.active}-message-box`
  );
  const el2 = document.getElementById(
    `${store.getState().sprite.active}-message-box1`
  );
  el.style.display = "none";
  el2.style.display = "none";
};
