import BigLineChart from "../../components/biglinechart/BigLineChart";
import bannerCardio from "../../assets/others/banner-cardio.png";
import Exocardio from "../../components/exocardio/Exocardio";
import Warning from "../../components/warning/Warning";
import React, { useContext, useState } from "react";
import Context from "../../components/Context";
import Spinner from "../../components/spinner/Spinner";
import NoData from "../../components/nodata/NoData";
import Button from "../../components/button/Button";
import FormWeight from "../../components/form-weight/FormWeight";
const Banner = React.lazy(() => import("../../components/banner/Banner"));

const Cardio = () => {
  const { weight } = useContext(Context).body;
  const [modal, setModal] = useState(false);

  return (
    <section className='cardio-page container' data-testid='cardio-page'>
      <React.Suspense fallback={<Spinner />}>
        <Banner picture={bannerCardio} />
      </React.Suspense>
      <section className='container'>
        <h2 className='uppercase txt-center'>Progression corporelle</h2>
        {weight.length > 0 ? <BigLineChart label={"poids"} data={weight} /> : <NoData />}
        <Button onClick={() => setModal(true)} content='Ajouter une donnée' />
        {modal && <FormWeight setModal={setModal}  />}
      </section>
      <Exocardio />
      <Warning />
    </section>
  );
};

export default Cardio;
