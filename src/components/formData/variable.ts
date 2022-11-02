/* istanbul ignore file */

import { ChangeEvent } from "react";

export interface FormDataProps {
  label: string;
  valueInput: string | number;
  typeInput?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}
