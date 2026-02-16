import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupFormData } from "../../../features/authSlice/authSlice";
import { sendOTP } from "../../../services/operations/authAPI";

const account = ["Student", "Instructor"];
const SignupForm = () => {
  const [accountType, setAccountType] = useState("Student");
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAccountType = (event) => {
    setAccountType(event.target.innerText);
  };
  const handleForm = (e) => {
    // console.log(event.target.value);
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const singupData = {
    ...formData,
    accountType,
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const res = await sendOTP(formData.email);
      // console.log(res);
      dispatch(signupFormData(singupData));
      navigate("/signup/verify-email");
    } catch (error) {
      setError(error?.message);
    }
  };
  return (
    <div className="w-full">
      <form action="" onSubmit={handleSubmit}>
        <div>
          {/* choses instructor or student */}
          <div className="flex gap-2 py-1 px-1 mt-5 w-fit rounded-full border-b-2  bg-[#161D29] border-[#FFFFFF2E]">
            {account.map((element, index) => {
              return (
                <div
                  onClick={handleAccountType}
                  key={index}
                  className={`${
                    accountType === element
                      ? "bg-[#000814] text-[#F1F2FF]"
                      : "  text-[#999DAA]"
                  }  py-3 rounded-full px-8 text-[16px] cursor-pointer font-medium `}
                >
                  {element}
                </div>
              );
            })}
          </div>
          {/* input fields   */}

          {/* name fields   */}
          <div className="flex mt-5 gap-3 justify-between">
            <div>
              <label className="text-white" htmlFor="firstName">
                First Name
              </label>
              <input
                onChange={handleForm}
                className="p-3 placeholder:text-[#999DAA] border-b-2 w-full placeholder:font-semibold text-[16px] text-white outline-none rounded bg-[#161D29] decoration-0 mt-0.5"
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                id="firstName"
                required
              />
            </div>
            <div>
              <label className="text-white" htmlFor="lastName">
                Last Name
              </label>
              <input
                onChange={handleForm}
                className="p-3 placeholder:text-[#999DAA] border-b-2 w-full placeholder:font-semibold text-[16px] text-white outline-none rounded bg-[#161D29] focus:bg-[#161D29] decoration-0 mt-0.5"
                type="text"
                placeholder="Enter Last Name"
                id="lastName"
                name="lastName"
                required
              />
            </div>
          </div>
          {/* email address fields  */}
          <div className="flex flex-col mt-5">
            <label className="text-white" htmlFor="emailAddress">
              Email Address
            </label>
            <input
              onChange={handleForm}
              className="p-3 placeholder:text-[#999DAA] border-b-2 focus:bg-[#161D29] placeholder:font-semibold text-[16px] text-white outline-none rounded bg-[#161D29] decoration-0 mt-0.5"
              type="email"
              required
              placeholder="Enter Your Email Address"
              name="email"
              id="email"
            />
          </div>
          {/* password fields   */}
          <div className="flex mt-5 gap-3 justify-between">
            <div className="">
              <label className="text-white" htmlFor="password">
                Password
              </label>
              <input
                onChange={handleForm}
                className="p-3 placeholder:text-[#999DAA] border-b-2 focus:bg-[#161D29] w-full placeholder:font-semibold text-[16px] text-white outline-none rounded bg-[#161D29] decoration-0 mt-0.5"
                type="text"
                name="password"
                id="password"
                required
                placeholder="Password"
              />
            </div>
            <div>
              <label className="text-white" htmlFor="confirmPassword">
                Password
              </label>
              <input
                onChange={handleForm}
                className="p-3 placeholder:text-[#999DAA] border-b-2 focus:bg-[#161D29] w-full placeholder:font-semibold text-[16px] text-white outline-none rounded bg-[#161D29] decoration-0 mt-0.5"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                placeholder="Confirm Password"
              />
            </div>
          </div>
          {error && <div className="text-red-400 mt-2">{error}</div>}
          <div className="mt-5">
            <button
              className="bg-yellow-400 cursor-pointer rounded w-full px-4 py-3 text-[16px] font-semibold text-black"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignupForm;
