import { PieChart, Pie, Cell, Legend } from "recharts";
import { mass } from "../../mock/perf";

const Piechart = ({ title, info }) => {
  const COLORS = ["#ff7700", "rgb(119, 203, 113)", "rgb(134, 146, 217)"];
  const RADIAN = Math.PI / 180;
  /* istanbul ignore next */
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill='white' fontSize={20} fontWeight="bold" textAnchor={x > cx ? "start" : "end"} dominantBaseline='central'>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <section className='pie container flex-center' data-testid='pie'>
      <h2 className="container txt-center">{title}</h2>
      <PieChart width={280} height={280}>
        <Pie
          data={mass}
          cx='50%'
          cy='50%'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          dataKey='value'
        >
          {mass.map((entry, index) => (
            <Cell key={`cell-${index}`} c fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend formatter={(value, index) => value}></Legend>
      </PieChart>
      <p>{info}</p>
    </section>
  );
};

export default Piechart;
