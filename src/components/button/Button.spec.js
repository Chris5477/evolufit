import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  beforeEach(() => render(<Button />));

  test("Should render the button", () => {
    const btn = screen.getByTestId("button");
    expect(btn).toBeInTheDocument();
  });
});
