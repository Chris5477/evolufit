import { render, screen } from "@testing-library/react";
import { mockContext } from "../../mock/mockContext";
import Context from "../Context";
import IMC from "./IMC";

describe("IMC component", () => {
  test("Should render the IMC component", () => {
    render(
      <Context.Provider value={mockContext}>
        <IMC />
      </Context.Provider>
    );

    const imc = screen.getByTestId("info-imc");
    expect(imc).toBeInTheDocument();
  });
});
