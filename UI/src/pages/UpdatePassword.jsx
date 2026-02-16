import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { resetPassword } from "../services/operations/authAPI";
const UpdatePassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);
  const location = useLocation();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { password, confirmPassword } = formData;
  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token));
  };

  return (
    <div className="flex items-center justify-center w-11/12 min-h-[90vh] mx-auto">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl text-white">Choses new Password</h1>
          <p className="mt-2 text-[#AFB2BF]">
            Almost done. Enter your new password and youre all set.
          </p>
          <form action="" onSubmit={handleOnSubmit}>
            <label htmlFor="">
              <p className="text-[#AFB2BF] mt-4">
                New Password <sup className="text-red-500">*</sup>
              </p>
              <input
                onChange={handleChange}
                name="password"
                placeholder="Password"
                value={password}
                className="py-3 rounded w-full  px-1 rounded border-b-2 mt-1 outline-none bg-[#161D29] text-white"
                required
                type={showPassword ? "text" : "password"}
              />
            </label>
            <label htmlFor="">
              <p className="text-[#AFB2BF] mt-4">
                Confirm New Password{" "}
                <sup className="text-red-500 text-lg font-semibold">*</sup>
              </p>
              <input
                onChange={handleChange}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="py-3 rounded  px-1 w-full mt-1 rounded border-b-2 outline-none bg-[#161D29] text-white"
                value={confirmPassword}
                required
                type={showConfirmPassword ? "text" : "password"}
              />
            </label>
            {error && <div className="text-red-400 mt-2">{error.message}</div>}
            <button
              className="bg-yellow-400 w-full cursor-pointer rounded mt-5 py-3 px-2 text-black text-[16px] font-medium"
              type="submit"
            >
              Reset Password
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default UpdatePassword;
