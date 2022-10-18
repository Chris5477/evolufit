import { render, screen } from "@testing-library/react";
import Piechart from "./PieGraph";

describe("PieChart component", () => {
  test("Should render the pie chart", () => {
    render(<Piechart title="Hello world" info="Des informations" />);
    const pie = screen.getByTestId("pie");
    expect(pie).toBeInTheDocument();

    const text = screen.getByText("Hello world");
    const info = screen.getByText("Des informations");

    expect(text).toBeTruthy()
    expect(info).toBeTruthy()
  });
});
