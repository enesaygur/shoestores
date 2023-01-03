import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {
    setBasket: (state, action) => {
      state.basket = action.payload;
    },
  },
});

export const { setBasket } = basketSlice.actions;
export default basketSlice.reducer;
