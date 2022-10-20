import { toast, ToastContainer } from "react-toastify";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, Radar } from "recharts";
import Button from "../button/Button";

const SpiderChart = ({ title, data }) => {
  return (
    <section className='radar container flex-center' data-testid='radarchart'>
      <ToastContainer />
      <h3 className='container txt-center color-light'>{title}</h3>
      <RadarChart outerRadius={90} width={300} height={300} data={data}>
        <PolarGrid stroke='black' />
        <PolarAngleAxis dataKey='subject' />
        <PolarRadiusAxis stroke='black' angle={140} domain={[0, 70]} />
        <Radar name='performance' dataKey='performance' stroke='#ff7700' fill='#ff7700' fillOpacity={0.8} />
        <Legend />
      </RadarChart>
      <Button
        onClick={() => toast.warn("Fonctionnalité bientôt disponible", { autoClose: 2000, theme: "colored" })}
        content='Visualiser'
      />
    </section>
  );
};

export default SpiderChart;
