import Banner from "../../components/banner/Banner";
import Dataline from "../../components/dataline/Dataline";
import { infoBody } from "../../mock/users";
import bannerCardio from "../../assets/others/banner-cardio.png";
import Exocardio from "../../components/exocardio/Exocardio";

const Cardio = () => {
  const { weight } = infoBody[0];

  return (
    <section className='cardio-page container' data-testid='cardio-page'>
      <Banner picture={bannerCardio} />
      <section className='container'>
        <h2>Progression corporelle</h2>
        <Dataline data={weight} label={"poids"} />
      </section>
      <Exocardio/>
    </section>
  );
};

export default Cardio;
