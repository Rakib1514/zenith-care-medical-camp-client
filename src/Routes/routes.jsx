import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/home/Home";
import Camps from "../pages/all-camps/Camps";
import CampDetails from "../pages/camp-details/CampDetails";
import AuthLayout from "../layouts/auth-layout/AuthLayout";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/camps",
        element: <Camps />,
      },
      {
        path: "/camp-details/:id",
        element: <CampDetails />,
      },
    ],
  },
  {
    path: "join-us",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/join-us/sign-in"} />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
