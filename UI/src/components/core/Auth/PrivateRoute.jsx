import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  console.log("i am in private route");
  const { token } = useSelector((state) => state.auth);
  if (token !== null) {
    return children;
  } else return <Navigate to={"/login"} />;
};
export default PrivateRoute;
