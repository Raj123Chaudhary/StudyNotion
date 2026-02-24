import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard = () => {
  const { loading: profileLoading } = useSelector((state) => state.profile);
  if (profileLoading) {
    return <div className=".loader"></div>;
  }

  return (
    <div className=" text-white flex  h-[cal(100vh-3.5rem)] relative">
      <Sidebar />
      <div className="h-full w-full border-t  border-gray-600  ">
        <div className="w-11/12 h-full  mx-auto  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
