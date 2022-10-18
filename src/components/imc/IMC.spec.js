import { render, screen } from "@testing-library/react";
import IMC from "./IMC";

describe("IMC component", () => {
  test("Should render the IMC component", () => {
    render(<IMC />);

    const imc = screen.getByTestId("info-imc");
    expect(imc).toBeInTheDocument();
  });
});
