import { NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const DashboardNav = () => {
  const { isAdmin } = useAdmin();

  return (
    <>
      {isAdmin ? (
        <>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li>
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

export default DashboardNav;
