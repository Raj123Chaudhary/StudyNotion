import { Link } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState("");
  const handleNav = (value) => {
    setNav(value.title);
    //     console.log(value.title);
  };
  return (
    <div className="flex h-14 border-b-[1px] border-[#161D29] items-center">
      <div className="w-11/12 mx-auto flex max-w-[1260px] items-center justify-between ">
        {/* image  */}
        <Link>
          <img className="w-[160px] h-[32px]" src={logo} alt="StudyNotion" />
        </Link>
        {/* navtag  */}
        <nav>
          <ul className="flex items-center gap-x-6 text-white">
            {NavbarLinks.map((element, index) => {
              return (
                <li key={index}>
                  {element.title === "Catalog" ? (
                    <div></div>
                  ) : (
                    <Link onClick={() => handleNav(element)} to={element.path}>
                      <p
                        className={`${
                          element.title === nav ? "text-yellow-400" : null
                        } text-[16px ] font-medium`}
                      >
                        {element.title}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* { signup login dashboard } */}
        <div className="flex gap-x-4 items-center"></div>
      </div>
    </div>
  );
};
export default Navbar;
