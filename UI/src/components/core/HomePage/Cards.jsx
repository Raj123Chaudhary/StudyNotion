import { MdAccessibilityNew } from "react-icons/md";
import { SiLinktree } from "react-icons/si";
const Cards = ({ currentCard, element }) => {
  // console.log("currentCart:", currentCard);
  // console.log("element:", element);
  return (
    <div
      className={`flex  w-[80%]   
    lg:w-[23rem] ${
      currentCard === element.heading
        ? "bg-white text-black yellow_shadow "
        : " bg-[#161D29]"
    } flex-col `}
    >
      <h1 className="text-xl mx-5  my-6 font-semibold ">{element.heading}</h1>
      <p className=" mx-5 font-semibold text-[17px] text-[#838894]">
        {element.description}{" "}
      </p>

      <div
        className={`${
          currentCard === element.heading
            ? "text-[#0A5A72] border-[#0A5A72]  "
            : null
        } flex justify-between py-3 px-5 mt-20  mb-4 font-semibold border-[#C5C7D4] text-[16px] border-t-2 border-dashed`}
      >
        <div className="flex items-center gap-2 ">
          <MdAccessibilityNew />
          {element.level}
        </div>
        <div className="flex gap-2 items-center">
          <SiLinktree />
          {element.lessionNumber} Lesson
        </div>
      </div>
    </div>
  );
};
export default Cards;
