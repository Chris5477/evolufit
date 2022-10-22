import Dataline from "../../components/dataline/Dataline";
import bannerCardio from "../../assets/others/banner-cardio.png";
import Exocardio from "../../components/exocardio/Exocardio";
import Warning from "../../components/warning/Warning";
import React, { useContext } from "react";
import Context from "../../components/Context";
import Spinner from "../../components/spinner/Spinner";
const Banner = React.lazy(() => import("../../components/banner/Banner"));

const Cardio = () => {
  const user = useContext(Context);
  const { weight } = user[1];

  return (
    <section className='cardio-page container' data-testid='cardio-page'>
      <React.Suspense fallback={<Spinner />}>
        <Banner picture={bannerCardio} />
      </React.Suspense>
      <section className='container'>
        <h2 className='uppercase txt-center'>Progression corporelle</h2>
        <Dataline label={"poids"} data={weight} />
      </section>
      <Exocardio />
      <Warning />
    </section>
  );
};

export default Cardio;
