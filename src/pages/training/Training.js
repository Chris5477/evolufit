import bannierMuscu from "../../assets/others/bannier-muscu.png";
import SpiderChart from "../../components/radarchart/Radarchart";
import { torse, bras, jambes } from "../../mock/perf";
import Piechart from "../../components/pie/PieGraph";
import Banner from "../../components/banner/Banner";

const Training = () => {
  const addInfo = `La masse musculaire joue un rôle non négligeable sur la dépense énergétique quotidienne et engendre un coût
  métabolique plus important que la masse grasse. Pour simplifier, cela signifie que vos muscles demandent et
  dépensent plus d'énergie que votre graisse.`;

  return (
    <div className='training-page container flex-center' data-testid='training-page'>
      <Banner picture={bannierMuscu} />
      <Piechart title={"Information sur vos masses"} info={addInfo} />

      <h2 className='container txt-center'>Vos performanes</h2>
      <SpiderChart title={"Muscle du torse"} data={torse} />
      <SpiderChart title={"Muscle des bras"} data={bras} />
      <SpiderChart title={"Muscle des jambes"} data={jambes} />
    </div>
  );
};

export default Training;
