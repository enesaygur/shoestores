import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : [],
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
        localStorage.setItem("basket", JSON.stringify(state.basket));
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.basket.push(tempProduct);
        localStorage.setItem("basket", JSON.stringify(state.basket));
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
        localStorage.setItem("basket", JSON.stringify(state.basket));
      } else {
        state.basket = state.basket.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem("basket", JSON.stringify(state.basket));
      }
    },
    clearCart:(state,action)=>{
      state.basket = [];
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
});

export const { addBasket, removeBasket,clearCart } = basketSlice.actions;
export default basketSlice.reducer;
