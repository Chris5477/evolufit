import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Login Page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  test("Should render the component", () => {
    const loginPage = screen.getByTestId("loginpage");
    expect(loginPage).toBeInTheDocument();
  });
});
