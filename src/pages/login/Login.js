import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormData from "../../components/formData/FormData";
import { infoBody, training, users } from "../../mock/users.js";
import { torse, bras, jambes } from "../../mock/perf.js";
import { planning } from "../../mock/planning.js";
import { validationLoginForm } from "./utils/variables";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setCtx }) => {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const mockBdd = [...users, ...infoBody, training, torse, bras, jambes, planning];

  return (
    <form
      data-testid='loginpage'
      className='login-form'
      onSubmit={(e) => validationLoginForm(e, pseudo, password, setCtx, mockBdd, navigate)}
    >
      <h2 className='txt-center uppercase color-light'>Connexion</h2>
      <FormData label='pseudo' valueInput={pseudo} handleChange={(e) => setPseudo(e.target.value)} />
      <FormData
        label='password'
        typeInput='password'
        valueInput={password}
        handleChange={(e) => setPassword(e.target.value)}
      />

      <input className='link-button uppercase' type='submit' value='Se connecter' />
    </form>
  );
};
export default Login;
