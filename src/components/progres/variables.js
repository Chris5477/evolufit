import { Week } from "../dataline/variables";

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
  let total = dataExploit.reduce((acc, val) => acc + val);
  total = key === "distance" ? Number(total / 100) : total;
  return Number.isInteger(total) ? total : total.toFixed(2);
};

export const getProgres = (label, lastWeight, initialWeight, data, unity) => {
  if (label === "poids") {
    const newWeight = getEvolutionWeight(lastWeight, initialWeight);
    return (
      <>
        <p>{lastWeight}</p>
        <p>{initialWeight !== newWeight && newWeight}</p>
      </>
    );
  } else {
    return (
      <p>
        {sumData(data, label)} <br /> {unity}
      </p>
    );
  }
};
