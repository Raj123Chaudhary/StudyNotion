import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiConnector";
import CountryCode from "../../data/countrycode.json";
const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  useEffect(() => {
    if (isSubmitSuccessful)
      reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNumber: "",
        countrycode: "",
      });
  }, [isSubmitSuccessful, reset]);
  const submitContactForm = async (data) => {
    console.log("Logging data :", data);
    //     try {
    //       setLoading(true);
    //        const response = await apiConnector("POST",  , data);
    //        console.log("logging Response",response)
    //       setLoading(false);
    //     } catch (error) {
    //       console.log("Error: ", error);
    //       setLoading(false);
    //     }
  };
  return (
    <form onSubmit={handleSubmit(submitContactForm)} action="">
      <div className="flex flex-col gap-x-2 ">
        {/* {firstName and last name} */}
        <div className="flex md:gap-x-5">
          {/* firstName */}
          <div className="flex flex-col w-full">
            <label htmlFor="firstName">First Name</label>
            <input
              className="text-black bg-[#161D29] lg:w-full w-[90%]  focus:outline-none placeholder:text-[16px] placeholder:text-[#999DAA] px-2 py-2 rounded "
              type="text"
              name="firstName"
              id="firstName"
              {...register("firstName", { required: true })}
              placeholder="Enter First Name"
            />
            {errors.firstName && (
              <span className="text-red-400">Plaese Enter Your Name</span>
            )}
          </div>
          {/* lastName  */}
          <div className="flex flex-col w-full">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="text-black px-2 py-2  focus:outline-none placeholder:text-[16px] placeholder:text-[#999DAA] bg-[#161D29] rounded "
              type="text"
              name="lastName"
              id="lastName"
              {...register("lastName", { required: true })}
              placeholder="Enter Last Name"
            />
            {errors.lastName && (
              <span className="text-red-400">Plaese Enter Last Name</span>
            )}
          </div>
        </div>

        {/* email  */}
        <div className="flex flex-col mt-5">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className=" text-black bg-[#161D29]  focus:outline-none placeholder:text-[16px] placeholder:text-[#999DAA] px-2 py-2 rounded"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-400"> Plese enter your email</span>
          )}
        </div>
        {/* phone no  */}
        <div className="flex flex-col gap-1 mt-5">
          <label htmlFor="phoneNumber">Phone Number</label>
          {/* dropdown */}
          <div className="flex flex-row gap-5 w-full">
            <div className="flex w-[25%] bg-[#161D29] placeholder:text-[16px] placeholder:text-[#999DAA] text-black gap-2 rounded">
              <select
                name="dropdown"
                id="dropdown"
                className="rounded text-[16px] text-[#999DAA]   focus:outline-none overflow-hidden w-full"
                {...register("countrycode", { required: true })}
              >
                {CountryCode.map((element, index) => {
                  return (
                    <option
                      className="text-[16px] text-[#999DAA]  focus:outline-none placeholder:text-[16px] placeholder:text-[#999DAA]"
                      key={index}
                      value={element.code}
                    >
                      {element.code} - {element.country}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="lg:w-[70%] w-full">
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="1234567890"
                {...register("phoneNumber", {
                  require: true,
                  maxLength: { value: 10, message: "Invalid Phone number" },
                  minLength: { value: 8, message: "Invalid phone number" },
                })}
                className="text-white bg-[#161D29] focus:outline-none placeholder:text-[16px] placeholder:text-[#999DAA] px-1 py-2 rounded w-full"
              />
            </div>
          </div>
          {errors.phoneNumber && (
            <span className="text-red-400">Enter phone number</span>
          )}
        </div>
        {/* message  */}
        <div className="mt-5">
          <label htmlFor="message">Message</label>
          <textarea
            className="bg-[#161D29]  focus:outline-none  placeholder:text-[16px] placeholder:text-[#999DAA] rounded w-full text-black"
            name="message"
            id="message"
            placeholder="Enter Your Message"
            cols={"30"}
            rows={"7"}
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="text-red-400">Enter your message</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-yellow-400 px-1 py-2 mt-5 text-black"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
export default ContactUsForm;
