import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Cardio from "./Cardio";

describe("Cardio page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Cardio />
      </BrowserRouter>
    );
  });

  test("Should render the cardio page", () => {
    const cardio = screen.getByTestId("cardio-page");

    expect(cardio).toBeInTheDocument();
  });
});
