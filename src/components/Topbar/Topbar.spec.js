import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes } from "react-router-dom";
import { mockContext } from "../../mock/mockContext";
import Context from "../Context";
import Topbar from "./TopBar";

describe("Topbar", () => {
  test("Should render the componant", () => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Topbar />
        </Context.Provider>
      </BrowserRouter>
    );

    const div = screen.getByTestId("topbar");
    expect(div).toBeInTheDocument();
  });
});
