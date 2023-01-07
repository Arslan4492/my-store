import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, childrenReducer } from "./Slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    children: childrenReducer,
  },
});
