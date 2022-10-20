import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormData from "../../components/formData/FormData";
import { infoBody, training, users } from "../../mock/users.js";
import { torse, bras, jambes, mass } from "../../mock/perf.js";
import { planning } from "../../mock/planning.js";

const Login = ({ setCtx }) => {
  const initialMessage = {
    code: "",
    message: "",
  };

  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(initialMessage);
  const navigate = useNavigate();

  const mockBdd = [...users, ...infoBody, training, torse, bras, jambes, mass, planning];

  const userData = {
    pseudo,
    password,
  };
  const createMessage = (code, message) => {
    const newMessage = { code, message };
    setMessage(newMessage);
  };

  const login = (e) => {
    const { pseudo, password } = userData;
    e.preventDefault();
    if (pseudo === "admin" && password === "12345") {
      createMessage("success", "Connexion en cours...");
      setCtx(mockBdd);
      localStorage.setItem("token", JSON.stringify("test"));
      setTimeout(() => navigate("/profil"), 1500);
    } else if (pseudo && password && (pseudo !== "admin" || password !== "12345")) {
      createMessage("error", "Identifiants incorrects");
    } else {
      createMessage("error", "Veuillez remplir tous les champs");
    }
  };

  return (
    <form data-testid='loginpage' className='login-form' onSubmit={(e) => login(e)}>
      <h2 className='txt-center uppercase color-light'>Connexion</h2>
      <FormData
        label='pseudo'
        valueInput={pseudo}
        handleChange={(e) => setPseudo(e.target.value)}
        message={message.code === "error" && message.message}
      />
      <FormData
        label='password'
        typeInput='password'
        valueInput={password}
        handleChange={(e) => setPassword(e.target.value)}
        message={message.code === "error" && message.message}
      />

      {message.code === "success" ? (
        <p className='feedback-form validation success'>{message.message}</p>
      ) : (
        <p className='feedback-form validation error'>{message.message}</p>
      )}
      <input className='link-button uppercase' type='submit' value='Se connecter' />
    </form>
  );
};
export default Login;
