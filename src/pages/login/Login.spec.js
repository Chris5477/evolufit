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

  describe("test login function", () => {
    const mockData = {
      pseudo: "",
      password: "",
    };

    test("Should display an error message if fields aren't filled or wrong input", () => {
      console.log(document.body.innerHTML)
    });
  });
});
