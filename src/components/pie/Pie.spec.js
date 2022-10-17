import { render, screen } from "@testing-library/react";
import Piechart from "./PieGraph";

describe("PieChart component", () => {
    
    test("Should render the pie chart", () => {
      render(
          <Piechart />
      );
    const pie = screen.getByTestId("pie");
    expect(pie).toBeInTheDocument();
  });
});
