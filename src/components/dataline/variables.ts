type Weight = { weight: number; date: string }[];

export type Week = { calories: number; distance: number; date: string }[];

type DataInDataline = Weight | Week;

export interface DatalineProps {
  label: string;
  data: DataInDataline;
  isCardio?: boolean;
}
