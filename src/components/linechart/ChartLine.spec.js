import { render, screen } from "@testing-library/react";
import ChartLine from "./ChartLine";

describe("Linechart", () => {
  test("Should render the compoant", () => {
    render(<ChartLine />);

    const graphic = screen.getByTestId("linechart");

    expect(graphic).toBeInTheDocument();
  });
});
