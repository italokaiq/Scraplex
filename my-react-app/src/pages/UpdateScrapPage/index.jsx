import { Link } from "react-router-dom";
import { UpdateScrapForm, DefaultTemplate } from "../../components";

export const UpdateScrapPage = () => {
  return (
    <DefaultTemplate>
      <main>
        <div className="container">
          <Link className="link" to="/dashboard">
            voltar
          </Link>
          <UpdateScrapForm />
        </div>
      </main>
    </DefaultTemplate>
  );
};
