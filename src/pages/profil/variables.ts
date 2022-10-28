import { Dispatch, SetStateAction } from "react";
import { Week } from "../../components/userProgress/variables";

export const translateItem = (ref: any, translate: number, setTranslate: Dispatch<SetStateAction<number>>) => {
  const divElement = ref.current;
  translate < 660 ? setTranslate(translate + 330) : setTranslate(translate - 660);
  divElement.style.transform = "translateX(" + -translate + "px)";
  divElement.style.transition = "2s";
};

export interface FlatMapTypes {
  id: string;
  type: string;
  name: string;
  week: Week[];
  month: number[];
  year: number[];
}
