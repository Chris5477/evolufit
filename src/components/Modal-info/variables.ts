/*istanbul ignore file*/
import { Dispatch, ReactElement, SetStateAction } from "react";

export interface ModalInfoProps {
  title : string,
  content : string,
  setModal : Dispatch<SetStateAction<boolean>>,
  other: ReactElement
}