import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addBasket: (state, action) => {
      const itemIndex = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.basket[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.basket.push(tempProduct);
      }
    },
    removeBasket: (state, action) => {
      //state.basket = state.basket.filter(
      // (item) => item.id !== action.payload.id );
      const itemIndex = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.basket[itemIndex].quantity > 1) {
        state.basket[itemIndex].quantity -= 1;
      } else {
        state.basket = state.basket.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const { addBasket, removeBasket } = basketSlice.actions;
export default basketSlice.reducer;
