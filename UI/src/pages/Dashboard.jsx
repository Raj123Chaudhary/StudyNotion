import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard = () => {
  const { loading: profileLoading } = useSelector((state) => state.profile);
  if (profileLoading) {
    return <div className=".loader"></div>;
  }

  return (
    <div className="bg-yellow-500 h-[cal(100vh-3.5rem)] relative">
      <Sidebar />
      <div className="h-full">
        <div className="w-11/12 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
