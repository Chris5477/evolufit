import { PieChart, Pie, Cell, Legend } from "recharts";
import { mass } from "../../mock/perf";

const Piechart = () => {

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
    <div className='pie' data-testid='pie'>
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
    </div>
  );
};

export default Piechart;
