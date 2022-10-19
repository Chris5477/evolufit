import { render, screen } from "@testing-library/react";
import Warning from "./Warning";
describe("Warning Componant", () => {
  test("Should render the componant", () => {
    render(<Warning />);

    const componant = screen.getByTestId("warning");
    expect(componant).toBeInTheDocument();
  });
});
