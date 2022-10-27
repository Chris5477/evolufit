import { Dispatch, SetStateAction } from "react";
import { DataInDataline } from "../dataline/variables";

export interface ModalGraphicProps {
    setModal : Dispatch<SetStateAction<boolean>>,
    data : DataInDataline,
    label : string
  }