import { render, screen } from "@testing-library/react";
import UserProgress from "./UserProgress";

describe("UserProgress", () => {
  test("Should render the componant", () => {
    render(<UserProgress />);

    const container = screen.getByTestId("user-progres");
    expect(container).toBeInTheDocument();
  });
});
