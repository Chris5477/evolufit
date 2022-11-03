import { ChangeEvent, Dispatch, FormEvent, FunctionComponent, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import FormData from "../formData/FormData";
import { initialForm } from "./variables";
import close from "../../assets/icons/close.svg";
import { TypeFormWeightProps } from "../form-weight/variable";


const FormExo : FunctionComponent<TypeFormWeightProps>= ({setModal}) => {
  const [form, setForm] = useState(initialForm);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const { distance, calorie } = form;

  const createData = (e: FormEvent, state: any) => {
    e.preventDefault();
    const isValid = Object.values(state).every((value) => value);
    if (!isValid) {
      toast.error("Veuillez remplir tous les champs", { autoClose: 2000, theme: "colored" });
    } else {
      alert("Aucune base de donnée est disponible pour le moment");
    }
  };
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
              handleChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e)}
              name='distance'
            />
            <FormData
              label='Calories'
              typeInput='number'
              valueInput={calorie}
              handleChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e)}
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
