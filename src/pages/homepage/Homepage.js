import athleteOne from "../../assets/athlete/athlete1.png";
import athleteTwo from "../../assets/athlete/athlete2.png";
import LoaderHome from "../loader-home/LoaderHome";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <LoaderHome />
      <div data-testid='homepage' className='home-page container'>
        <section className='section-part color-white container'>
          <h2 className='uppercase'>
            Suivez votre <span className='no-bg-letter'>evolution !</span>
          </h2>
          <p>
            Créer votre compte gratuitement pour suivre votre évolution sportive. Suivez votre perte de masse grasse ou
            votre prise de masse musculaire. Evolu'fit vous permet de noter chaque séance pour avoir la possibilité de
            visualiser vos progrès rapidement. Le but de votre motivation est d'obtenir le corps que vous révez.
          </p>
          <div className='container-picture container'>
            <img src={athleteOne} alt='althelte' />
          </div>
          <Link className='link-button uppercase' to={"/new-account"}>
            S'inscrire
          </Link>
        </section>

        <article className='other-info'>
          <h2 className='uppercase'>Plus d'excuse!</h2>
          <aside className='white-bg uppercase'>
            <p>Motivation</p>
            <p> + </p>
            <p>évolution</p>
            <p>=</p>
            <p>Satisfatcion</p>
          </aside>
          <img src={athleteTwo} alt='atlete' />
        </article>
        {/* {localStorage.getItem("token") !== null && <Tabs />} */}
      </div>
    </>
  );
};

export default Homepage;
