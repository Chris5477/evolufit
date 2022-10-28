import { ChangeEvent, Dispatch, FormEvent, FunctionComponent, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormData from "../../components/formData/FormData";
import { infoBody, training, users } from "../../mock/users.js";
import { torse, bras, jambes } from "../../mock/perf.js";
import { planning } from "../../mock/planning.js";
import { LoginProps, validationLoginForm } from "./variables";
import "react-toastify/dist/ReactToastify.css";

const Login: FunctionComponent<LoginProps> = ({ setCtx }) => {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const mockBdd = [...users, ...infoBody, training, torse, bras, jambes, planning];

  return (
    <form
      data-testid='loginpage'
      className='login-form'
      onSubmit={(e: FormEvent<HTMLFormElement>) => validationLoginForm(e, pseudo, password, setCtx, mockBdd, navigate)}
    >
      <h2 className='txt-center uppercase color-light'>Connexion</h2>
      <FormData
        label='pseudo'
        valueInput={pseudo}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => setPseudo(e.target.value)}
      />
      <FormData
        label='password'
        typeInput='password'
        valueInput={password}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />

      <input className='link-button uppercase' type='submit' value='Se connecter' />
    </form>
  );
};
export default Login;
