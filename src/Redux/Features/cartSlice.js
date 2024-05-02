import { createSlice } from "@reduxjs/toolkit";
import Data from "../../JSON/shoes_data.json";

const initialState = {
  cartArray: [],
  items: Data,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartArray.push(action.payload);
      state.totalQuantity++;

      const find = state.cartArray.findIndex(
        (item) => item.id === action.payload.id
      );
      if(find >= 0){
        // state.cartArray[find].
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
