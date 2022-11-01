/* istanbul ignore file */

import { Dispatch, SetStateAction } from "react";
import { DataInDataline } from "../biglinechart/variables";

export interface ModalGraphicProps {
  setModal: Dispatch<SetStateAction<boolean>>;
  data: DataInDataline;
  label: string;
}
