import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../service/api/todos";

export const fetchTasks = createAsyncThunk(
  "todos/fetchTasks",
  async (_, { rejectWithValue }) => {
    try {
      return await api.getTasks();
    } catch (err) {
      return rejectWithValue(err.response?.data ?? err.message);
    }
  }
);

export const createTaskThunk = createAsyncThunk(
  "todos/createTask",
  async (title, { rejectWithValue }) => {
    try {
      return await api.createTask(title);
    } catch (err) {
      return rejectWithValue(err.response?.data ?? err.message);
    }
  }
);

export const editTaskThunk = createAsyncThunk(
  "todos/editTask",
  async ({ id, title }, { rejectWithValue }) => {
    try {
      return await api.editTask(id, title);
    } catch (err) {
      return rejectWithValue(err.response?.data ?? err.message);
    }
  }
);

export const toggleTaskThunk = createAsyncThunk(
  "todos/toggleTask",
  async (task, { rejectWithValue }) => {
    try {
      return await api.toggleTask(task);
    } catch (err) {
      return rejectWithValue(err.response?.data ?? err.message);
    }
  }
);

export const deleteTaskThunk = createAsyncThunk(
  "todos/deleteTask",
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteTask(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data ?? err.message);
    }
  }
);

export const clearCompletedThunk = createAsyncThunk(
  "todos/clearCompleted",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { tasks } = getState().todos;
      const completed = tasks.filter((t) => t.isCompleted);
      await Promise.all(completed.map((t) => api.deleteTask(t.id)));
      return completed.map((t) => t.id);
    } catch (err) {
      return rejectWithValue(err.response?.data ?? err.message);
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.loading = true;
      state.error = null;
    };
    const handleRejected = (state, action) => {
      state.loading = false;
      state.error = action.payload ?? action.error.message;
    };

    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload ?? [];
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, handleRejected)

      .addCase(createTaskThunk.pending, handlePending)
      .addCase(createTaskThunk.fulfilled, (state, action) => {
        if (action.payload) state.tasks.push(action.payload);
        state.loading = false;
      })
      .addCase(createTaskThunk.rejected, handleRejected)

      .addCase(editTaskThunk.pending, handlePending)
      .addCase(editTaskThunk.fulfilled, (state, action) => {
        if (action.payload) {
          const i = state.tasks.findIndex((t) => t.id === action.payload.id);
          if (i !== -1) state.tasks[i] = action.payload;
        }
        state.loading = false;
      })
      .addCase(editTaskThunk.rejected, handleRejected)

      .addCase(toggleTaskThunk.pending, handlePending)
      .addCase(toggleTaskThunk.fulfilled, (state, action) => {
        if (action.payload) {
          const i = state.tasks.findIndex((t) => t.id === action.payload.id);
          if (i !== -1) state.tasks[i] = action.payload;
        }
        state.loading = false;
      })
      .addCase(toggleTaskThunk.rejected, handleRejected)

      .addCase(deleteTaskThunk.pending, handlePending)
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((t) => t.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteTaskThunk.rejected, handleRejected)

      .addCase(clearCompletedThunk.pending, handlePending)
      .addCase(clearCompletedThunk.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((t) => !action.payload.includes(t.id));
        state.loading = false;
      })
      .addCase(clearCompletedThunk.rejected, handleRejected);
  },
});

export const { clearError } = todosSlice.actions;
export default todosSlice.reducer;
