import { Link } from "react-router-dom";
import { MdEdit, MdDelete, MdVisibility } from "react-icons/md";
import { useContext } from "react";
import { ScrapContext, UserContext } from "../../../providers";

export const ScrapCard = ({ scrap }) => {
  const { user } = useContext(UserContext);
  const { deleteScrap, selectScrapEdit } = useContext(ScrapContext);

  return (
    <li>
      <div>
        <span className="paragraph">
          <strong>{scrap?.author}</strong> {scrap?.email}
          <p className="paragraph">{scrap?.content}</p>
        </span>
      </div>
      <div>
        {user.id === scrap.userId ? (
          <>
            <button
              title="Editar"
              aria-label="edit"
              onClick={() => selectScrapEdit(scrap)}
            >
              <MdEdit />
            </button>

            <button
              title="Deletar"
              aria-label="delete"
              onClick={() => deleteScrap(scrap.id)}
            >
              <MdDelete />
            </button>
          </>
        ) : null}

        <Link to="" title="Visualizar" aria-label="view">
          <MdVisibility />
        </Link>
      </div>
    </li>
  );
};
