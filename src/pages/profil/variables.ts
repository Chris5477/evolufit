
import { Dispatch, SetStateAction } from "react";

export const translateItem = (ref: any, translate: number, setTranslate: Dispatch<SetStateAction<number>>) => {
  const divElement = ref.current;
  translate < 660 ? setTranslate(translate + 330) : setTranslate(translate - 660);
  divElement.style.transform = "translateX(" + -translate + "px)";
  divElement.style.transition = "2s";
};
