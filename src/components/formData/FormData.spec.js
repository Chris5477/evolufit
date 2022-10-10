import { render, screen } from "@testing-library/react";
import FormData from "./FormData";

describe("FormData", () => {
  beforeEach(() => {
    render(<FormData label='test' valueInput='' typeInput='' handleChange={(e) => e.target.value} name='test' />);
  });

  test("Should render the componant", () => {
    const input = screen.getByTestId("input-form");

    expect(input).toBeInTheDocument();
  });
});
