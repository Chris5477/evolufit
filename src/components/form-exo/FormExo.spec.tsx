import { render, screen } from "@testing-library/react";
import FormExo from "./FormExo";


describe("FormExo", () => {
  beforeEach(() => render(<FormExo />));

  test("Should render FormExo component", () => {
    const form = screen.getByTestId("form-exo");
    expect(form).toBeInTheDocument;
  });
});
