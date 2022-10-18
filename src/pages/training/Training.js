import bannierMuscu from "../../assets/others/bannier-muscu.png";
import SpiderChart from "../../components/radarchart/Radarchart";
import { torse, bras, jambes } from "../../mock/perf";
import Button from "../../components/button/Button";
import Piechart from "../../components/pie/PieGraph";

const Training = () => {
  const addInfo = `La masse musculaire joue un rôle non négligeable sur la dépense énergétique quotidienne et engendre un coût
  métabolique plus important que la masse grasse. Pour simplifier, cela signifie que vos muscles demandent et
  dépensent plus d'énergie que votre graisse.`;

  return (
    <div className='training-page container flex-center' data-testid='training-page'>
      <div className='container bannier'>
        <img src={bannierMuscu} alt='musculation' width='100%' height={200} />
      </div>
      <Piechart title={"Information sur vos masses"} info={addInfo} />

      <h2 className="container" >Vos performanes</h2>
      <SpiderChart title={"Muscle du torse"} data={torse} />
      <Button onClick={() => null} content='Consulter' />

      <SpiderChart title={"Muscle des bras"} data={bras} />
      <Button onClick={() => null} content='Consulter' />

      <SpiderChart title={"Muscle des jambes"} data={jambes} />
      <Button onClick={() => null} content='Consulter' />
    </div>
  );
};

export default Training;
