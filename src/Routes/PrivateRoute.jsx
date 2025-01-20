import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import DetailsLoading from "../components/loading-components/DetailsLoading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return <DetailsLoading/>
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
