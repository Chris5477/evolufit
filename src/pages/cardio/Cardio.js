import Banner from "../../components/banner/Banner";
import Dataline from "../../components/dataline/Dataline";
import bannerCardio from "../../assets/others/banner-cardio.png";
import Exocardio from "../../components/exocardio/Exocardio";
import Warning from "../../components/warning/Warning";

const Cardio = () => {

  return (
    <section className='cardio-page container' data-testid='cardio-page'>
      <Banner picture={bannerCardio} />
      <section className='container'>
        <h2 className="uppercase txt-center">Progression corporelle</h2>
        <Dataline label={"poids"} />
      </section>
      <Exocardio/>
      <Warning />
    </section>
  );
};

export default Cardio;
