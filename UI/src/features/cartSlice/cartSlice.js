import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setTotalItems: (state, actions) => {
      state.totalItems = actions.payload;
    },
    //add a function add to cart
    // add a fucntion remove from cart
    //
  },
});

export const { setTotalItems } = cartSlice.actions;
export default cartSlice.reducer;
