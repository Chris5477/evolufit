import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Context from "../../components/Context";
import { mockContext } from "../../mock/mockContext";
import Training from "./Training";

describe("Training page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Training />
        </Context.Provider>
      </BrowserRouter>
    );
  });

  test("Should render the training page", () => {
    const training = screen.getByTestId("training-page");
    expect(training).toBeInTheDocument();
  });
});
