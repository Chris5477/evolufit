import ChartLine from "../linechart/ChartLine";

export const getEvolutionWeight = (weight, initialWeight) => {
  const newWeight = weight - initialWeight;
  if (weight > initialWeight) {
    return `+ ${newWeight} kg 🔺`;
  } else if (weight < initialWeight) {
    return `${newWeight} kg 🔻`;
  } else {
    return weight;
  }
};

export const sumData = (arr, key) => {
  const dataExploit = arr.map((data) => data[key]);
  const total = dataExploit.reduce((acc, val) => acc + val);
  return Number.isInteger(total) ? total : total.toFixed(2)
};

const Progress = ({ label, unity, initialWeight, data }) => {
  const lastWeight = data.at(-1)
  let getWeightProgression = null;

  if (label === "poids") {
    const newWeight = getEvolutionWeight(lastWeight, initialWeight);
    <p>{lastWeight}</p>;
    getWeightProgression = (
      <>
        <p>{lastWeight}</p>
        <p>{initialWeight != newWeight && newWeight}</p>;
      </>
    );
  } else {
    getWeightProgression = (
      <p>
        {sumData(data, label)} <br /> {unity}
      </p>
    );
  }

  return (
    <section data-testid='progress' className='progress container'>
      <h2>
        {label} ({unity})
      </h2>
      <div className='infos'>
        <div className='indication'>{getWeightProgression}</div>
        <ChartLine label={label} data={data} />
      </div>
    </section>
  );
};

export default Progress;
