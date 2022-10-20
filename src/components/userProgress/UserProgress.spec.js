import { render, screen } from "@testing-library/react";
import { mockContext } from "../../mock/mockContext";
import Context from "../Context";
import UserProgress from "./UserProgress";

describe("UserProgress", () => {
  test("Should render the componant", () => {
    render(
      <Context.Provider value={mockContext}>
        <UserProgress />
      </Context.Provider>
    );

    const container = screen.getByTestId("user-progres");
    expect(container).toBeInTheDocument();
  });
});
