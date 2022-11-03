import { Dispatch, SetStateAction } from "react";

interface TypeInitialMass {
    fatMass: string,
    muscularMass: string,
    bonesMass: string,
}

interface TypeInitialWeight {
    weight : number,
    date : string
}

export interface TypeFormWeightProps {
    setModal : Dispatch<SetStateAction<boolean>>
}


export const initialMass : TypeInitialMass= {
    fatMass: "",
    muscularMass: "",
    bonesMass: "",
  };

export const initialWeight : TypeInitialWeight= {
    weight : 0,
    date : new Date().toLocaleString()
  };