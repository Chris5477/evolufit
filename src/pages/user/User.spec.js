import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Context from "../../components/Context";
import User from "./User";

describe("User page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Context.Provider>
          <User />
        </Context.Provider>
      </BrowserRouter>
    );
  });

  test("Should render the training page", () => {
    const userSettings = screen.getByTestId("settings-user");
    expect(userSettings).toBeInTheDocument();
  });
});
