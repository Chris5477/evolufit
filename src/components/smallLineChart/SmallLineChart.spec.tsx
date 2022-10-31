import { render, screen } from "@testing-library/react";
import SmallLineChart from "./SmallLineChart";

describe("Linechart", () => {
  const mockData = [{ weight: 50, date: "25 octobre 2019" }];
  test("Should render the compoant", () => {
    render(<SmallLineChart label='weight' data={mockData} />);

    const graphic = screen.getByTestId("linechart");

    expect(graphic).toBeInTheDocument();
  });
});
