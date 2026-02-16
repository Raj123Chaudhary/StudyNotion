import HighlightText from "../../../components/core/HomePage/HighlightText";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Template = ({ title, description1, description2, image, formType }) => {
  return (
    <div>
      <div className="w-11/12 max-w-[1260px]   mx-auto justify-between lg:flex-row flex flex-col-reverse lg:items-center  min-h-[90vh] p-5  ">
        {/* form data */}
        <div className="flex flex-col lg:w-[40%] mt-5  border">
          <h1 className="text-[1.875rem] text-[#F1F2FF] font-semibold leading-[2.375rem]">
            {title}
          </h1>
          <p className="text-[#AFB2BF] mt-4 text-[1.125rem] leading-[1.625rem]">
            {description1}
          </p>
          <HighlightText>
            <i className=" text-[1rem] leading-[1.625rem]">{description2}</i>
          </HighlightText>
          {formType == "signup" ? <SignupForm /> : <LoginForm />}
        </div>
        {/* img  */}
        <div className="border  lg:w-[40%]  ">
          <img className="" src={image} alt="loginImage" />
        </div>
      </div>
    </div>
  );
};
export default Template;
