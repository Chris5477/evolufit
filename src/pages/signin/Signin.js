import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import FormData from "../../components/formData/FormData";

const Signin = () => {
  const navigate = useNavigate();

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
  const { firstName, lastName, yearsOld, email, size, weight, gender, pseudo, password } = data;

  const changeValue = (e) => {
    const { value, name, id } = e.target;
    if (name === "gender") {
      setData({ ...data, [name]: id });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const signup = (e) => {
    e.preventDefault();
    const isValid = Object.values(data).every((value) => value);
    if (!isValid) {
      toast.error("Veuillez remplir tous les champs!", { autoClose: 2000, theme: "colored" });
    } else {
      toast.success("Compte crée avec succès !", { autoClose: 1400, theme: "colored" });
      localStorage.setItem("token", "test");
      setTimeout(() => navigate("/profil"), 1500);
    }
  };

  return (
    <form data-testid='signin' className='newAccount container' onSubmit={(e) => signup(e)}>
      <ToastContainer />
      <h2 className='uppercase txt-center color-light'>
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
      <FormData handleChange={changeValue} label='prenom' name='firstName' valueInput={firstName} />
      <FormData handleChange={changeValue} label='nom' name='lastName' valueInput={lastName} />
      <FormData handleChange={changeValue} label='age' name='yearsOld' valueInput={yearsOld} />
      <FormData handleChange={changeValue} label='email' name='email' valueInput={email} typeInput='email' />
      <FormData handleChange={changeValue} label='taille (en cm)' name='size' valueInput={size} />
      <FormData handleChange={changeValue} label='poids (en kg)' name='weight' valueInput={weight} />
      <FormData handleChange={changeValue} label='pseudo' name='pseudo' valueInput={pseudo} />
      <FormData
        handleChange={changeValue}
        label='password'
        name='password'
        typeInput='password'
        valueInput={password}
      />
      <input className='link-button uppercase' type='submit' value='Envoyer' />
    </form>
  );
};
export default Signin;
