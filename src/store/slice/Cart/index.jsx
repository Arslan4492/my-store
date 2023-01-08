import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItem.push(action.payload);
      return state;
    },
  },
});

export default slice.reducer;
