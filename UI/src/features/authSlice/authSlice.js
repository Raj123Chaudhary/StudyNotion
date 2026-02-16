import { createSlice } from "@reduxjs/toolkit";
import { signup } from "../../services/operations/authAPI";
const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  token: localStorage.getItem("token") || null,
  user: user || null,
  isAuthenticated: !!token,
  loading: false,
  error: null,
  signupData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    loginStart: (state, actions) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state, action) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    signupFormData: (state, action) => {
      console.log("i am inside slice signupFormData");
      state.signupData = action.payload;
    },
    removeSignFormData: (state) => {
      state.signupData = null;
    },
  },
});
export const {
  loginStart,
  signupFormData,
  removeSignFormData,
  loginFailed,
  loginSuccess,
  logout,
  setLoading,
  setError,
} = authSlice.actions;
export default authSlice.reducer;
