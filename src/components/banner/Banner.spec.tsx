import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner", () => {
  test("Should render the banner compoannt", () => {
    render(<Banner picture={"test.png"} />);
    const banner = screen.getByTestId("banner");

    expect(banner).toBeInTheDocument();
  });
});
