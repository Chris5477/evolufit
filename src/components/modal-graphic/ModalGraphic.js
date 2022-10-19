import { createPortal } from "react-dom";
import Dataline from "../dataline/Dataline";
import close from "../../assets/icons/close.svg";

const ModalGraphic = ({ setModal, data, label }) => {
  return createPortal(
    <div data-testid='modal' className='modal flex-center'>
      <img className='close-modal' onClick={() => setModal(false)} src={close} alt='cross' />
      <Dataline data={data} label={label} />
    </div>,
    document.body
  );
};

export default ModalGraphic;
