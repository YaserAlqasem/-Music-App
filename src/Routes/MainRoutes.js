import { Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../Views/Dashboard";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
};

export default MainRoutes;
