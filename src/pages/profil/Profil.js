import { users } from "../../mock/users.js";
import { actualities } from "../../news/actualities.js";
import { Link } from "react-router-dom";
import athlete3 from "../../assets/athlete/athlete3.png";
import Article from "../../components/article/Article.js";
import { useEffect, useRef, useState } from "react";

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
  },[translate]);

  const { firstName } = users[0];

  return (
    <div data-testid='profil-page' className='profil container flex-center'>
      <div className='banner-profil container flex-center'>
        <img src={athlete3} alt={"athletes"} />
      </div>
      <section className='info-user container'>
        <h2 className='greet-user'>
          Bonjour <span className='uppercase no-bg-letter'>{firstName}</span>
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
    </div>
  );
};
export default Profil;
