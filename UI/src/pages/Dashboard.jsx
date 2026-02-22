import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard = () => {
  const { loading: profileLoading } = useSelector((state) => state.profile);
  if (profileLoading) {
    return <div className=".loader"></div>;
  }

  return (
    <div className=" text-white border flex  border-red-400 h-[cal(100vh-3.5rem)] relative">
      <Sidebar />
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-11/12 border border-yellow-400">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
