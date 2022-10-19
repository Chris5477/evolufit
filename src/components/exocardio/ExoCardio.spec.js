import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Exocardio from "./Exocardio";

describe("ExoCardio", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <Exocardio />
      </BrowserRouter>
    )
  );

  test("Should render the component", () => {
    const element = screen.getByTestId("exocardio");
    expect(element).toBeInTheDocument();
  });
});
