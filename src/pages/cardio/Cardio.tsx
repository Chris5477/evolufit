import BigLineChart from "../../components/biglinechart/BigLineChart";
import bannerCardio from "../../assets/others/banner-cardio.png";
import Exocardio from "../../components/exocardio/Exocardio";
import Warning from "../../components/warning/Warning";
import React, { useContext } from "react";
import Context from "../../components/Context";
import Spinner from "../../components/spinner/Spinner";
import NoData from "../../components/nodata/NoData";
const Banner = React.lazy(() => import("../../components/banner/Banner"));

const Cardio = () => {
  const {weight} = useContext(Context).body;
  
  return (
    <section className='cardio-page container' data-testid='cardio-page'>
      <React.Suspense fallback={<Spinner />}>
        <Banner picture={bannerCardio} />
      </React.Suspense>
      <section className='container'>
        <h2 className='uppercase txt-center'>Progression corporelle</h2>
        {weight.length > 0 ? <BigLineChart label={"poids"} data={weight} /> : <NoData />}
      </section>
      <Exocardio />
      <Warning />
    </section>
  );
};

export default Cardio;
