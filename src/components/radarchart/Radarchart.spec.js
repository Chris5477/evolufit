import { render, screen } from "@testing-library/react";
import Radar from "./Radarchart"

describe("Radarchart Component", () => {
  test("Should render the graphic", () => {
    render(<Radar />);

    const radar = screen.getByTestId("radarchart");
    expect(radar).toBeInTheDocument();
  });
});
