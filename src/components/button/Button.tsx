import { FunctionComponent } from "react";
import { ButtonProps } from "./variables";

const Button: FunctionComponent<ButtonProps> = ({ onClick, content }) => (
  <button onClick={onClick} data-testid='button' className='btn btn-color'>
    {content}
  </button>
);

export default Button;
