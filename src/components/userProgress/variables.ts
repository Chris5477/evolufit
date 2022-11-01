/* istanbul ignore file */

type Weight = { weight: number; date: string }[];

export type Week = { calories: number; distance: number; date: string }[];

type DataInDataline = Weight | Week;

export interface UserPrgoresProps {
  title: string;
  data?: any;
  isCardio?: boolean;
}
