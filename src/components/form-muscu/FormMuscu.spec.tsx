import { render, screen } from "@testing-library/react";
import FormMuscu from "./FormMuscu";

describe("FormMuscu", () => {
  beforeEach(() => render(<FormMuscu />));

  test("Should render FormMuscu component", () => {
    const form = screen.getByTestId("form-muscu");
    expect(form).toBeInTheDocument;
  });
});
