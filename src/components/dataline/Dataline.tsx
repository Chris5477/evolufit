import { FunctionComponent } from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { DatalineProps } from "./variables";

const Dataline: FunctionComponent<DatalineProps> = ({ label, data, isCardio }) => {
  let dataKey = label === "poids" ? "weight" : label;
  const width = window.innerWidth - 40;

  return (
    <div data-testid='dataline' className='dataline'>
      <LineChart width={width} height={width} data={data} margin={{ right: 30 }}>
        <CartesianGrid stroke='grey' strokeDasharray='3 3' />
        <XAxis stroke='black' strokeWidth={2} />
        <YAxis stroke='black' strokeWidth={2} />
        <Tooltip />
        <Legend />
        {!isCardio ? (
          <Line type='monotone' dataKey={dataKey} stroke='#ff7700' strokeWidth={3} />
        ) : (
          <>
            <Line type='monotone' dataKey={"calories"} stroke='rgb(119, 203, 113)' strokeWidth={3} />
            <Line type='monotone' dataKey={"distance"} stroke='rgb(134, 146, 217)' strokeWidth={3} />
          </>
        )}
      </LineChart>
    </div>
  );
};

export default Dataline;
