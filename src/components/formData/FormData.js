const FormData = ({ label, valueInput, typeInput, handleChange, name }) => {
  return (
    <div data-testid='input-form' className='form-data container uppercase'>
      <label htmlFor={label}>Votre {label} :</label>
      <input className='uppercase' name={name} onChange={handleChange} id={label} type={typeInput} value={valueInput} />
    </div>
  );
};
FormData.defaultProps = {
  typeInput: "text",
};
export default FormData;
