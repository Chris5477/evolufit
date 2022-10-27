import {FunctionComponent } from "react";
import { FormDataProps } from "./variable";

const FormData: FunctionComponent<FormDataProps> = ({ label, valueInput, typeInput, handleChange, name }) => {
  return (
    <div data-testid='input-form' className='form-data container uppercase'>
      <label htmlFor={label}>Votre {label} :</label>
      <input name={name} onChange={handleChange} id={label} type={typeInput} value={valueInput} />
    </div>
  );
};
FormData.defaultProps = {
  typeInput: "text",
};
export default FormData;
