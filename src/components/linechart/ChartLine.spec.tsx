import { render, screen } from "@testing-library/react";
import ChartLine from "./ChartLine";

describe("Linechart", () => {
  const mockData = [{ weight: 50, date: "25 octobre 2019" }];
  test("Should render the compoant", () => {
    render(<ChartLine label='weight' data={mockData} />);

    const graphic = screen.getByTestId("linechart");

    expect(graphic).toBeInTheDocument();
  });
});
