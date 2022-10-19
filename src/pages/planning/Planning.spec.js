import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Planning from "./Planning";

describe("Planning Page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Planning />
      </BrowserRouter>
    );
  });

  test("Should render the component", () => {
    const planning = screen.getByTestId("planning");
    expect(planning).toBeInTheDocument();
  });
});
