import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockContext } from "../../mock/mockContext";
import Context from "../Context";
import Exocardio from "./Exocardio";

describe("ExoCardio", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Exocardio />
        </Context.Provider>
      </BrowserRouter>
    )
  );

  test("Should render the component", () => {
    const element = screen.getByTestId("exocardio");
    expect(element).toBeInTheDocument();
  });
});
