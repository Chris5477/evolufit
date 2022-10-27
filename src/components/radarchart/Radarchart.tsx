import { FunctionComponent } from "react";
import { toast } from "react-toastify";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, Radar } from "recharts";
import Button from "../button/Button";
import { SpiderChartProps } from "./variable";

const SpiderChart: FunctionComponent<SpiderChartProps> = ({ title, data }) => {
  return (
    <section className='radar container flex-center' data-testid='radarchart'>
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
