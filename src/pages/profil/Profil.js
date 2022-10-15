import { users, infoBody, training } from "../../mock/users.js";
import { actualities } from "../../news/actualities.js";
import athlete3 from "../../assets/athlete/athlete3.png";
import Article from "../../components/article/Article.js";
import { useEffect, useRef, useState } from "react";
import Progress from "../../components/progres/Progress.js";
import calendar from "../../assets/icons/calendar.svg";

const Profil = () => {
  const [translate, setTranslate] = useState(330);
  const slideRef = useRef();

  const translateItem = () => {
    const divElement = slideRef.current;
    translate < 660 ? setTranslate(translate + 330) : setTranslate(translate - 660);
    divElement.style.transform = "translateX(" + -translate + "px)";
    divElement.style.transition = "2s";
  };

  useEffect(() => {
    setInterval(translateItem, 4000);
  }, [translate]);

  const { firstName, signinDate } = users[0];
  const { weight, initialWeight } = infoBody[0];
  const { week } = training[0];

  return (
    <div data-testid='profil-page' className='profil container flex-center'>
      <div className='banner-profil container flex-center'>
        <img src={athlete3} alt={"athletes"} width={400} />
      </div>
      <section className='info-user container'>
        <h2 className='greet-user uppercase '>
          Bonjour <span>{firstName}</span>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae delectus labore itaque eius ipsa obcaecati
          nemo.
        </p>
      </section>
      <section className='slider'>
        <h2 className='uppercase subtitle'>Actualités</h2>
        <div ref={slideRef} className='items uppercase'>
          {actualities.map(({ id, title, article, urlImg }) => (
            <Article key={id} title={title} article={article} urlImg={urlImg} />
          ))}
        </div>
      </section>
      <section className='container user-progres'>
        <h2 className='uppercase'>Progrès</h2>
        <div className='divider'>
          <h2 className='uppercase'>7 derniers jours</h2>
          <div className='banner-progres'>
            <div className='calendar-logo flex-center'>
              <img src={calendar} alt='calendar' />
            </div>
            <p>Inscrit depuis {signinDate}</p>
          </div>
        </div>
        <Progress label='poids' unity='kg' data={weight} initialWeight={initialWeight} />
        <Progress label='distance' unity='km' data={week} />
        <Progress label='calories' unity='Kcal' data={week} />
      </section>
    </div>
  );
};
export default Profil;
