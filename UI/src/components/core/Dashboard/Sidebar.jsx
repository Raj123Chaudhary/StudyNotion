import { useSelector } from "react-redux";
import { sidebarLinks } from "../../../data/dashboard-links";

const Sidebar = () => {
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  if (authLoading) {
    return <div className="loader"></div>;
  }
  return (
    <div>
      <div className="flex flex-col min-w-[222px] h-[calc[100vh-3.5rem]] border-r">
        <div className="flex flex-col">
          {sidebarLinks.map((sidebar, index) => {
            return (
              <div>
                <div>{sidebar.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
