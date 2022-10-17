import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Training from "./Training";

describe("Training page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Training />
      </BrowserRouter>
    );
  });

  test("Should render the training page", () => {
    const training = screen.getByTestId("training-page");
    expect(training).toBeInTheDocument();
  });
});
