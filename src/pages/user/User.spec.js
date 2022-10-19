import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import User from "./User";

describe("User page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <User />
      </BrowserRouter>
    );
  });

  test("Should render the training page", () => {
    const userSettings = screen.getByTestId("settings-user");
    expect(userSettings).toBeInTheDocument();
  });
});
