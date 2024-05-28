import style from "./style.module.scss";
import { scraplexWhite } from "../../assets";

export const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.container__box}>
        <img src={scraplexWhite} alt="Scraplex logo" />
        <p className="paragraph white">
          &copy; Todos os direitos reservados - scraplex.
        </p>
      </div>
    </footer>
  );
};
