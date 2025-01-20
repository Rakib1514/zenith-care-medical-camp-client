import PropTypes from "prop-types";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import DetailsLoading from "../components/loading-components/DetailsLoading";

const AdminRoute = ({ children }) => {
  const { user, userSignOut, loading } = useAuth();
  const { isAdmin, isLoading } = useAdmin();
  const location = useLocation();

  if (isLoading || loading) {
    return <DetailsLoading/>;
  }

  if (user && isAdmin) {
    return children;
  }

  userSignOut();
  
  return (
    
    <Navigate to={"/join-us/sign-in"} state={{ from: location }} replace />
  );
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
