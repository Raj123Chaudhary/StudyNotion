import HighlightText from "../HomePage/HighlightText";
import CTAButton from "../HomePage/CTAButton";
const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto grid-cols-1 gap-5 mb-10 lg:grid-cols-4">
      {LearningGridArray.map((card, index) => {
        return (
          <div
            key={index}
            className={`${index === 0 && "lg:col-span-2 bg-transparent"} ${
              card.order % 2 === 1 ? "bg-[#2C333F]" : "bg-[#161D29]"
            }
            ${card.order === 3 && "lg:col-start-2"} lg:h-[250px]
            `}
          >
            {card.order < 0 ? (
              <div>
                <div className="text-white text-4xl font-semibold w-[80%]">
                  {card.heading}
                  <HighlightText>{card.highlightText}</HighlightText>
                </div>
                <p className="text-[#838894] font-medium mt-4 w-[90%]">
                  {card.description}
                </p>
                <div className="mt-5">
                  <CTAButton active={true} linkTo={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <h1 className="text-[#F1F2FF] text-[18px]">{card.heading}</h1>
                <p className="text-[#AFB2BF] text-[14px] mt-5">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default LearningGrid;
