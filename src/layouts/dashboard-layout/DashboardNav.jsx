import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";

const DashboardNav = ({ setOpen, open }) => {
  const { isAdmin } = useAdmin();
  const { user } = useAuth();

  return (
    <>
      {isAdmin && user ? (
        <>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li onClick={() => setOpen(!open)}>
            <NavLink to={"/dashboard/add-camp"}>Add a Camp</NavLink>
          </li>
          <li>
            <NavLink to={"/manage-camps"}>Manage Camps</NavLink>
          </li>
          <li>
            <NavLink to={"/manage-registered-camps"}>Manage Reg Camps</NavLink>
          </li>
        </>
      ) : user && !isAdmin ? (
        <>
          <li>
            <NavLink to={"/"}>Analytics</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Profile</NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/registered-camps/${user?.uid}`}>
              Registered Camps
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Payment History</NavLink>
          </li>
        </>
      ) : (
        <Link to={"/join-us/sign-in"}>Sign in</Link>
      )}

      <div className="divider my-6 "> </div>

      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
    </>
  );
};

DashboardNav.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
};

export default DashboardNav;
