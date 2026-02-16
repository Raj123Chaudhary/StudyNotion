import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { RxTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/operations/authAPI";
import {
  loginSuccess,
  removeSignFormData,
} from "../features/authSlice/authSlice";
const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData } = useSelector((state) => {
    return state.auth;
  });
  const fullSignupData = {
    ...signupData,
    otp,
  };
  const handleOtp = (event) => {
    setOtp(event.target.value);
  };
  const handleSubmit = async () => {
    try {
      const res = await signup(fullSignupData);
      dispatch(removeSignFormData());
      navigate("/login");
      console.log(res);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="">
      <div className="w-11/12 max-w-[1260px] mx-auto h-[90vh]  flex justify-center items-center">
        <div className="">
          <h1 className="text-4xl text-white font-semibold">Verify Email</h1>
          <p className="text-[#AFB2BF] text-[16px] mt-2 ">
            A verification code has been sent to you. Enter the code below
          </p>
          <input
            className="bg-[#161D29] appearance-none focus:appearance-none focus: px-2 py-3 mt-5 rounded w-full text-white outline-none"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            required
            onChange={handleOtp}
            name="VerifyEmail"
            placeholder="Enter OTP"
          />
          {error && <div className="text-red-400 mt-2">{error}</div>}
          <button
            className="text-center mt-5 px-4 text-[16px] py-3 font-semibold outline-none cursor-pointer rounded w-full bg-yellow-400 text-black"
            type="button"
            onClick={handleSubmit}
          >
            Verify and Registor
          </button>
          <div className="flex mt-2   justify-between">
            <Link to="/login">
              <p className="text-white flex items-center cursor-pointer gap-2">
                <BsArrowLeft className="translate-y-0.5" />
                back to login
              </p>
            </Link>

            <p className="text-white flex items-center gap-2 ">
              <RxTimer className="translate-y-0.5 text-blue-700" />
              Resend it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VerifyEmail;
