import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormData from "../../components/formData/FormData";

const Signin = () => {
  const navigate = useNavigate();

  const initalMessage = {
    code: "",
    message: "",
  };

  const initialState = {
    firstName: "",
    lastName: "",
    yearsOld: "",
    email: "",
    size: "",
    weight: "",
    gender: "homme",
    pseudo: "",
    password: "",
  };

  const [data, setData] = useState(initialState);
  const [feedBack, setFeedBack] = useState(initalMessage);
  const { firstName, lastName, yearsOld, email, size, weight, gender, pseudo, password } = data;

  const changeValue = (e) => {
    const { value, name, id } = e.target;
    if (name === "gender") {
      setData({ ...data, [name]: id });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const customMessage = (code, message) => {
    const tempState = { code, message };
    setFeedBack(tempState);
  };

  const signup = (e) => {
    e.preventDefault();
    const isValid = Object.values(data).every((value) => value);
    if (!isValid) {
      customMessage("error", "Veuillez remplir ce champs!");
    } else {
      customMessage("success", `Inscription réussie! Redirection en cours...`);
      localStorage.setItem("token", "test");
      setTimeout(() => navigate("/profil"), 1500);
    }
  };

  return (
    <form data-testid='signin' className='newAccount container' onSubmit={(e) => signup(e)}>
      <h2 className='uppercase'>
        Créer mon compte <br /> <span className='primary'>Évolu'Fit</span>
      </h2>

      <div className='radio-input uppercase'>
        <label htmlFor='homme'>Homme </label>
        <input
          className='uppercase'
          name='gender'
          id='homme'
          checked
          type='radio'
          value={gender}
          onChange={changeValue}
        />
        <label htmlFor='femme'>Femme</label>
        <input className='uppercase' name='gender' id='femme' type='radio' value={gender} onChange={changeValue} />
      </div>
      <FormData
        handleChange={changeValue}
        label='prenom'
        name='firstName'
        message={feedBack.code === "error" && feedBack.message}
        valueInput={firstName}
      />
      <FormData
        handleChange={changeValue}
        label='nom'
        name='lastName'
        message={feedBack.code === "error" && feedBack.message}
        valueInput={lastName}
      />
      <FormData
        handleChange={changeValue}
        label='age'
        name='yearsOld'
        message={feedBack.code === "error" && feedBack.message}
        valueInput={yearsOld}
      />
      <FormData
        handleChange={changeValue}
        label='email'
        name='email'
        message={feedBack.code === "error" && feedBack.message}
        valueInput={email}
        typeInput='email'
      />
      <FormData
        handleChange={changeValue}
        label='taille (en cm)'
        name='size'
        message={feedBack.code === "error" && feedBack.message}
        valueInput={size}
      />
      <FormData
        handleChange={changeValue}
        label='poids (en kg)'
        name='weight'
        message={feedBack.code === "error" && feedBack.message}
        valueInput={weight}
      />
      <FormData
        handleChange={changeValue}
        label='pseudo'
        name='pseudo'
        message={feedBack.code === "error" && feedBack.message}
        valueInput={pseudo}
      />
      <FormData
        handleChange={changeValue}
        label='password'
        name='password'
        typeInput='password'
        valueInput={password}
        message={feedBack.code === "error" && feedBack.message}
      />
      <input className='link-button uppercase' type='submit' value='Envoyer' />
      {feedBack.code === "success" && <p className='valdiation success'>{feedBack.message}</p>}
    </form>
  );
};
export default Signin;
