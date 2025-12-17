import { Link } from "react-router-dom";

const CTAButton = ({ children, linkTo, active }) => {
  return (
    <Link to={linkTo}>
      <button
        className={`text-center py-3 px-6 text-[16px] rounded-md transition-all cursor-pointer duration-200 hover:scale-95 font-bold ${
          active ? "text-black bg-yellow-400" : "text-white bg-[#161D29]"
        } `}
      >
        {children}
      </button>
    </Link>
  );
};
export default CTAButton;
