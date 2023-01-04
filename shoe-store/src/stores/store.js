import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";
import basketReducer from "./slices/basket";
export const store = configureStore({
  reducer: {
    products: productReducer,
    basket: basketReducer,
  },
});
