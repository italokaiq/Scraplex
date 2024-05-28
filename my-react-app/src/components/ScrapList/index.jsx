import { useContext } from "react";
import { Link } from "react-router-dom";
import { ScrapContext } from "../../providers";
import { ScrapCard } from "./ScrapCard";

export const ScrapList = () => {
  const { scrapList } = useContext(ScrapContext);

  return (
    <div>
      <div>
        <h1 className="title">Lista de Scraps</h1>
        <Link className="btn solid" to="/scraps">
          Deixar Scrap
        </Link>
      </div>
      <ul>
        {scrapList.map((scrap) => (
          <ScrapCard key={scrap.id} scrap={scrap} />
        ))}
      </ul>
    </div>
  );
};
