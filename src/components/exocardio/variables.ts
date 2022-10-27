import { Week } from "../dataline/variables";

export type TrainingProps = {
  id: string;
  type: string;
  name: string;
  week: Week;
  month: number[];
  year: number[];
};

