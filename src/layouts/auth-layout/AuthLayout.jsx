import { Link, Outlet } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading";
import { IoMdArrowRoundBack } from "react-icons/io";

const AuthLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="container mx-auto min-h-vh px-6">
        <SectionHeading heading="Join Us Today" subHeading="Access your personalized dashboard and manage your health journey."/>
        <Link to={'/'} ><button className="btn btn-ghost"> <IoMdArrowRoundBack />Home</button></Link>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
