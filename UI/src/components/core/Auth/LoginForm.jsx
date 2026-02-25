import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../../../services/operations/authAPI";
import {
  loginFailed,
  loginStart,
  loginSuccess,
} from "../../../features/authSlice/authSlice";
import {
  setLoading,
  setUser,
} from "../../../features/profileSlice/profileSlice";

const LoginForm = () => {
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleForm = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    //     console.log(formData);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginStart());
    dispatch(setLoading(true));
    try {
      const data = await login(formData);
      dispatch(loginSuccess({ token: data?.token, user: data?.userPresent }));
      dispatch(setUser(data?.userPresent));
      console.log("login success fully");

      // navigate(""); // not working because of open route work here
    } catch (error) {
      dispatch(
        loginFailed(
          error?.response?.data?.message || error?.message || "Login failed",
        ),
      );
    }
  };
  return (
    <div className=" w-full">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col mt-5">
          <label className="text-white" htmlFor="email">
            Email Address
          </label>
          <input
            className=" p-3 placeholder:text-[#999DAA] focus:bg-[#161D29] border-b-2 placeholder:font-semibold text-[16px] text-white outline-none rounded bg-[#161D29] mt-0.5"
            type="email"
            placeholder="Enter Email Address"
            name="email"
            required
            value={formData.email}
            onChange={handleForm}
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className="text-white" htmlFor="password">
            {" "}
            Password
          </label>
          <input
            className=" p-3 placeholder:text-[#999DAA] border-b-2 placeholder:font-semibold text-[16px] text-white outline-none rounded focus:bg-[#161D29] bg-[#161D29] decoration-0 mt-0.5"
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={formData.password}
            onChange={handleForm}
          />
          <div className="flex justify-end text-white">
            <Link to={"/forgot-password"}>
              <p className="p-1">Forgot Password</p>
            </Link>
          </div>
        </div>
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        <button
          className="text-center mt-5 px-4 text-[16px] font-semibold py-3  outline-none cursor-pointer rounded w-full bg-yellow-400 text-black "
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
