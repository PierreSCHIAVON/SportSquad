import { Navigate, Outlet } from "react-router-dom";

// Vérification si l'utilisateur est connecté
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
