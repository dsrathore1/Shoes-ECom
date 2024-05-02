import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/cartSlice.js";

export const reduxStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
