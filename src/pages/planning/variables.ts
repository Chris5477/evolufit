export type Program = {
  day: string;
  objectif: string;
  program: string[];
};

export interface PlanningType {
  id: string;
  week: Program[];
}
