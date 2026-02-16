import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  backgroundGradient,
  codeColor,
  codeblock,
}) => {
  const [key, setKey] = useState(0);
  // console.log(backgroundGradient);
  //   console.log(ctabtn1.active);
  return (
    <div
      className={`flex my-20 ${position} lg:flex-row flex-col lg:justify-between justify-center items-center gap-30`}
    >
      {/* {section1} */}
      <div className={`flex flex-col  lg:w-[55%] w-[100%]`}>
        <div className="font-bold ">{heading}</div>
        <div className="text-[#838894] text-lg mt-5 font-bold">
          {subheading}
        </div>
        <div className="flex gap-7 mt-12">
          <CTAButton active={ctabtn1.active} linkTo={ctabtn1.linkTo}>
            <div className="flex items-center gap-2">
              <p>{ctabtn1.btnText}</p>
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkTo={ctabtn2.linkTo}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>
      {/* section 2 */}
      <div
        className={`flex lg:w-[45%] lg:flex-row w-[100%] ${
          backgroundGradient ? "sun_shadow" : "sun_shadow2"
        }    ${
          backgroundGradient ? "codeBlock_glow" : "codeBlock_glow2"
        } text-[15px]  mr-6 p-2`}
      >
        {/* HW gradient */}
        <div className="text-center flex flex-col w-[10%] font-bold">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div
          className={`w-[90%] flex flex-col gap-2 pr-2 font-bold ${codeColor}`}
        >
          <TypeAnimation
            //   key={key}
            sequence={[
              codeblock,
              2000,
              "", // wait after typing
              //     () => setKey((prev) => prev + 1), // 🔥 instant reset
            ]}
            wrapper="pre"
            repeat={Infinity}
            disp
            //   style={{ display: "block", whiteSpace: "pre-line" }}
            omitDeletionAnimation={true}
            //   repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};
export default CodeBlocks;
