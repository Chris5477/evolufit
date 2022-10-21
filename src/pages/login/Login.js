import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormData from "../../components/formData/FormData";
import { infoBody, training, users } from "../../mock/users.js";
import { torse, bras, jambes, mass } from "../../mock/perf.js";
import { planning } from "../../mock/planning.js";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = ({ setCtx }) => {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const mockBdd = [...users, ...infoBody, training, torse, bras, jambes, planning];
  const userData = {
    pseudo,
    password,
  };

  const notify = (type, text, duration) => type(text, { autoClose: duration, theme: "colored" });

  const login = (e) => {
    const { pseudo, password } = userData;
    e.preventDefault();
    if (pseudo === "admin" && password === "12345") {
      setCtx(mockBdd);
      localStorage.setItem("token", JSON.stringify("test"));
      notify(toast.success, "Connexion en cours...", 2500);
      setTimeout(() => navigate("/profil"), 2500);
    } else if (pseudo && password && (pseudo !== "admin" || password !== "12345")) {
      notify(toast.error, "Identifiants incorrects", 2500);
    } else {
      notify(toast.error, "Veuillez remplir tous les champs !", 2500);
    }
  };

  return (
    <form data-testid='loginpage' className='login-form' onSubmit={(e) => login(e)}>
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
