import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Avatar, Dropdown, Space } from "antd";
import NavbarLoading from "./loading-components/NavbarLoading";
import { messageSuccess } from "../Utils/messageAlert";

const Navbar = () => {
  const { loading, user, userSignOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await userSignOut();
    } catch (error) {
      // console.log(error);
    }
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/camps">All Camps</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/services" >Services</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <Link to="/join-us">Join Us</Link>
          </li>
        </>
      )}
    </>
  );

  const items = [
    {
      key: "1",
      label: user?.displayName,
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "Dashboard",
      extra: "⌘D",
      path: "/dashboard",
    },
    {
      key: "3",
      label: "Sign out",
      extra: "⌘",
      path: "/sign-out",
    },
  ];

  const handleNavigate = async ({ key }) => {
    const selectItem = items.find((item) => item.key === key);

    if (selectItem && selectItem.path) {
      if (selectItem.path === "/sign-out") {
        await handleSignOut();
        messageSuccess("Signed Out");
        return;
      }
      navigate(selectItem.path);
    }
  };

  if (loading) {
    return <NavbarLoading />;
  }

  return (
    <div className="bg-menu_bg">
      <div className="container navbar mx-auto">
        <div className="navbar-start">
          <Link
            to="/"
            className="flex items-center gap-1 font-bold md:text-xl md:font-semibold"
          >
            <img
              src="https://i.ibb.co.com/020DWTL/istockphoto-1321617070-1024x1024-1.png"
              alt=""
              className="h-10"
            />
            <span>Zenith Care</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {/* User Profile */}
          {user && (
            <Dropdown
              menu={{
                items,
                onClick: handleNavigate,
              }}
            >
              <Space>
                <Avatar size="large" icon={<img src={user?.photoURL} />} />
              </Space>
            </Dropdown>
          )}
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
