import { useContext } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import Context from "../Context";

const Piechart = ({ title, info }) => {
  const user = useContext(Context);
  const mass = user[1].massRate;

  const COLORS = ["#ff7700", "rgb(119, 203, 113)", "rgb(134, 146, 217)"];
  const RADIAN = Math.PI / 180;

  return (
    <section className='pie container flex-center' data-testid='pie'>
      <h2 className='container txt-center color-light'>{title}</h2>
      <PieChart width={280} height={280}>
        <Pie
          data={mass}
          fontSize={30}
          fontWeight={800}
          cx='50%'
          cy='50%'
          label={"name"}
          outerRadius={90}
          innerRadius={40}
          dataKey='value'
        >
          {mass.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend formatter={(value, index) => value}></Legend>
      </PieChart>
      <p>{info}</p>
    </section>
  );
};

export default Piechart;
