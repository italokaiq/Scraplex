import { useContext } from "react";
import { UserContext } from "../../providers";
import { Navigate, Outlet } from "react-router-dom";

// Navigate -> Um componente para redirecionar ao ser renderizado.
// Outlet -> Semelhante ao prop children, existe para renderizar uma rota filha.

export const PublicRoutes = () => {
  const { user } = useContext(UserContext);

  return user ? <Navigate to="/dashboard" /> : <Outlet />;
};
