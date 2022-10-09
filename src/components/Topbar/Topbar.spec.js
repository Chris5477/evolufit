import { render, screen } from "@testing-library/react";
import Topbar from "./TopBar";

describe("Topbar", () => {
  test("Should render the componant", () => {
    render(<Topbar />);

    const div = screen.getByTestId("topbar");

    expect(div).toBeInTheDocument();
  });
});
