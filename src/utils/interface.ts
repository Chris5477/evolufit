export interface TypeInitialMass {
  fatMass: string;
  muscularMass: string;
  bonesMass: string;
}

export interface TypeInitialWeight {
  weight: number;
  date: string;
}

export interface CardioForm {
  distance: number;
  calorie: number;
  date: string;
}

export type Weight = { weight: number; date: string }[];
export type Week = { calories: number; distance: number; date: string }[];
export type DataInDataline = Weight | Week;
