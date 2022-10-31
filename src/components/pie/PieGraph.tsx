import { FunctionComponent, useContext } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import Context from "../Context";
import NoData from "../nodata/NoData";
import { PieChartProps } from "./variable";

const Piechart: FunctionComponent<PieChartProps> = ({ title, info }) => {
  const {body} = useContext(Context);
  const mass = body.massRate;

  const COLORS: [string, string, string] = ["#ff7700", "rgb(119, 203, 113)", "rgb(134, 146, 217)"];

  if (mass.length > 0) {
    return (
      <section className='pie container flex-center' data-testid='pie'>
        <h2 className='container txt-center color-light'>{title}</h2>
        <PieChart width={280} height={280}>
          <Pie
            data={mass}
            fontSize={22}
            fontWeight={800}
            cx='50%'
            cy='50%'
            label={undefined}
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
  } else {
    return <NoData title='Suivi des masses' />;
  }
};

export default Piechart;
