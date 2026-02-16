import HighlightText from "./HighlightText";
import Cards from "./Cards";
import { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
const ExploreMore = () => {
  const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
  ];
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [coures, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );
  const handleValue = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter(
      (element, index) => element.tag === value
    );
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
    //     console.log(coures);
    //     console.log(currentCard);
    //     console.log(currentTab);
  };
  return (
    <div className="w-full mb-15">
      <div className="flex flex-col w-full relative justify-center ">
        <h2 className="text-4xl font-semibold text-center">
          Unlock the <HighlightText>Power of Code</HighlightText>{" "}
        </h2>
        <p className="text-[16px] text-[#838894] font-semibold text-center mx-auto mt-2">
          Learn to Build Anything You Can Imagine
        </p>
        <div className="rounded-full bg-[#161D29] hidden  border mx-auto lg:flex justify-between gap-7 px-2 py-1 mt-5">
          {tabsName.map((element, index) => {
            return (
              <div
                key={index}
                onClick={() => handleValue(element)}
                className={`px-6 rounded-full  ${
                  currentTab === element ? "bg-[#000814] text-white" : null
                }
                py-2 text-[16px] font-semibold text-[#838894] transition-all duration-200 hover:bg-[#000814]  hover:text-white  `}
              >
                {element}
              </div>
            );
          })}
        </div>
        <div className="xl:h-[150px] h-0 "></div>
        {/* card container */}
        <div className=" flex flex-row w-full lg:gap-12 gap:6 gap-y-6 flex-wrap justify-center relative mt-5  xl:absolute xl:top-[69%] xl:left-0">
          {coures.map((element, index) => {
            return (
              <Cards
                key={index}
                element={element}
                currentCard={currentCard}
              ></Cards>
            );
          })}
        </div>{" "}
      </div>
    </div>
  );
};
export default ExploreMore;
