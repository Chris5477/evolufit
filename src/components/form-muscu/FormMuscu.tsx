import { ChangeEvent, FunctionComponent, useContext, useState } from "react";
import Context from "../Context";
import { initialWeight } from "../form-weight/variable";
import FormData from "../formData/FormData";
import { TypeExosMuscuProps, TypeMapFormMuscu } from "./variables";
import close from "../../assets/icons/close.svg";
import { changeValue, createData } from "../../utils/functions";

const FormsMuscu: FunctionComponent<TypeExosMuscuProps> = ({ groupMuscular, setModal }) => {
  const training = useContext(Context);
  const [form, setForm] = useState(initialWeight);

  return (
    <div className='modal exo-form posFixed container' data-testid='exo-muscu'>
      <img className='close-modal' onClick={() => setModal(false)} src={close} alt='cross' />

      <h2 className='txt-center color-light'>Muscles {groupMuscular}</h2>
      {training[groupMuscular].map(({ subject, performance }: TypeMapFormMuscu, index: number) => (
        <form className='exo' key={`index ${index}`} onSubmit={(e) => createData(e, form)}>
          <h2>{subject}</h2>
          <p>
            Votre performance actuel est de <span>{performance}</span> kg.
          </p>
          <FormData
            label={subject}
            typeInput='number'
            valueInput={form.weight}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => changeValue(e, setForm, form)}
            name={"weight"}
          />

          <input className='btn btn-color' type='submit' value='Valider' />
        </form>
      ))}
    </div>
  );
};

export default FormsMuscu;
