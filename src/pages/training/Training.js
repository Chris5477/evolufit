import bannierMuscu from "../../assets/others/bannier-muscu.png";
import SpiderChart from "../../components/radarchart/Radarchart";
import Piechart from "../../components/pie/PieGraph";
import React, { useContext } from "react";
import Context from "../../components/Context";
import Spinner from "../../components/spinner/Spinner";
import NoData from "../../components/nodata/NoData";
const Banner = React.lazy(() => import("../../components/banner/Banner"));

const Training = () => {
  const user = useContext(Context);
  const [torso, arms, legs] = user.filter((_, index) => index >= 3 && index <= 5);

  const addInfo = `La masse musculaire joue un rôle non négligeable sur la dépense énergétique quotidienne et engendre un coût
  métabolique plus important que la masse grasse. Pour simplifier, cela signifie que vos muscles demandent et
  dépensent plus d'énergie que votre graisse.`;

  return (
    <div className='training-page container flex-center' data-testid='training-page'>
      <React.Suspense fallback={<Spinner />}>
        <Banner picture={bannierMuscu} />
      </React.Suspense>
      <Piechart title={"Information sur vos masses"} info={addInfo} />
      <h2 className='container txt-center'>Vos performanes</h2>
      {torso.length > 0 ? <SpiderChart title="Muscle du torse" data={torso} /> : <NoData title="Muscle du torse" />}
      {arms.length > 0 ? <SpiderChart title="Muscle des bras" data={arms} /> : <NoData title="Muscle des bras"/>}
      {legs.length > 0 ? <SpiderChart title="Muscle des jambes" data={legs} /> : <NoData title="Muscle des jambes" />}
    </div>
  );
};

export default Training;
