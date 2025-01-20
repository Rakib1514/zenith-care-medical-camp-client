import { Link, Outlet, useLocation } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Button } from "antd";

const AuthLayout = () => {
  const location = useLocation();

  const heading =
    location.pathname === "/join-us/sign-up"
      ? "Create Your Account"
      : location.pathname === "/join-us/sign-in"
      ? "Sign In Now"
      : "";

  const btnText =
    location.pathname === "/join-us/sign-up"
      ? "Go to Sign In"
      : location.pathname === "/join-us/sign-in"
      ? "Go to Sign up"
      : "";
  const btnLink =
    location.pathname === "/join-us/sign-up"
      ? "/join-us/sign-in"
      : location.pathname === "/join-us/sign-in"
      ? "/join-us/sign-up"
      : "";

  return (
    <div className="overflow-x-hidden">
      <div className="container mx-auto min-h-vh px-6">
        <SectionHeading
          heading={heading}
          subHeading="Access your personalized dashboard and manage your health journey."
        />
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <button className="btn btn-ghost">
              <IoMdArrowRoundBack />
              Home
            </button>
          </Link>
          <Link to={btnLink}>
            <Button className="bg-primary text-white">{btnText}</Button>
          </Link>
          <div></div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
