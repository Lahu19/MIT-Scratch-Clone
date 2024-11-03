import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/rootReducer";
// Export the rootReducer as store
export const store = configureStore({
  reducer: rootReducer,
});
