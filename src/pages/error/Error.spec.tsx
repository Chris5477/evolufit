import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Context from "../../components/Context";
import { mockContext } from "../../mock/mockContext";
import Error from "./Error";

describe("Error page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Error />
        </Context.Provider>
      </BrowserRouter>
    );
  });

  test("Should render an error page", () => {
    const error = screen.getByTestId("error-page");
    expect(error).toBeInTheDocument();
  });
});
