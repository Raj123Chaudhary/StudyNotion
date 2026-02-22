import { useSelector } from "react-redux";
import { sidebarLinks } from "../../../data/dashboard-links";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  if (authLoading) {
    return <div className="loader"></div>;
  }
  return (
    <div>
      <div className="flex flex-col min-w-[222px] w-[222px] h-[calc[100vh-3.5rem]] border-r">
        <div className="flex flex-col">
          {sidebarLinks.map((sidebar, index) => {
            return (
              <div
                className={`${location.pathname === sidebar.path ? "bg-amber-300" : null}`}
                key={sidebar.id}
              >
                <Link to={`${sidebar.path}`}>
                  {sidebar.id === 1 ? (
                    <div className="p-2">{sidebar.name}</div>
                  ) : sidebar.type === user.accountType ? (
                    <div className={`p-2`}>{sidebar.name}</div>
                  ) : null}
                </Link>
              </div>
            );
          })}
          <div>
            <div className="p-2">setting</div>
            <div className="p-2">logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
