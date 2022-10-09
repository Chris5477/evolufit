import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes } from "react-router-dom";
import Homepage from "./Homepage";

describe("Homepage", () => {
  test("Should return the component", () => {
    render(
      <BrowserRouter>
          <Homepage />;
      </BrowserRouter>
    );

    const div = screen.getByTestId("homepage");

    expect(div).toBeInTheDocument();
  });
});
