import { createSlice } from "@reduxjs/toolkit";
// import { setLoading } from "../authSlice/authSlice";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user || null,
  loading: false,
};
const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
      localStorage.setItem("user", JSON.stringify(actions.payload));
      state.loading = false;
    },
    setLoading: (state, actions) => {
      state.loading = actions.payload;
    },
  },
});
export const { setUser, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
