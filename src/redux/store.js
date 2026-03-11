import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducer";

export const store = createStore(rootReducer);

store.subscribe(() => {
  localStorage.setItem("tasks", JSON.stringify(store.getState().tasks));
});
