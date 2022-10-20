import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes } from "react-router-dom";
import Context from "../../components/Context";
import { mockContext } from "../../mock/mockContext";
import Homepage from "./Homepage";

describe("Homepage", () => {
  test("Should return the component", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Homepage />;
        </Context.Provider>
      </BrowserRouter>
    );

    const div = screen.getByTestId("homepage");

    expect(div).toBeInTheDocument();
  });
});
