import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { createPortal } from "react-dom";
import FormData from "../formData/FormData";
import { initialForm } from "./variables";
import close from "../../assets/icons/close.svg";
import { TypeFormWeightProps } from "../form-weight/variable";
import { changeValue, createData } from "../../utils/functions";


const FormExo : FunctionComponent<TypeFormWeightProps>= ({setModal}) => {

  const [form, setForm] = useState(initialForm);
  const { distance, calorie } = form;

  return createPortal(
    <div className='modal exo-form posFixed' data-testid='form-exo'>
        <img className='close-modal' onClick={() => setModal(false)} src={close} alt='cross' />
        <section className='modal-container exo'>
          <form className='exo' onSubmit={(e: FormEvent) => createData(e, form)}>
            <h2>EXERCICE</h2>

            <FormData
              label='Distance'
              typeInput='number'
              valueInput={distance}
              handleChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e, setForm, form)}
              name='distance'
            />
            <FormData
              label='Calories'
              typeInput='number'
              valueInput={calorie}
              handleChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e, setForm, form)}
              name='calorie'
            />
            <input className="btn btn-color" type='submit' value='Valider' />
          </form>
        </section>
      </div>,
    document.body
  );
};

export default FormExo;
