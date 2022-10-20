import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes } from "react-router-dom";
import Context from "../../components/Context";
import Homepage from "./Homepage";

describe("Homepage", () => {
  test("Should return the component", () => {
    render(
      <BrowserRouter>
        <Context.Provider>
          <Homepage />;
        </Context.Provider>
      </BrowserRouter>
    );

    const div = screen.getByTestId("homepage");

    expect(div).toBeInTheDocument();
  });
});
