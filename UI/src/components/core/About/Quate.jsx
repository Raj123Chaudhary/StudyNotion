import HighlightText from "../HomePage/HighlightText";

const Quate = () => {
  return (
    <div className="text-[#AFB2BF] text-4xl mx-auto mt-20 text-center w-[80%]">
      We are passionate about revolutionizing the way we learn. Our innovative
      platform <HighlightText>combines technology</HighlightText>
      <span className="text-orange-600">, expertise</span>, and community to
      create{" "}
      <span className="text-yellow-500">
        {" "}
        an unparalleled educational experience.
      </span>
    </div>
  );
};
export default Quate;
