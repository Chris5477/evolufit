import athleteOne from "../../assets/athlete/athlete1.png";
import athleteTwo from "../../assets/athlete/athlete2.png";
import LoaderHome from "../loader-home/LoaderHome";
import { Link } from "react-router-dom";
import Context from "../../components/Context";
import { useContext } from "react";

const Homepage = () => {

  const loader = useContext(Context) == null ? <LoaderHome/> : ""


  return (
    <>
     {loader}
      <div data-testid='homepage' className='home-page container'>
        <section className='section-part color-white container'>
          <h2 className='txt-center uppercase color-light'>
            Suivez votre <span className='no-bg-letter'>evolution !</span>
          </h2>
          <p className="color-light">
            Créer votre compte gratuitement pour suivre votre évolution sportive. Suivez votre perte de masse grasse ou
            votre prise de masse musculaire. Evolu'fit vous permet de noter chaque séance pour avoir la possibilité de
            visualiser vos progrès rapidement. Le but de votre motivation est d'obtenir le corps que vous révez.
          </p>
          <div className='container-picture container'>
            <img src={athleteOne} alt='althelte' />
          </div>
          <Link className='link-button uppercase txt-center' to={"/evolufit/signin"}>
            S'inscrire
          </Link>
        </section>

        <article className='other-info'>
          <h2 className='txt-center uppercase'>Plus d'excuse!</h2>
          <aside className='white-bg uppercase'>
            <p className="txt-center">Motivation</p>
            <p className="txt-center"> + </p>
            <p className="txt-center">évolution</p>
            <p className="txt-center">=</p>
            <p className="txt-center">Satisfatcion</p>
          </aside>
          <img src={athleteTwo} alt='atlete' />
        </article>
      </div>
    </>
  );
};

export default Homepage;
