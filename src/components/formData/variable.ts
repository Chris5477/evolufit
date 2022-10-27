import { ChangeEvent } from "react";

export interface FormDataProps {
  label: string;
  valueInput: string;
  typeInput?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}
