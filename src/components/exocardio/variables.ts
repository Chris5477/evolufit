/* istanbul ignore file */

import { Week } from "../../utils/interface";

export type TrainingProps = {
  id: string;
  type: string;
  name: string;
  week: Week  ;
  month: number[];
  year: number[];
};
