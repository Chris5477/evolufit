import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Context from "../../components/Context";
import { mockContext } from "../../mock/mockContext";
import Training from "./Training";

describe("Training page", () => {
  test("Should render the training page", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Training />
        </Context.Provider>
      </BrowserRouter>
    );
    const training = screen.getByTestId("training-page");
    expect(training).toBeInTheDocument();
  });

  test("Should render the NoData component if there is no data", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={null}>
          <Training />
        </Context.Provider>
      </BrowserRouter>
    );
    
    const noData = screen.getAllByTestId("no-data").length

    expect(noData).toEqual(4)
  });
});
