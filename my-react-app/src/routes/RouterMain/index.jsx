import { Route, Routes } from "react-router-dom";
import {
  CreateScrapPage,
  DashboardPage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
  UpdateScrapPage,
} from "../../pages";
import { PrivateRoutes } from "../PrivateRoutes";
import { PublicRoutes } from "../PublicRoutes";

export const RouterMain = () => {
  return (
    <Routes>
      {/* Rotas publicas, apenas usuários DESLOGADOS podem acessar. */}
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Rotas privadas, apenas usuários LOGADOS podem acessar. */}
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/scraps" element={<CreateScrapPage />} />
        <Route path="/scraps/edit" element={<UpdateScrapPage />} />
      </Route>

      {/* Rotas "globais", usuários LOGADOS e DESLOGADOS podem acessar. */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
