import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./Slice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
