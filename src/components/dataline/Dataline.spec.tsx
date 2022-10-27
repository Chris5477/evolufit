import { render, screen } from "@testing-library/react";
import Dataline from "./Dataline";

const mockData = [{ weight: 50, date: "27 octobre 2020" }];

describe("Dataline Component", () => {
  test("Should render the componant", () => {
    render(<Dataline label='label' data={mockData} />);

    const graphic = screen.getByTestId("dataline");
    expect(graphic).toBeInTheDocument();
  });
});
