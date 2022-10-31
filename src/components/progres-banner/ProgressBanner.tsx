import SmallLineChart from "../smallLineChart/SmallLineChart";
import eye from "../../assets/icons/eye.svg";
import { FunctionComponent, useState } from "react";
import ModalGraphic from "../modal-graphic/ModalGraphic";
import { getProgres, ProgressProps } from "./variables";

const ProgressBanner: FunctionComponent<ProgressProps> = ({ label, unity, initialWeight, data }) => {
  const lastWeight = data[0].weight;

  let getWeightProgression = getProgres(label, lastWeight, initialWeight!, data, unity);

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
        <SmallLineChart label={label} data={data} />
      </div>
      {modal && <ModalGraphic setModal={setModal} data={data} label={label} />}
    </section>
  );
};

export default ProgressBanner;
