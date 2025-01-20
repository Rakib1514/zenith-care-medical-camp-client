import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/home/Home";
import Camps from "../pages/all-camps/Camps";
import CampDetails from "../pages/camp-details/CampDetails";
import AuthLayout from "../layouts/auth-layout/AuthLayout";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import DashboardLayout from "../layouts/dashboard-layout/DashboardLayout";
import AddCamp from "../pages/add-camp/AddCamp";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import RegisteredCamps from "../pages/registered-camps/RegisteredCamps";
import Payment from "../pages/Payment/Payment";
import PaymentHistory from "../pages/payment-history/PaymentHistory";
import ManageCamps from "../pages/manage-camp/ManageCamps";
import ManageRegCamps from "../pages/manage-reg-camps/ManageRegCamps";
import UserProfile from "../pages/profile/UserProfile";

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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile/:uid",
        element: <UserProfile />,
      },
      // Admin Routes
      {
        path: "add-camp",
        element: (
          <AdminRoute>
            <AddCamp />
          </AdminRoute>
        ),
      },
      {
        path: "manage-camps",
        element: (
          <AdminRoute>
            <ManageCamps />
          </AdminRoute>
        ),
      },
      {
        path: "manage-reg-camps",
        element: (
          <AdminRoute>
            <ManageRegCamps />
          </AdminRoute>
        ),
      },

      // Participant Routes
      {
        path: "registered-camps/:uid",
        element: <RegisteredCamps />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
      },
      {
        path: "transactions/:uid",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
