import HighlightText from "../components/core/HomePage/HighlightText";
const SignUp = () => {
  const user = ["Student", "Instructor"];
  return (
    <div>
      <div className="w-11/12 max-w-[1260px] min-h-screen bg-[#000814] text-white flex mx-auto gap-15 items-center">
        {/* sign details */}
        <div className="w-[40%]">
          <h2 className="text-4xl text-white font-semibold">
            Join the millions learning to code with StudyNotion for free
          </h2>
          <p className="text-[#AFB2BF] mt-4">
            Build skills for today, tomorrow, and beyond.{" "}
            <i>
              <HighlightText>
                Education to future-proof your career.
              </HighlightText>
            </i>{" "}
          </p>
          <div className="flex gap-2 mt-4 bg-[#161D29] rounded-full w-fit px-2 py-1">
            {user.map((element, index) => {
              return (
                <div
                  className="px-6 text-[16px] font-medium py-2 rounded-full hover:bg-[#000814] transition-all duration-150"
                  key={index}
                >
                  {element}
                </div>
              );
            })}
          </div>
        </div>
        {/* signup image */}
        <div></div>
      </div>
    </div>
  );
};
export default SignUp;
