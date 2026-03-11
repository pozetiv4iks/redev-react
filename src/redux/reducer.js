import { combineReducers } from "redux";

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

function tasksReducer(state = initialTasks, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: crypto.randomUUID(), text: action.payload, isDone: false }];
    case "toggle":
      return state.map((t) =>
        t.id === action.payload ? { ...t, isDone: !t.isDone } : t,
      );
    case "edit":
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, text: action.payload.text } : t,
      );
    case "delete":
      return state.filter((t) => t.id !== action.payload);
    case "clear":
      return state.filter((t) => !t.isDone);
    default:
      return state;
  }
}

function filterReducer(state = "all", action) {
  if (action.type === "filter") return action.payload;
  return state;
}

export default combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});
