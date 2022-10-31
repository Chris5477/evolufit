import { createPortal } from "react-dom";
import BigLineChart from "../biglinechart/BigLineChart";
import close from "../../assets/icons/close.svg";
import Warning from "../warning/Warning";
import { FunctionComponent } from "react";
import { ModalGraphicProps } from "./variable";

const ModalGraphic: FunctionComponent<ModalGraphicProps> = ({ setModal, data, label }) => {
  return createPortal(
    <div data-testid='modal' className='modal posFixed flex-center'>
      <img className='close-modal' onClick={() => setModal(false)} src={close} alt='cross' />
      <h2 className='uppercase'>
        {label} <br /> 7 derniers jours
      </h2>
      <BigLineChart data={data} label={label} />
      {label === "distance" && <Warning />}
    </div>,
    document.body
  );
};

export default ModalGraphic;
