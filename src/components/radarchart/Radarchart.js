import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, Radar } from "recharts"
import Button from "../button/Button"

const SpiderChart = ({title, data}) => {
    return (
        <section className="radar" data-testid="radarchart">
        <h3>{title}</h3>
        <RadarChart outerRadius={90} width={280} height={280} data={data}>
          <PolarGrid stroke='black' />
          <PolarAngleAxis dataKey='subject' />
          <PolarRadiusAxis stroke='black' angle={140} domain={[0, 70]} />
          <Radar name='performance' dataKey='performance' stroke='#ff7700' fill='#ff7700' fillOpacity={0.8} />
          <Legend />
        </RadarChart>
      </section>
    )
}

export default SpiderChart