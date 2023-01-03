import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";
import basketReducer from "./slices/basket";
import totalReducer from "./slices/total";
export const store = configureStore({
  reducer: {
    products: productReducer,
    basket: basketReducer,
    total: totalReducer,
  },
});
