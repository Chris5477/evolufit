import { fireEvent, render, screen } from "@testing-library/react";
import { mockContext } from "../../mock/mockContext";
import Context from "../Context";
import IMC from "./IMC";

describe("IMC component", () => {
  beforeEach(() => {
    const weight = true;
    render(<Context.Provider value={mockContext}>{weight && <IMC />}</Context.Provider>);
  });

  test("Should render the IMC component", () => {
    const imc = screen.getByTestId("info-imc");
    expect(imc).toBeInTheDocument();
  });

  test("Should dialog with a modal if user clicks on the icons", () => {
    const openerModal = document.querySelector(".info-imc h2 img") as HTMLDivElement;
    fireEvent.click(openerModal);

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();

    const closerModal = document.querySelector(".close-modal") as HTMLImageElement;
    fireEvent.click(closerModal);
    expect(modal).not.toBeInTheDocument();
  });

  test("Should not change the input value", () => {
    const rangeInput = document.querySelector("input") as HTMLInputElement;
    const currentValue = rangeInput.value;
    fireEvent.change(rangeInput, { target: { value: 25 } });
    const valueAfterEvent = rangeInput.value;

    expect(currentValue).toEqual(valueAfterEvent);
  });
});
