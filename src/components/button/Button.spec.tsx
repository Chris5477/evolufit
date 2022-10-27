import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  const mockFunction = jest.fn();
  beforeEach(() => render(<Button onClick={mockFunction} content='valider' />));

  test("Should render the button", () => {
    const btn = screen.getByTestId("button");
    expect(btn).toBeInTheDocument();
  });

  test("Should display the text contained in props content", () => {
    const textInButton = screen.getByText("valider");
    expect(textInButton).toBeTruthy();
  });

  test("Should call the onclick function", () => {
    const btn = screen.getByTestId("button");
    fireEvent.click(btn);

    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
