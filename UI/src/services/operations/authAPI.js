import { AUTH_API } from "../apis";
import { apiConnector } from "../apiConnector";
import axios from "axios";
import { setError, setLoading } from "../../features/authSlice/authSlice";

export const login = async (formData) => {
  try {
    const response = await apiConnector("POST", AUTH_API.LOGIN_API, formData);
    return response.data;
  } catch (error) {
    const message =
      error?.response?.data?.message || "Login failed. Please try again.";

    throw new Error(message);
  }
};

export const signup = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/auth/signUp",
      formData
    );
    return response;
  } catch (error) {
    const message =
      error?.response?.data?.message || "Failed to signup. Please try again.";

    throw new Error(message);
  }
};

export const sendOTP = async (email) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/auth/sendOTP",
      { email }
    );
    return response;
  } catch (error) {
    console.log(error);
    const message =
      error?.response?.data?.message || "Failed to send OTP. Please try again.";

    throw new Error(message);
  }
};

export const getResetTokenPassword = (email, setEmailSent) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", AUTH_API.RESETPASSTOKEN_API, {
        email,
      });
      console.log("Reset password token response :", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      setEmailSent(true);
    } catch (error) {
      console.log("reset password token error");
    }
    dispatch(setLoading(false));
  };
};

export const resetPassword = (password, confirmPassword, token) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", AUTH_API.RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });
      console.log("Reset Password Response : ", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
    } catch (error) {
      dispatch(setError(error));
      console.log("Reset Password token error ", error);
    }
    dispatch(setLoading(false));
  };
};
