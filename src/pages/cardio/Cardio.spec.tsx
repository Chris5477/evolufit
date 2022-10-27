import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Context from "../../components/Context";
import { mockContext } from "../../mock/mockContext";
import Cardio from "./Cardio";

describe("Cardio page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Cardio />
        </Context.Provider>
      </BrowserRouter>
    );
  });

  test("Should render the cardio page", () => {
    const cardio = screen.getByTestId("cardio-page");

    expect(cardio).toBeInTheDocument();
  });
});
