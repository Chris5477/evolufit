export const translateItem = (ref, translate, setTranslate) => {
  const divElement = ref.current;
  translate < 660 ? setTranslate(translate + 330) : setTranslate(translate - 660);
  divElement.style.transform = "translateX(" + -translate + "px)";
  divElement.style.transition = "2s";
};
