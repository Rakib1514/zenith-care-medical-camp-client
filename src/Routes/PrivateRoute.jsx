import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return <h2>Loading in private route.....</h2>;
  }

  if (!user) {
    return (
      <Navigate to="/join-us/sign-in" state={{ from: location }} replace />
    );
  }

  if (user) {
    return children;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
