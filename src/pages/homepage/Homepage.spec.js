import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

describe("Homepage", () => {
  test("Should return the component", () => {
    render(<Homepage />);

    const div = screen.getByTestId("homepage");

    expect(div).toBeInTheDocument();
  });
});
