import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import { FaArrowRight } from "react-icons/fa";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/Instructor";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <div className="relative max-w-[1250px] mx-auto flex flex-col text-white w-11/12 items-center">
        <Link>
          <div className=" mt-16 p-1 flex group hover:scale-95 transition-all duration-200  items-center rounded-full   bg-[#161D29] text-[#999DAA] ">
            <div className="flex items-center rounded-full group-hover:bg-[#000814]  transition-all duration-200 px-10 py-1">
              <p>Become an Instructor</p>
              <MdOutlineKeyboardArrowRight className="translate-y-0.5" />
              {/* <p>raj</p> */}
            </div>
          </div>
        </Link>
        {/* heading   */}
        <div className="text-4xl text-center font-semibold mt-7">
          Empower your future with
          <HighlightText>Coding Skills</HighlightText>
        </div>
        {/* paragraph  */}
        <div className="lg:w-[90%] mt-4 text-lg text-center font-bold text-[#838894]">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        {/* two buttons  */}
        <div className="flex mt-8 gap-7 ">
          <CTAButton linkTo={"/signup"} active={true}>
            Learn More
          </CTAButton>
          <CTAButton linkTo={"/login"} active={false}>
            Book a Demo
          </CTAButton>
        </div>
        {/* video section */}
        <div className="my-12 mx-3 white_shadow">
          <video
            className="blue_shadow "
            autoPlay
            muted
            loop
            src={Banner}
          ></video>
        </div>
        {/* code blocks sections */}
        <div className="flex flex-col">
          {/* {code section1} */}
          <div>
            <CodeBlocks
              position={"lg:flex-row"}
              heading={
                <div className="text-4xl">
                  Unlock your <HighlightText>Coding Potential </HighlightText>{" "}
                  with our online courses.
                </div>
              }
              subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              ctabtn1={{
                active: true,
                linkTo: "/signup",
                btnText: "Try it Yourself",
              }}
              ctabtn2={{
                active: false,
                linkTo: "/login",
                btnText: "Learn More",
              }}
              backgroundGradient={true}
              codeblock={`<!DOCTYPE html>
<html>
<head>
<title>Example</title>
<linkrel="stylesheet"href="styles.css">
</head>
<body>
<h1><ahref="/">Header</a></h1>
< nav>
<a href="one/">One</a><ahref="two/">Two</a>
<a href="three/">Three</a>
</nav>`}
              codeColor={"text-yellow-400"}
            />
          </div>
          {/* code section 2 */}
          <div>
            <CodeBlocks
              backgroundGradient={false}
              position={"lg:flex-row-reverse"}
              heading={
                <div className="text-4xl">
                  Start
                  <HighlightText> coding in seconds</HighlightText>{" "}
                </div>
              }
              subheading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              ctabtn1={{
                active: true,
                linkTo: "/signup",
                btnText: "Continue lesson",
              }}
              ctabtn2={{
                active: false,
                linkTo: "/login",
                btnText: "Learn More",
              }}
              codeblock={`<!DOCTYPE html>
<html>
<head>
<title>Example</title>
<linkrel="stylesheet"href="styles.css">
</head>
<body>
<h1><ahref="/">Header</a></h1>
< nav>
<a href="one/">One</a><ahref="two/">Two</a>
<a href="three/">Three</a>
</nav>`}
              codeColor={"text-white"}
            />
          </div>
        </div>
        <ExploreMore />
      </div>
      {/* section 2 */}
      <div className="bg-[#F9F9F9]  text-[#2C333F]">
        <div className="bg_home lg:h-[310px] h-[250px]  ">
          <div className="flex h-full flex-col items-center justify-end mx-auto w-11/12 max-w-[1260px]">
            <div className="lg:h-[110px] h-[150px] ">
              <div className="flex gap-7 text-white">
                <CTAButton linkTo={"/signup"} active={true}>
                  <div className="flex items-center gap-2">
                    Explore Full Catalog
                    <FaArrowRight />
                  </div>
                </CTAButton>
                <CTAButton linkTo={"/login"} active={false}>
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto w-11/12 max-w-[1260px] flex flex-col justify-between items-center gap-7">
          <div className="flex lg:flex-row flex-col gap-5 mb-10 mt-5 lg:mt-[95px] lg:justify-between ">
            <div className="lg:w-[45%] w-full text-4xl font-semibold">
              Get the skills you need{" "}
              <HighlightText>for a job that is in demand.</HighlightText>
            </div>
            <div className="flex flex-col gap-10 w-full lg:w-[40%] ">
              <div className="text-[16px] font-semibold">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkTo={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>
          <TimeLineSection></TimeLineSection>
          <LearningLanguageSection></LearningLanguageSection>
        </div>
      </div>

      {/* section 3  */}
      <div className="w-11/12 max-w-[1260px]   bg-[#000814] mx-auto justify-between items-center flex flex-col gap-8 bg- text-white">
        <InstructorSection />
        <h2 className="capitalize text-center text-4xl font-semibold">
          review form other learners
        </h2>
        {/* slider */}
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};
export default Home;
