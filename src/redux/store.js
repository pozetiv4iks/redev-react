import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todos";
import filterReducer from "./slices/filter";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});

export default store