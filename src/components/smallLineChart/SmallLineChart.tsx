import { FunctionComponent } from "react";
import { LineChart, Line } from "recharts";
import { DatalineProps } from "../biglinechart/variables";



const ChartLine : FunctionComponent<DatalineProps> = ({ label, data }) => {
  const dataKey = label === "poids" ? "weight" : label;

  return (
    <div data-testid='linechart'>
      <LineChart width={80} height={80} data={data} >
        <Line dot={false} type='linear' dataKey={dataKey} stroke='#ff7700' strokeWidth={3} />
      </LineChart>
    </div>
  );
};

export default ChartLine;
