export const getEvolutionWeight = (weight: number, initialWeight: number) => {
  const newWeight = weight - initialWeight;
  if (weight > initialWeight) {
    return `+ ${newWeight} kg 🔺`;
  } else if (weight < initialWeight) {
    return `${newWeight} kg 🔻`;
  } else {
    return weight;
  }
};

export const sumData = (arr: any, key: string) => {
  const dataExploit = arr.map((data: any) => data[key]);
  let total = dataExploit.reduce((acc: number, val: number) => acc + val);
  total = key === "distance" ? Number(total / 100) : total;
  return Number.isInteger(total) ? total : total.toFixed(2);
};

export const getProgres = (label: string, lastWeight: number, initialWeight: number, data: any, unity: string) => {
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

export interface ProgressProps {
  label: string;
  unity: string;
  initialWeight?: number;
  data: any; //  A MODIFIER
}
