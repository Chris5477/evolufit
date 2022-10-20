import { createPortal } from "react-dom";
import Dataline from "../dataline/Dataline";
import close from "../../assets/icons/close.svg";
import Warning from "../warning/Warning";

const ModalGraphic = ({ setModal, data, label }) => {
  return createPortal(
    <div data-testid='modal' className='modal posFixed flex-center'>
      <img className='close-modal' onClick={() => setModal(false)} src={close} alt='cross' />
      <h2 className='uppercase'>
      {label} <br /> 7 derniers jours
      </h2>
      <Dataline data={data} label={label} />
      {label === "distance" && <Warning />}
    </div>,
    document.body
  );
};

export default ModalGraphic;
