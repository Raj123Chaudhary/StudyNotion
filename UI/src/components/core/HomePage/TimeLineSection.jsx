import { FaParagraph } from "react-icons/fa";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineimage from "../../../assets/Images/Timelineimage.png";
const TimeLineSection = () => {
  const timeline = [
    {
      logo: Logo1,
      header: "Leadership",
      subheader: "Fully committed to the success company",
    },
    {
      logo: Logo2,
      header: "Leadership",
      subheader: "Fully committed to the success company",
    },
    {
      logo: Logo3,
      header: "Leadership",
      subheader: "Fully committed to the success company",
    },
    {
      logo: Logo4,
      header: "Leadership",
      subheader: "Fully committed to the success company",
    },
  ];
  return (
    <div className="mb-24 ">
      <div className="flex lg:flex-row flex-col items-center gap-[76px] ">
        <div className="lg:w-[45%]  flex flex-col ">
          {timeline.map((element, index) => {
            return (
              <div key={index} className="flex flex-col">
                <div className="flex  flex-row gap-5" key={index}>
                  <div className="flex rounded-full  bg-white h-[60px] w-[60px] items-center justify-center">
                    <img src={element.logo} alt="logo" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h2 className="font-semibold text-[18px]">
                      {element.header}
                    </h2>
                    <p className="text-[16px]">{element.subheader}</p>
                  </div>
                </div>
                {index === 3 ? null : (
                  <div className="border-dashed border-[#C5C7D4] h-12 border-l ml-8 my-2"></div>
                )}
              </div>
            );
          })}
        </div>
        <div className="relative ">
          <img
            src={timelineimage}
            alt="timelineimage"
            className="z-0 white_shadow"
          />
          <div className="bg-[#014A32] translate-y-[-50%] left-[10%] right-[10%] w-[80%] absolute z-10  py-9 flex px-9 gap-10  justify-center items-center ">
            <div className="flex gap-10 justify-center items-center">
              <h2 className="text-3xl font-bold text-white">10</h2>
              <p className=" font-semibold text-[#05A77B] text-sm">
                Years Experience
              </p>
            </div>
            <div className="text-4xl text-[#037957]">|</div>
            <div className="flex gap-10 justify-center items-center ">
              <h2 className="text-3xl font-bold text-white">250</h2>
              <p className="text-sm text-[#05A77B] font-bold">
                Types of Courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLineSection;
