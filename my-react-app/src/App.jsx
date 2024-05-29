import { useContext } from "react";
import { Spinner } from "react-loading-io";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./providers";
import { RouterMain } from "./routes/RouterMain";
import "./styles/index.scss";

const App = () => {
  const { loading } = useContext(UserContext);
  const spinnerCfg = { left: "50%", transform: "translateY(150%)" };

  return (
    <>
      {loading ? <Spinner style={spinnerCfg} /> : <RouterMain />}
      <ToastContainer theme="dark" />
    </>
  );
};

export default App;
