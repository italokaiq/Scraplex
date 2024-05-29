import { DefaultTemplate, ScrapList } from "../../components";
import style from "./style.module.scss";

export const DashboardPage = () => {
  return (
    <DefaultTemplate>
      <main className="container">
        <div className={style.container}>
          <ScrapList />
        </div>
      </main>
    </DefaultTemplate>
  );
};
