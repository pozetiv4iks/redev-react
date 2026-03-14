import { createSlice } from "@reduxjs/toolkit";

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    add: (state, action) => {
      state.push({
        id: crypto.randomUUID(),
        text: action.payload,
        isDone: false,
      });
    },
    toggle: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    edit: (state, action) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) task.text = action.payload.text;
    },
    delete: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
    clear: (state) => {
      return state.filter((t) => !t.isDone);
    },
  },
});

export const { add, toggle, edit, delete: deleteTask, clear } = tasksSlice.actions;
export default tasksSlice.reducer;
