import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../service/api/auth";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await api.userAuth(email, password);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ login: username, email, password, gender, age }, { rejectWithValue }) => {
    try {
      await api.userReg(username, email, password, gender, age);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload?.token) {
          localStorage.setItem("token", action.payload.token);
        }
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload ?? action.error.message;
        state.loading = false;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload ?? action.error.message;
        state.loading = false;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
