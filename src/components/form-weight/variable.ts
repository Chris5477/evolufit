import { Dispatch, SetStateAction } from "react";
import { TypeInitialMass, TypeInitialWeight } from "../../utils/interface";

export interface TypeFormWeightProps {
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const initialMass: TypeInitialMass = {
  fatMass: "",
  muscularMass: "",
  bonesMass: "",
};

export const initialWeight: TypeInitialWeight = {
  weight: 0,
  date: new Date().toLocaleString(),
};
