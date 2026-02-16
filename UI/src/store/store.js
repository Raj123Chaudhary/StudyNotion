import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice/authSlice";
import cartReducer from "../features/cartSlice/cartSlice";
import profileReducer from "../features/profileSlice/profileSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    profile: profileReducer,
  },
});
