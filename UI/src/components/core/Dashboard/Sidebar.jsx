import { useDispatch, useSelector } from "react-redux";
import { sidebarLinks } from "../../../data/dashboard-links";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as Icons from "react-icons/vsc";
import { useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [confirmationModal, setConfirmationModal] = useState(null);
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  if (authLoading) {
    return <div className="loader"></div>;
  }
  return (
    <div className=" h-[calc(100vh-3.6rem)]">
      <div className="flex flex-col min-w-[222px]    w-[222px] bg-(--richblack-800) h-[calc(100vh-3.6rem)] border-t  border-gray-600  border-r-2">
        <div className="flex  flex-col mt-10  ">
          {sidebarLinks.map((sidebar, index) => {
            const Icon = Icons[sidebar.icon];
            return (
              <div
                className={`${location.pathname === sidebar.path ? "bg-[#3D2A01] text-[#FFD60A] font-semibold " : ""}`}
                key={sidebar.id}
              >
                <Link to={`${sidebar.path}`}>
                  {sidebar.id === 1 ? (
                    <div className="py-2 px-4 flex gap-2 items-center">
                      <Icon className="text-lg font-semibold"></Icon>
                      <span>{sidebar.name}</span>
                    </div>
                  ) : sidebar.type === user.accountType ? (
                    <div className={`py-2 px-4 flex gap-2 items-center`}>
                      {" "}
                      <Icon className="text-lg font-semibold"></Icon>
                      <span>{sidebar.name}</span>
                    </div>
                  ) : null}
                  {sidebar.id === 7 && (
                    <div className="w-11/12 mx-auto h-1 mt-3 mb-2 bg-gray-500  "></div>
                  )}
                  {sidebar.id === 8 && (
                    <div className="py-2 px-4 flex gap-2 items-center  ">
                      <Icon className="text-lg font-semibold"></Icon>
                      <span>{sidebar.name}</span>
                    </div>
                  )}
                </Link>
              </div>
            );
          })}
          <div className="py-2 px-4 flex gap-2 items-center  ">
            <Icons.VscCloseAll className="text-lg font-semibold" />
            <button
              className="cursor-pointer"
              onClick={() =>
                setConfirmationModal({
                  text1: "Are you sure",
                  text2: "After Confirm You Account have Logout",
                  btn1Text: "Cancel",
                  btn2Text: "Logout",
                  btn1Handler: () => dispatch(logout(navigate)),
                  btn2Handler: () => setConfirmationModal(null),
                })
              }
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
