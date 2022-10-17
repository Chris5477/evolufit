import bannierMuscu from "../../assets/others/bannier-muscu.png";
import { PieChart, Pie, Cell, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import Button from "../../components/button/Button";

const Training = () => {
  const data = [
    { name: "Masse Osseuse", value: 20 },
    { name: "Masse Musculaire", value: 35 },
    { name: "Masse Grasse", value: 45 },
  ];
  const COLORS = ["#ff7700", "rgb(119, 203, 113)", "rgb(134, 146, 217)"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill='white' textAnchor={x > cx ? "start" : "end"} dominantBaseline='central'>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const torse = [
    {
      subject: "Développé couché",
      performance: 65,
      fullMark: 120,
    },
    {
      subject: "Butterfly",
      performance: 100,
      fullMark: 120,
    },
    {
      subject: "Dos",
      performance: 59,
      fullMark: 120,
    },
    {
      subject: "Trapèze",
      performance: 45,
      fullMark: 120,
    },
  ];
  const bras = [
    {
      subject: "Biceps",
      performance: 32,
      fullMark: 80,
    },
    {
      subject: "Triceps",
      performance: 59,
      fullMark: 80,
    },
    {
      subject: "Deltoide moyen",
      performance: 7,
      fullMark: 70,
    },
    {
      subject: "Deltoide antérieur",
      performance: 16,
      fullMark: 70,
    },
    {
      subject: "Deltoide postérieur",
      performance: 9,
      fullMark: 70,
    },
  ];
  const jambes = [
    {
      subject: "Quadriceps",
      performance: 140,
      fullMark: 180,
    },
    {
      subject: "Ischio-jambier",
      performance: 50,
      fullMark: 180,
    },
    {
      subject: "Mollet",
      performance: 66,
      fullMark: 180,
    },
    {
      subject: "Adducteur",
      performance: 59,
      fullMark: 180,
    },
    {
      subject: "Abducteur",
      performance: 52,
      fullMark: 180,
    },
  ];

  return (
    <div className='training-page' data-testid='training-page'>
      <div className='bannier'>
        <img src={bannierMuscu} alt='musculation' width='100%' height={200} />
      </div>
      <section>
        <h2>Vos masses</h2>

        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} c fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend formatter={(value, index) => value}></Legend>
        </PieChart>

        <p>
          La masse musculaire joue un rôle non négligeable sur la dépense énergétique quotidienne et engendre un coût
          métabolique plus important que la masse grasse. Pour simplifier, cela signifie que vos muscles demandent et
          dépensent plus d'énergie que votre graisse.
        </p>
      </section>
      <div>
        <h2>Vos performanes</h2>
        <section>
          <h3>Muscle du torse</h3>
          <RadarChart outerRadius={90} width={280} height={280} data={torse}>
            <PolarGrid stroke='black' />
            <PolarAngleAxis dataKey='subject' />
            <PolarRadiusAxis stroke='black' angle={140} domain={[0, 120]} />
            <Radar name='performance' dataKey='performance' stroke='#ff7700' fill='#ff7700' fillOpacity={0.8} />
            <Legend />
          </RadarChart>
          <Button onClick={() => null} content='Consulter' />
        </section>
        <section>
          <h3>Muscle des bras</h3>
          <RadarChart outerRadius={90} width={280} height={280} data={bras}>
            <PolarGrid stroke='black' />
            <PolarAngleAxis dataKey='subject' />
            <PolarRadiusAxis stroke='black' angle={140} domain={[0, 70]} />
            <Radar name='performance' dataKey='performance' stroke='#ff7700' fill='#ff7700' fillOpacity={0.8} />
            <Legend />
          </RadarChart>
          <Button onClick={() => null} content='Consulter' />
        </section>
        <section>
          <h3>Muscle des jambes</h3>
          <RadarChart outerRadius={70} width={280} height={280} data={jambes}>
            <PolarGrid stroke='black' />
            <PolarAngleAxis dataKey='subject' />
            <PolarRadiusAxis stroke='black' angle={140} domain={[0, 180]} />
            <Radar name='performance' dataKey='performance' stroke='#ff7700' fill='#ff7700' fillOpacity={0.8} />
            <Legend />
          </RadarChart>
          <Button onClick={() => null} content='Consulter' />
        </section>
      </div>
    </div>
  );
};

export default Training;
