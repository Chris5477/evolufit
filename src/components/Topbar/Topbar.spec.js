import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes } from "react-router-dom";
import Topbar from "./TopBar";

describe("Topbar", () => {
  test("Should render the componant", () => {
    render(
      <BrowserRouter>
          <Topbar />
      </BrowserRouter>
    );

    const div = screen.getByTestId("topbar");

    expect(div).toBeInTheDocument();
  });
});
