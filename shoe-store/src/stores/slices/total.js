import { createSlice } from "@reduxjs/toolkit";

export const totalSlice = createSlice({
  name: "total",
  initialState: {
    total: [],
  },
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setTotal } = totalSlice.actions;
export default totalSlice.reducer;
