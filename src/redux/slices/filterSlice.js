import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    set: (state, action) => action.payload,
  },
});

export const { set: setFilter } = filterSlice.actions;
export default filterSlice.reducer;
