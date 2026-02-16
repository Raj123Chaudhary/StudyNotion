import { useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getResetTokenPassword } from "../services/operations/authAPI";
const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    dispatch(getResetTokenPassword(email, setEmailSent));
  };
  return (
    <div className="flex justify-center w-11/12 mx-auto min-h-[90vh] items-center">
      {loading ? (
        <div className="loader">Loading ...</div>
      ) : (
        <div className="flex flex-col w-[30rem] justify-center">
          <h1 className="text-3xl font-semibold text-white">
            {!emailSent ? "Reset Your Email" : "Check YOur Email"}
          </h1>
          <p className="text-[18px] text-[#AFB2BF] mt-2">
            {!emailSent
              ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : "We have sent the reset email toyouremailaccount@gmail.com"}
          </p>
          {!emailSent ? (
            <div className="mt-5 flex flex-col gap-1">
              <label className="text-white" htmlFor="">
                Email Address <sup className="text-red-500  font-bold">*</sup>
              </label>
              <input
                className="py-3 rounded border-b-2  px-2 mt-1 outline-none bg-[#161D29] text-white"
                type="email"
                name="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
              />
            </div>
          ) : null}
          <button
            onClick={handleOnSubmit}
            type="button"
            className="bg-yellow-400 cursor-pointer  rounded mt-5 py-3 px-2 text-black text-[16px] font-medium"
          >
            {!emailSent ? "Reset Password" : "Resend Email"}
          </button>
          <Link to="/login">
            <div className="text-white mt-2">Back To Login</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
