import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ScrapContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ScrapProvider = ({ children }) => {
  const { user, token } = useContext(UserContext);
  const [scrapList, setScrapList] = useState([]);
  const [editScrap, setEditScrap] = useState(null);

  const navigate = useNavigate();

  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const getScraps = async () => {
      try {
        const { data } = await api.get("/scraps");
        setScrapList(data);
      } catch (error) {
        console.log(error);
      }
    };

    getScraps();
  }, []);

  /** Exemplo de corpo da requisição
   * {
      "author": "Nome do author",
      "email": "E-mail do author",
      "content": "Conteúdo do scrap",
      "userId": "id do usuário (deve ser um inteiro)"
      }
   */

  const createScrap = async ({ content }, setLoading, reset) => {
    try {
      setLoading(true);
      const { name, email, id } = user;
      const newScrap = { author: name, email, userId: id, content };

      const { data } = await api.post("/scraps", newScrap, authHeader);

      reset();
      setScrapList([...scrapList, data]);
      toast.success("Scrap feito com sucesso!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteScrap = async (scrapId) => {
    try {
      await api.delete(`/scraps/${scrapId}`, authHeader);

      const filteredScraps = scrapList.filter(({ id }) => id !== scrapId);
      setScrapList(filteredScraps);
      toast.success("Scrap excluida com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const selectScrapEdit = (scrap) => {
    setEditScrap(scrap);
    navigate("/scraps/edit");
  };

  const updateScrap = async (payload, setLoading, reset) => {
    try {
      setLoading(true);
      const newEditScrap = { ...editScrap, ...payload };
      const { data } = await api.patch(
        `/scraps/${newEditScrap.id}`,
        newEditScrap,
        authHeader
      );

      const newScraps = scrapList.map((scrap) =>
        scrap.id === newEditScrap.id ? data : scrap
      );

      reset();
      setEditScrap(null);
      setScrapList(newScraps);
      toast.success("Scrap editada com sucesso!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrapContext.Provider
      value={{
        scrapList,
        editScrap,
        createScrap,
        updateScrap,
        deleteScrap,
        selectScrapEdit,
      }}
    >
      {children}
    </ScrapContext.Provider>
  );
};
