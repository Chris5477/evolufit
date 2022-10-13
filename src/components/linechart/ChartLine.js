import { LineChart, Line } from "recharts";

const ChartLine = ({ label, data }) => {
  let userData = [];
  if (label === "poids") {
    label = "weight";
    userData = data.map((el) => {
      return { weight: el };
    });
  } else {
    userData = data;
  }


  return (
    <div data-testid='linechart'>
      <LineChart width={80} height={200} data={userData} margin={{ bottom: 70 }}>
        <Line dot={false} type="linear" dataKey={label} stroke='#ff7700' strokeWidth={3} />
      </LineChart>
    </div>
  );
};

export default ChartLine;
