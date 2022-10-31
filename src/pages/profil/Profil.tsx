import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { actualities } from "../../news/actualities.js";
import athlete3 from "../../assets/athlete/athlete3.png";
import Article from "../../components/article/Article";
import Progress from "../../components/progres-banner/ProgressBanner";
import IMC from "../../components/imc/IMC";
import UserProgress from "../../components/userProgress/UserProgress";
import Context from "../../components/Context.js";
import { FlatMapTypes, translateItem } from "./variables";
import NoData from "../../components/nodata/NoData";
import { training } from "../../mock/users.js";

const Profil = () => {
  const [translate, setTranslate] = useState(330);
  const navigate = useNavigate();
  const slideRef = useRef(null);

  const userData = useContext(Context);
  const firstName = userData?.user.firstName;
  const weight = userData?.body.weight;
  const initialWeight = userData?.body.initialWeight;
  const cardio = training.flatMap(({ week }): any => week);

  useEffect(() => {
    const id = setInterval(() => translateItem(slideRef, translate, setTranslate), 4000);
    return () => clearInterval(id);
  }, [translate]);

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
      <UserProgress title={"Progrès"} />
      <section className='container'>
        {weight.length > 0 ? (
          <Progress label='poids' unity='kg' data={weight} initialWeight={initialWeight} />
        ) : (
          <NoData title='Suivi poids' />
        )}
        {cardio.length > 0 ? <Progress label='distance' unity='km' data={cardio} /> : <NoData title='Suivi calories' />}
        {cardio.length > 0 ? (
          <Progress label='calories' unity='Kcal' data={cardio} />
        ) : (
          <NoData title='Suivi distance' />
        )}
      </section>
      {weight && <IMC />}
    </div>
  );
};
export default Profil;
