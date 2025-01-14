import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/home/Home";
import Camps from "../pages/all-camps/Camps";
import CampDetails from "../pages/camp-details/CampDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/camps',
        element: <Camps/>
      },
      {
        path: '/camp-details/:id',
        element: <CampDetails/>,
      },
    ]

  }
])


export default router