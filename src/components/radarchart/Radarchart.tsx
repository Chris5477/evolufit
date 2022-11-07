import { FunctionComponent, useState } from "react";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, Radar } from "recharts";
import Button from "../button/Button";
import ExosMuscu from "../form-muscu/FormMuscu";
import { SpiderChartProps } from "./variable";

const SpiderChart: FunctionComponent<SpiderChartProps> = ({ title, data }) => {
  const [modal, setModal] = useState(false)
  return (
    <section className='radar container flex-center' data-testid='radarchart'>
      <h3 className='container bg-primary txt-center color-light'>Muscles {title}</h3>
      <RadarChart outerRadius={90} width={300} height={300} data={data}>
        <PolarGrid stroke='black' />
        <PolarAngleAxis dataKey='subject' />
        <PolarRadiusAxis stroke='black' angle={140} domain={[0, 70]} />
        <Radar name='performance' dataKey='performance' stroke='#ff7700' fill='#ff7700' fillOpacity={0.8} />
        <Legend />
      </RadarChart>
      <Button onClick={() => setModal(true)} content='Ajouter une donnée' />
      {modal && <ExosMuscu groupMuscular={title} setModal={setModal} />}
    </section>
  );
};

export default SpiderChart;
