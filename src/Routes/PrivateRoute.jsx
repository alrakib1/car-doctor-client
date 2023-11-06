import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <span className="loading flex max-w-7xl mt-20 items-center justify-center mx-auto loading-spinner loading-lg"></span>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={{from:location}} to="/login"></Navigate>;
};

export default PrivateRoute;
