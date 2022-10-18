import Banner from "../../components/banner/Banner";
import Dataline from "../../components/dataline/Dataline";
import { infoBody } from "../../mock/users";
import bannerCardio from "../../assets/others/banner-cardio.png";

const Cardio = () => {
  const { weight } = infoBody[0];

  return (
    <section className='cardio-page' data-testid='cardio-page'>
      <Banner picture={bannerCardio} />
      <div className="container">
        <Dataline data={weight} label={"poids"} />
      </div>
    </section>
  );
};

export default Cardio;
