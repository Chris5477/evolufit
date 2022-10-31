import { render, screen } from "@testing-library/react";
import NoData from "./NoData";

describe("IMC component", () => {
  beforeEach(() => {
    render(<NoData />);
  });

  test("Should render the IMC component", () => {
    const noData = screen.getByTestId("no-data");
    expect(noData).toBeInTheDocument();
  });
});
