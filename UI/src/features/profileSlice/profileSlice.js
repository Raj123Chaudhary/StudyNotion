import { createSlice } from "@reduxjs/toolkit";
// import { setLoading } from "../authSlice/authSlice";
const initialState = {
  user: null,
  loading: false,
};
const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
    setLoading: (state, actions) => {
      state.loading = actions.payload;
    },
  },
});
export const { setUser, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
