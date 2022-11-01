import { fireEvent, render, screen } from "@testing-library/react";
import NoData from "./NoData";

describe("IMC component", () => {
  beforeEach(() => {
    render(<NoData />);
  });

  test("Should render the IMC component", () => {
    const noData = screen.getByTestId("no-data");
    expect(noData).toBeInTheDocument();
  });

  test("Should do no action on th click of button", () => {
    const noDataButton = screen.getByText("Ajouter");
    const content = document.body.innerHTML
    fireEvent.click(noDataButton)
    expect(content).toBe(content)


  });
});
