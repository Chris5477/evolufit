import { render, screen } from "@testing-library/react";
import FormData from "./FormData";

describe("FormData", () => {
  const props = {
    label: "test",
    valueInput: "",
    handleChange: () => "test",
    name: "test"
  };

  beforeEach(() => {
    render(<FormData {...props} />);
  });

  test("Should render the componant", () => {
    const form = screen.getByTestId("input-form");
    expect(form).toBeInTheDocument();
  });

  test("Should add type text to input if the type isn't specified", () => {
    const typeInput = document.querySelector("input").type;
    if (props.type === undefined) {
      expect(typeInput).toBe("text");
    }
  });
});
