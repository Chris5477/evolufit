import { fireEvent, render, screen } from "@testing-library/react";
import { mockContext } from "../../mock/mockContext";
import Context from "../Context";
import IMC from "./IMC";

describe("IMC component", () => {
  beforeEach(() => {
    render(
      <Context.Provider value={mockContext}>
        <IMC />
      </Context.Provider>
    );
  });

  test("Should render the IMC component", () => {
    const imc = screen.getByTestId("info-imc");
    expect(imc).toBeInTheDocument();
  });

  test("Should dialog with a modal if user clicks on the icons", () => {
    const openerModal = document.querySelector(".info-imc h2 img");
    fireEvent.click(openerModal);

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();

    const closerModal = document.querySelector(".close-modal");
    fireEvent.click(closerModal);
    expect(modal).not.toBeInTheDocument();
  });
});
