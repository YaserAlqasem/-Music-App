import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";

const Routes = () => {
  const ActiveRoutes = MainRoutes; // This code will be update once we have Authentication
  return useRoutes([ActiveRoutes]);
};

export default Routes;
