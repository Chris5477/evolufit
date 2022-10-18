import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Dataline = ({ data, label }) => {
  const dataKey = label === "poids" ? "weight" : label;
  
 
  return (
    <div data-testid='dataline' className='dataline'>
      <LineChart width={400} height={350} data={data} margin={{ right: 50 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey={label} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey={dataKey} stroke='#ff7700' strokeWidth={3} />
      </LineChart>
    </div>
  );
};

export default Dataline;
