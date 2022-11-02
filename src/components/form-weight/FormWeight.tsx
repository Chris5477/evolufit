import { ChangeEvent, FormEvent, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import FormData from "../formData/FormData";
import { initialMass } from "./variable";

const FormWeight = () => {
  const [weight, setWeight] = useState({ weight: "" });
  const [form, setForm] = useState(initialMass);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "weight") {
      setWeight({ ...weight, [name]: value });
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
    <div className='modal container' data-testid='form-weight'>
      <div className='modal posFixed' data-testid='form-exo'>
        <section className='modal-container'>
          <form className='add-data flex-center' onSubmit={(e: FormEvent) => createData(e, weight)}>
            <h2>Pesologie</h2>
            <FormData
              label='nouveau poids'
              typeInput='number'
              valueInput={weight.weight}
              handleChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e)}
              name='weight'
            />
            <input type='submit' value='Valider' />
          </form>
          <form className='add-data flex-center' onSubmit={(e: FormEvent) => createData(e, form)}>
            <h2>Vos masses</h2>
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
              label='Mzsse osseuse'
              typeInput='number'
              valueInput={bonesMass}
              handleChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e)}
              name='bonesMass'
            />
            <input type='submit' value='Valider' />
          </form>
        </section>
      </div>
    </div>,
    document.body
  );
};

export default FormWeight;
