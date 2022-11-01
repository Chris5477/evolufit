/* istanbul ignore file */

import { Week } from "../biglinechart/variables";

export type TrainingProps = {
  id: string;
  type: string;
  name: string;
  week: Week;
  month: number[];
  year: number[];
};
