import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
