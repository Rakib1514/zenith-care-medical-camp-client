import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>
  }
])


export default router