import Lottie from "lottie-react";
import ErrorAnime from "../../assets/Error.json";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <div>
      <Helmet title={`Zenith | Error Page`}/>
      <Navbar />
      <div className="min-h-svh flex flex-col items-center w-11/12 mx-auto">
        <h2 className="py-4 md:text-3xl text-xl font-bold font-openSans">
          Uh-oh! This is a wrong Route
        </h2>
        <p>404 Page Not Found...... Go home</p>
        <Lottie className="h-96" animationData={ErrorAnime} loop={true} />
        <Link className="btn bg-primary text-white hover:text-black mt-4">
          Take me Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
