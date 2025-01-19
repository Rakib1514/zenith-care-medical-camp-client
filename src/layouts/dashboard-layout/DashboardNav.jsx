import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";

const DashboardNav = ({ setOpen, open }) => {
  const { isAdmin } = useAdmin();
  const { user } = useAuth();

  let link = false;

  if(window.innerWidth < 767){
    link = true
  }

  const drawerClose = () => {
    if(link){
      setOpen(!open)
    }
  }

  return (
    <>
      {isAdmin && user ? (
        // !Admin Routes
        <>
          <li>
            <NavLink to={`/`}>Profile</NavLink>
          </li>
          <li onClick={drawerClose}>
            <NavLink to={"/dashboard/add-camp"}>Add a Camp</NavLink>
          </li>
          <li onClick={drawerClose}>
            <NavLink to={"/dashboard/manage-camps"}>Manage Camps</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manage-reg-camps"}>Manage Reg Camps</NavLink>
          </li>
        </>
      ) : user && !isAdmin ? (
        // ! User route
        <>
          <li>
            <NavLink to={"/"}>Analytics</NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/profile/${user?.uid}`}>Profile</NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/registered-camps/${user?.uid}`}>
              Registered Camps
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/transactions/${user.uid}`}>
              Payment History
            </NavLink>
          </li>
        </>
      ) : (
        <Link to={"/join-us/sign-in"}>Sign in</Link>
      )}

      <div className="divider my-6 "> </div>
      {/* For all user */}
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
    </>
  );
};

DashboardNav.propTypes = {
  setOpen: PropTypes.any,
  open: PropTypes.any,
};

export default DashboardNav;
