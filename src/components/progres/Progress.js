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
  return dataExploit.reduce((acc, val) => acc + val);
};

const Progress = ({ label, unity, initialWeight, data }) => {
  let getWeightProgression = null;

  if (label === "poids") {
    const newWeight = getEvolutionWeight(data, initialWeight);
    <p>{data}</p>;
    getWeightProgression = (
      <>
        <p>{data}</p>
        <p>{initialWeight != newWeight && newWeight}</p>;
      </>
    );
  } else {
    getWeightProgression = (
      <p>
        {sumData(data, label)} {unity}
      </p>
    );
  }

  return (
    <section data-testid='progress' className='progress container'>
      <h2 className='uppercase'>
        {label} ({unity})
      </h2>
      <div className='infos'>
        <div className='indication'>{getWeightProgression}</div>
        <div className='graphic'>{/* // graphic a definir */}</div>
      </div>
    </section>
  );
};

export default Progress;
