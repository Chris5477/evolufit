import { render, screen } from "@testing-library/react";
import SpiderChart from "./Radarchart"

describe("Radarchart Component", () => {
  test("Should render the graphic", () => {
    render(<SpiderChart />);

    const radar = screen.getByTestId("radarchart");
    expect(radar).toBeInTheDocument();
  });
});
