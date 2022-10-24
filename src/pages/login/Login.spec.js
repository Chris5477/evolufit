import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Context from "../../components/Context";
import { mockContext } from "../../mock/mockContext";
import Login from "./Login";

describe("Login Page", () => {
  let form = null;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Login setCtx={() => mockContext} />
        </Context.Provider>
      </BrowserRouter>
    );
    form = screen.getByTestId("loginpage");
  });

  test("Should render the component", () => {
    expect(form).toBeInTheDocument();
  });
});
