import bannierMuscu from "../../assets/others/bannier-muscu.png";
import SpiderChart from "../../components/radarchart/Radarchart";
import { torse, bras, jambes } from "../../mock/perf";
import Button from "../../components/button/Button";
import Piechart from "../../components/pie/PieGraph";

const Training = () => {
  return (
    <div className='training-page' data-testid='training-page'>
      <div className='bannier'>
        <img src={bannierMuscu} alt='musculation' width='100%' height={200} />
      </div>
      <section>
        <h2>Vos masses</h2>
        <Piechart />

        <p>
          La masse musculaire joue un rôle non négligeable sur la dépense énergétique quotidienne et engendre un coût
          métabolique plus important que la masse grasse. Pour simplifier, cela signifie que vos muscles demandent et
          dépensent plus d'énergie que votre graisse.
        </p>
      </section>
      <div>
        <h2>Vos performanes</h2>
        <SpiderChart title={"Muscle du torse"} data={torse} />
        <Button onClick={() => null} content='Consulter' />

        <SpiderChart title={"Muscle des bras"} data={bras} />
        <Button onClick={() => null} content='Consulter' />

        <SpiderChart title={"Muscle des jambes"} data={jambes} />
        <Button onClick={() => null} content='Consulter' />
      </div>
    </div>
  );
};

export default Training;
