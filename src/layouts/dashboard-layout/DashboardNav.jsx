import { NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import PropTypes from "prop-types";

const DashboardNav = ({ setOpen, open }) => {
  const { isAdmin } = useAdmin();

  return (
    <>
      {isAdmin ? (
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
      ) : (
        <>Working on it</>
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
