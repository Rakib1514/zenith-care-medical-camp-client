import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

// https://zenith-server.vercel.app
// http://localhost:5000
const axiosSecure = axios.create({
  baseURL: "https://zenith-server.vercel.app",
});

const useAxiosSecure = () => {
  const { userSignOut } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
     (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = token;
      return config;
    },
     (error)=> {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const statusCode = error.response.status;
      if (statusCode === 401 || statusCode === 403) {
        await userSignOut();
        navigate("/join-us/sign-in");
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
