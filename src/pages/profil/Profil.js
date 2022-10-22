import { actualities } from "../../news/actualities.js";
import athlete3 from "../../assets/athlete/athlete3.png";
import Article from "../../components/article/Article.js";
import { useContext, useEffect, useRef, useState } from "react";
import Progress from "../../components/progres/Progress.js";
import { useNavigate } from "react-router-dom";
import IMC from "../../components/imc/IMC.js";
import UserProgress from "../../components/userProgress/UserProgress.js";
import Context from "../../components/Context.js";

const Profil = () => {
  const [translate, setTranslate] = useState(330);
  const navigate = useNavigate();
  const slideRef = useRef();

  const translateItem = () => {
    const divElement = slideRef.current;
    translate < 660 ? setTranslate(translate + 330) : setTranslate(translate - 660);
    divElement.style.transform = "translateX(" + -translate + "px)";
    divElement.style.transition = "2s";
  };

  useEffect(() => {
    const id = setInterval(translateItem, 4000);
    return () => clearInterval(id);
  }, [translate]);

  const user = useContext(Context);
  const { firstName, signinDate } = user[0];
  const { weight, initialWeight } = user[1];
  const week = user[2].flatMap((data) => data.week);

  useEffect(() => {
    localStorage.getItem("data") == null && navigate("/");
  }, []);

  return (
    <div data-testid='profil-page' className='profil container flex-center'>
      <div className='banner-profil container flex-center'>
        <img src={athlete3} alt={"athletes"} width='100%' />
      </div>
      <section className='info-user container'>
        <h2 className='greet-user uppercase '>
          Bonjour <span>{firstName}</span>
        </h2>
      </section>
      <q>Marcher sur la lune est compliqué, mais pas marcher jusqu'à la salle !</q>
      <section className='slider container'>
        <h2 className='uppercase subtitle'>Actualités</h2>
        <div ref={slideRef} className='items container uppercase'>
          {actualities.map(({ id, title, article, urlImg }) => (
            <Article key={id} title={title} article={article} urlImg={urlImg} />
          ))}
        </div>
      </section>
      <UserProgress title={"Progrès"} date={signinDate} />
      <section className='container'>
        <Progress label='poids' unity='kg' data={weight} initialWeight={initialWeight} />
        <Progress label='distance' unity='km' data={week} />
        <Progress label='calories' unity='Kcal' data={week} />
      </section>
      <IMC />
    </div>
  );
};
export default Profil;
