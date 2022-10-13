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

const Progress = ({ label, unity, initialWeight, data }) => {
  let getWeightProgression = null;
  if (label === "poids") {
    const newWeight = getEvolutionWeight(data, initialWeight);
    getWeightProgression = `<p>${initialWeight !== newWeight && newWeight}</p>`;
  }

  return (
    <section data-testid='progress' className='progress container'>
      <h2 className='uppercase'></h2>
      <div className='infos'>
        <div className='indication'>
          {label} ({unity})<p>{data}</p>
          {getWeightProgression}
        </div>
        <div className='graphic'>{/* // graphic a definir */}</div>
      </div>
    </section>
  );
};

export default Progress;
