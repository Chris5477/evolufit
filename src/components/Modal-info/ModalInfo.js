import { createPortal } from "react-dom";
import close from "../../assets/icons/close.svg";

const ModalInfo = ({ title, content, setModal, other }) => {
  return createPortal(
    <div data-testid='modal' className='modal posFixed flex-center'>
      <img className='close-modal' onClick={() => setModal(false)} src={close} alt='cross' />

      <div className='container-modal'>
        <div className='header-modal'>
          <h2 className='uppercase'>{title}</h2>
        </div>
        <div className='content-modal'>
          <div className='content-other'>{other}</div>
          {content}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalInfo;
