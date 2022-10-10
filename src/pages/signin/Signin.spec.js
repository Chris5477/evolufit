import { render, screen } from "@testing-library/react";
import Signin from "./Signin";

describe("Signin Page", () => {
  test("Should render the component", () => {
    render(<Signin />);

    const signin = screen.getByTestId("signin");
    expect(signin).toBeInTheDocument();
  });
});
