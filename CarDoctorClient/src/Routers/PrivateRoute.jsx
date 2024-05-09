import { useContext } from "react"; // Import from "react", not "react-router-dom"
import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <progress className="progress w-full"></progress>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login" replace />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
