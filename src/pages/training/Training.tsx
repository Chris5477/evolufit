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

  const addInfo = `La masse musculaire joue un rôle non négligeable sur la dépense énergétique quotidienne et engendre un coût
  métabolique plus important que la masse grasse. Pour simplifier, cela signifie que vos muscles demandent et
  dépensent plus d'énergie que votre graisse.`;

  return (
    <div className='training-page container flex-center' data-testid='training-page'>
      <React.Suspense fallback={<Spinner />}>
        <Banner picture={bannierMuscu} />
      </React.Suspense>
      {user?.body ? <Piechart title={"Information sur vos masses"} info={addInfo} /> : <NoData title='Vos masses' />}

      <h2 className='container txt-center'>Vos performanes</h2>
      {user?.torse.length > 0 ? <SpiderChart title='torse' data={user?.torse} /> : <NoData title='Muscle du torse' />}
      {user?.bras.length > 0 ? <SpiderChart title='bras' data={user?.bras} /> : <NoData title='Muscle des bras' />}
      {user?.jambes.length > 0 ? (
        <SpiderChart title='jambes' data={user?.jambes} />
      ) : (
        <NoData title='Muscle des jambes' />
      )}
    </div>
  );
};

export default Training;
