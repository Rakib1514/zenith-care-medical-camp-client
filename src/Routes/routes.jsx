import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/home/Home";
import Camps from "../pages/all-camps/Camps";

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
      }
    ]

  }
])


export default router