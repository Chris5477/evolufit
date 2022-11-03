import { FunctionComponent, useContext } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import Context from "../Context";
import { PieChartProps } from "./variable";

const Piechart: FunctionComponent<PieChartProps> = ({ title, info }) => {
  const { body } = useContext(Context);
  const mass = body?.massRate;

  const COLORS: [string, string, string] = ["#ff7700", "rgb(119, 203, 113)", "rgb(134, 146, 217)"];

  return (
    <section className='pie container flex-center' data-testid='pie'>
      <h2 className='container bg-primary txt-center color-light'>{title}</h2>
      <PieChart width={280} height={280}>
        <Pie
          data={mass}
          fontSize={22}
          fontWeight={800}
          cx='50%'
          cy='50%'
          label={true}
          outerRadius={70}
          innerRadius={40}
          dataKey='value'
        >
          {mass.map((_: never, index: number) => (
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
