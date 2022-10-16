import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error from "./Error";

describe("Error page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );
  });

  test("Should render an error page", () => {
    const error = screen.getByTestId("error-page");
    expect(error).toBeInTheDocument();
  });
});
