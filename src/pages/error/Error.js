import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import embarrassed from "../../assets/icons/embarrassed.svg";

const Error = () => {
  const [isMessage, setIsMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsMessage(true), 2500);
  }, []);

    useEffect(() => {
      setTimeout(() => navigate("/"), 4000);
    }, []);

  return (
    <section className='error-page container flex-center' data-testid='error-page'>
      <h2>Oups...</h2>
      <p>Le serveur est en récupération musculaire...</p>
      <p>Il va s'excuser et vous rediriger vers votre page profil.</p>
      {isMessage && (
        <>
          <img src={embarrassed} alt='emoji' />
          <p className='message-serveur'>Désolé. Suivez moi! </p>
        </>
      )}

      <NavLink to='/'>(Cliquez ici pour aller sur votre page profil )</NavLink>
      <p className='error-type'>(Ceci est une erreur 404, car la page n'a pas été trouvé !)</p>
    </section>
  );
};

export default Error;
