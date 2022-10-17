import bannierMuscu from "../../assets/others/bannier-muscu.png";
import { PieChart, Pie, Cell, Legend } from "recharts";
import SpiderChart from "../../components/radarchart/Radarchart";
import { torse, bras, jambes, mass } from "../../mock/perf";
import Button from "../../components/button/Button";

const Training = () => {
  const COLORS = ["#ff7700", "rgb(119, 203, 113)", "rgb(134, 146, 217)"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill='white' textAnchor={x > cx ? "start" : "end"} dominantBaseline='central'>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className='training-page' data-testid='training-page'>
      <div className='bannier'>
        <img src={bannierMuscu} alt='musculation' width='100%' height={200} />
      </div>
      <section>
        <h2>Vos masses</h2>

        <PieChart width={300} height={300}>
          <Pie
            data={mass}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill='#8884d8'
            dataKey='value'
          >
            {mass.map((entry, index) => (
              <Cell key={`cell-${index}`} c fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend formatter={(value, index) => value}></Legend>
        </PieChart>

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
