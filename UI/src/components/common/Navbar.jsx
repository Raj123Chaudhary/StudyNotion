import { Link, useNavigate } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { apiConnector } from "../../services/apiConnector";
import { COURSE_API } from "../../services/apis";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { logout } from "../../features/authSlice/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("user in navbar : ", user);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { totalItems } = useSelector((state) => state.cart);
  const [subLinks, setSubLinks] = useState([]);
  console.log("user:", user?.accountType);
  const profileRef = useRef(null);
  const getAllCategory = async () => {
    try {
      let response = await apiConnector("GET", COURSE_API.GET_ALL_CATEGORIES);
      let result = response?.data?.allCategory;
      setSubLinks(result);
      // console.log(result);
    } catch (error) {
      console.log(error?.message, "error while fetching categoriess");
    }
  };
  useEffect(() => {
    getAllCategory();

    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [nav, setNav] = useState("");
  const handleNav = (value) => {
    setNav(value.title);
    //     console.log(value.title);
  };
  const handleLogout = () => {
    setIsProfileOpen(!isProfileOpen);
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="flex h-14 border-b-[1px] border-[#161D29] items-center">
      <div className="w-11/12 mx-auto flex max-w-[1260px] items-center justify-between ">
        {/* image part 1 */}
        <Link to={"/"}>
          <img className="w-[160px] h-[32px]" src={logo} alt="StudyNotion" />
        </Link>
        {/* navtag part 2   */}
        <nav>
          <ul className="flex lg:flex hidden items-center gap-x-6 text-white">
            {NavbarLinks.map((element, index) => {
              return (
                <li key={index}>
                  {element.title === "Catalog" ? (
                    <div className="relative group">
                      <p className="flex items-center gap-1 text-[16px ] font-medium">
                        Catalog{" "}
                        <MdOutlineKeyboardArrowDown className="text-xl translate-y-0.5" />
                      </p>
                      {/* hover property to catalog  */}
                      <div className="absolute w-[300px] translate-y-[5%] p-3 m-1 z-20 translate-x-[-40%] rounded-md transition-all duration-200 opacity-0  bg-white group-hover:opacity-100 invisible group-hover:visible">
                        <div className="h-6 w-6 bg-white left-44 -translate-y-5.5 -z-10   absolute  rounded rotate-45"></div>
                        {subLinks.map((element, index) => {
                          return (
                            <div
                              key={index}
                              className="text-gray-800 p-3 rounded hover:bg-[#999DAA]  "
                            >
                              {element.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
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

        {/* { signup login dashboard part 3 } if token is come when user login */}

        <div className="flex gap-x-4 items-center">
          {user && user?.accountType === "Instructor" && (
            <div className="flex gap-4 items-center">
              <GoSearch className="text-white text-xl" />
              <Link to={"#"}>
                <IoCartOutline className="text-white text-xl" />
                {totalItems > 0 && (
                  <span className="text-white border ">{totalItems}</span>
                )}
              </Link>
              <div ref={profileRef} className="w-8 items-center relative">
                <img
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  src={user.image}
                  className="w-full cursor-pointer rounded-full"
                  alt="user iMage"
                />
                {isProfileOpen && (
                  <div className="bg-white absolute w-30  -translate-x-15 rounded z-20   translate-y-4 ">
                    <div
                      onClick={() => {
                        navigate("/dashboard/my-profile");
                        setIsProfileOpen(!isProfileOpen);
                      }}
                      className="border-b cursor-pointer p-2"
                    >
                      Dashboard
                    </div>
                    <div onClick={handleLogout} className="cursor-pointer p-2">
                      Logout
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* { signup login dashboard part 3 } if token is come when user login */}
          {user && user?.accountType === "Student" && (
            <div className="flex gap-4 items-center">
              <GoSearch className="text-white text-xl" />
              <Link to={"#"}>
                <IoCartOutline className="text-white text-xl" />
                {totalItems > 0 && (
                  <span className="text-white border ">{totalItems}</span>
                )}
              </Link>
              <div ref={profileRef} className="w-8 items-center relative">
                <img
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  src={user.image}
                  className="w-full cursor-pointer rounded-full"
                  alt="user iMage"
                />
                {isProfileOpen && (
                  <div className="bg-white absolute w-30 border-2 -translate-x-15 rounded z-20   translate-y-4 ">
                    <div
                      onClick={() => {
                        navigate("/dashboard/my-profile");
                        setIsProfileOpen(!isProfileOpen);
                      }}
                      className="border-b cursor-pointer p-2"
                    >
                      Dashboard
                    </div>
                    <div onClick={handleLogout} className=" cursor-pointer p-2">
                      Logout
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* if token is null  */}
          {token === null && (
            <Link to={"/login"}>
              <button className="text-[#AFB2BF] border bg-[#2C333F] cursor-pointer  rounded-md px-[12px] py-[8px]">
                Login
              </button>
            </Link>
          )}
          {/* if token us null */}
          {token === null && (
            <Link to={"/signup"}>
              <button className="text-[#AFB2BF] border bg-[#2C333F] cursor-pointer  rounded-md  px-[12px] py-[8px]">
                Signup
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
