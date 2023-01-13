import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, childrenReducer } from "./slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    children: childrenReducer,
  },
});
