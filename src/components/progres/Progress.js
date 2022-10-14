import ChartLine from "../linechart/ChartLine";
import eye from "../../assets/icons/eye.svg";
import { useState } from "react";
import Modal from "../modal/Modal";

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
  return Number.isInteger(total) ? total : total.toFixed(2);
};

const Progress = ({ label, unity, initialWeight, data }) => {
  const lastWeight = data.at(-1);
  let getWeightProgression = null;

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  if (label === "poids") {
    const newWeight = getEvolutionWeight(lastWeight, initialWeight);
    getWeightProgression = (
      <>
        <p>{lastWeight}</p>
        <p>{initialWeight != newWeight && newWeight}</p>
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
      <div className='space-flex'>
        <h2>
          {label} ({unity})
        </h2>
        <img onClick={openModal} src={eye} alt='See more...' />
      </div>
      <div className='space-flex'>
        <div className='indication'>{getWeightProgression}</div>
        <ChartLine label={label} data={data} />
      </div>
      {modal && <Modal setModal={setModal} content={""} />}
    </section>
  );
};

export default Progress;
