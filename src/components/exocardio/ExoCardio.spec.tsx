import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockContext } from "../../mock/mockContext";
import Context from "../Context";
import Exocardio from "./Exocardio";

describe("ExoCardio", () => {
  test("Should render the component", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Exocardio />
        </Context.Provider>
      </BrowserRouter>
    );
    const element = screen.getByTestId("exocardio");
    expect(element).toBeInTheDocument();
  });

  test("Should render NoData component if the context is null", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={[]}>
          <Exocardio />
        </Context.Provider>
      </BrowserRouter>
    );
    
    const nodataComponent = screen.getByTestId("no-data")
    expect(nodataComponent).toBeTruthy()
  });
});
