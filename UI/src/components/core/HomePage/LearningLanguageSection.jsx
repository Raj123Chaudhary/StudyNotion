import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Know_your_progress from "../../../assets/Images/Know_your_progress.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";
const LearningLanguageSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center ">
          Your swiss knife for{" "}
          <HighlightText>learning any language</HighlightText>{" "}
        </h2>
        <div className="font-semibold text-[16px] mx-auto w-[50%] text-center mt-3 text-[#2C333F]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="mt-4 flex flex-row">
          <img
            className="-mr-[100px]  "
            src={Know_your_progress}
            alt="Know_your_progress"
          />
          <img
            src={compare_with_others}
            alt="compare_with_others"
            className=""
          />
          <img
            className="-ml-[130px] "
            src={Plan_your_lessons}
            alt="Plan_your_lessons"
          />
        </div>
        <div className="mt-5 mb-15">
          <CTAButton active={true} linkTo={"/login"}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </div>
  );
};
export default LearningLanguageSection;
