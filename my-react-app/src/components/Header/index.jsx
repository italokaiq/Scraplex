import { useContext } from "react";
import { scraplexLogo } from "../../assets";
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <header>
      <div className={style.container}>
        <img src={scraplexLogo} alt="Scraplex logo" />
        <div className={style.container__logout}>
          <div>
            <p className="paragraph">{user?.name}</p>
            <p className="paragraph">{user?.email}</p>
          </div>
          <button className="btn" onClick={userLogout}>
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};
