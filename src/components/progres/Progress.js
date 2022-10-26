import ChartLine from "../linechart/ChartLine";
import eye from "../../assets/icons/eye.svg";
import { useState } from "react";
import ModalGraphic from "../modal-graphic/ModalGraphic";
import { getProgres } from "./variables";

const Progress = ({ label, unity, initialWeight, data }) => {
  const lastWeight = data.at(-1).weight;
  let getWeightProgression = getProgres(label, lastWeight, initialWeight, data, unity);

  const [modal, setModal] = useState(false);

  return (
    <section data-testid='progress' className='progress container'>
      <div className='space-flex'>
        <h2>
          {label} ({unity})
        </h2>
        <img className='open-btn' onClick={() => setModal(true)} src={eye} alt='See more...' />
      </div>
      <div className='space-flex'>
        <div className='indication'>{getWeightProgression}</div>
        <ChartLine label={label} data={data} />
      </div>
      {modal && <ModalGraphic setModal={setModal} data={data} label={label} />}
    </section>
  );
};

export default Progress;
