import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import instructor from "../../../assets/Images/instructor.png";
import { FaArrowRight } from "react-icons/fa";
const InstructorSection = () => {
  return (
    <div className="mt-16">
      <div className="flex gap-20 items-center">
        <div className="w-[50%]">
          <img className="object-contain " src={instructor} alt="instructor" />
        </div>
        <div className="flex flex-col justify-center gap-10 w-[40%]">
          <h2 className="text-4xl font-semibold text-white">
            Become <HighlightText> an instructor</HighlightText>{" "}
          </h2>
          <div className="text-[#838894] text-[16px] font-semibold ">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </div>
          <div>
            <CTAButton active={true} linkTo={"/signup"}>
              <div className="flex items-center gap-2">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstructorSection;
