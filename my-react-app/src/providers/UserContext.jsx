/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services";
import { toast } from "react-toastify";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const tokenLocal = localStorage.getItem("@TOKEN");
  const [token, setToken] = useState(tokenLocal ? tokenLocal : "");

  const userIdLocal = localStorage.getItem("@USERID");
  const [userId, setUserId] = useState(userIdLocal ? userIdLocal : 0);

  const navigate = useNavigate();
  const { state } = useLocation();

  const pathname = window.location.pathname;

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);

        const { data } = await api.get(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(data);
        navigate(pathname);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (token && userId) {
      getUser();
    }
  }, []);

  const userLogin = async (payload, setLoading, reset) => {
    try {
      setLoading(true);

      const { data } = await api.post("/login", payload);

      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", data.user.id);

      setToken(data.accessToken);
      setUserId(data.user.id);

      setUser(data.user);
      navigate(state?.lastRoute ? state.lastRoute : "/dashboard");

      reset();
    } catch (error) {
      console.log(error);
      if (error.response.data === "Cannot find user") {
        toast.error("Credenciais invalidas");
      }
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (payload, setLoading, reset) => {
    try {
      setLoading(true);
      await api.post("/users", payload);

      reset();
      navigate("/");
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    navigate("/");

    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");

    setToken("");
    setUserId(0);

    toast.warn("Deslogando...");
  };

  return (
    <UserContext.Provider
      value={{ token, loading, user, userLogout, userLogin, userRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
