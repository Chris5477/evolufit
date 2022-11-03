import { ChangeEvent, Dispatch, FormEvent, FunctionComponent, SetStateAction, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import FormData from "../formData/FormData";
import { initialMass, initialWeight, TypeFormWeightProps } from "./variable";
import close from "../../assets/icons/close.svg";

const FormWeight: FunctionComponent<TypeFormWeightProps> = ({ setModal }) => {
  const [weight, setWeight] = useState(initialWeight);
  const [form, setForm] = useState(initialMass);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, valueAsNumber } = e.target;
    if (name === "weight") {
      setWeight({ ...weight, [name]: valueAsNumber });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const { fatMass, muscularMass, bonesMass } = form;

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
    <div className='modal container exo-form posFixed' data-testid='form-weight'>
      <img className='close-modal' onClick={() => setModal(false)} src={close} alt='cross' />

      <section className='modal-container'>
        <form className='exo' onSubmit={(e: FormEvent) => createData(e, weight)}>
          <h2 className=' color-light'>Pesologie</h2>
          <FormData
            label='nouveau poids'
            typeInput='number'
            valueInput={weight.weight}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e)}
            name='weight'
          />
          <input className='btn btn-color' type='submit' value='Valider' />
        </form>
        <form className='exo' onSubmit={(e: FormEvent) => createData(e, form)}>
          <h2 className='color-light'>Vos masses</h2>
          <FormData
            label='Masse Grasse'
            typeInput='number'
            valueInput={fatMass}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e)}
            name='fatMass'
          />
          <FormData
            label='Masse Musculaire'
            typeInput='number'
            valueInput={muscularMass}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e)}
            name='muscularMass'
          />
          <FormData
            label='Masse osseuse'
            typeInput='number'
            valueInput={bonesMass}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e)}
            name='bonesMass'
          />
          <input className='btn btn-color' type='submit' value='Valider' />
        </form>
      </section>
    </div>,
    document.body
  );
};

export default FormWeight;
