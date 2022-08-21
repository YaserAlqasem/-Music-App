import { Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
};

export default MainRoutes;
