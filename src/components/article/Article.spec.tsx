import { render, screen } from "@testing-library/react";
import Article from "./Article";
import { actualities } from "../../news/actualities.js";
import { onClick } from "./variables";

describe("Slide Component", () => {
  const { title, article, urlImg } = actualities[0];
  let slide: HTMLDivElement;
  beforeEach(() => {
    render(<Article title={title} article={article} urlImg={urlImg} />);
    slide = screen.getByTestId("slide");
  });

  test("Should render The componant", () => {
    expect(slide).toBeInTheDocument();
  });

  test("Should print something in the console", () => {
    const resultClick = onClick();
    expect(resultClick).toBeNull();
  });
});
