import { Link } from "react-router-dom";
import { CreateScrapForm, DefaultTemplate } from "../../components";

export const CreateScrapPage = () => {
  return (
    <DefaultTemplate>
      <main>
        <div className="container">
          <Link className="link" to="/dashboard">
            voltar
          </Link>
          <CreateScrapForm />
        </div>
      </main>
    </DefaultTemplate>
  );
};
