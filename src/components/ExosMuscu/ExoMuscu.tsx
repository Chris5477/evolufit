import { ChangeEvent, FormEvent, FunctionComponent, useContext, useState } from "react";
import { toast } from "react-toastify";
import Context from "../Context";
import { initialWeight } from "../form-weight/variable";
import FormData from "../formData/FormData";
import { TypeExosMuscuProps, TypeMapFormMuscu } from "./variables";
import close from "../../assets/icons/close.svg";

const ExosMuscu: FunctionComponent<TypeExosMuscuProps> = ({ groupMuscular, setModal }) => {
  const training = useContext(Context);
  const [form, setForm] = useState(initialWeight);
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, valueAsNumber } = e.target;
    if (name === "weight") {
      setForm({ ...form, [name]: valueAsNumber });
    }
  };

  const createData = (e: FormEvent, state: any) => {
    e.preventDefault();
    const isValid = Object.values(state).every((value) => value);
    if (!isValid) {
      toast.error("Veuillez remplir tous les champs", { autoClose: 2000, theme: "colored" });
    } else {
      alert("Aucune base de donnée est disponible pour le moment");
    }
  };

  return (
    <div className='modal exo-form posFixed container' data-testid='exo-muscu'>
      <img className='close-modal' onClick={() => setModal(false)} src={close} alt='cross' />

      <h2 className="txt-center color-light">Muscles {groupMuscular}</h2>
      {training[groupMuscular].map(({ subject, performance }: TypeMapFormMuscu, index: number) => (
        <form className='exo' key={`index ${index}`} onSubmit={(e) => createData(e, form)}>
          <h3>{subject}</h3>
          <p>
            Votre performace actuel est de <span>{performance}</span> kg.
          </p>
          <FormData
            label={subject}
            typeInput='number'
            valueInput={form.weight}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e)}
            name={subject}
          />

          <input className="btn btn-color" type='submit' value='Valider' />
        </form>
      ))}
    </div>
  );
};

export default ExosMuscu;
