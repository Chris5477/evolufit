import { render, screen } from "@testing-library/react";
import FormWeight from "./FormWeight";

describe("FormWeight", () => {
  beforeEach(() => render(<FormWeight setModal={() => false} />));

  test("Should render FormWeight component", () => {
    const form = screen.getByTestId("form-weight");
    expect(form).toBeInTheDocument;
  });
});
