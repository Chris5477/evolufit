import { ChangeEvent, useState } from "react";
import { createPortal } from "react-dom";
import FormData from "../formData/FormData";

const FormExo = () => {
  return createPortal(
    <div className='modal posFixed' data-testid='form-exo'>
      <section className='modal-container'></section>
    </div>,
    document.body
  );
};

export default FormExo;
