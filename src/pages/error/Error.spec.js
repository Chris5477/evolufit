import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Error from "./Error";

describe("Error page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );
  });

  test("Should render an error page", () => {
    const error = screen.getByTestId("error-page");
    expect(error).toBeInTheDocument();
  });

  test("Should display an apology message to user", (done) => {
    const serverMessage = document.querySelector(".message-serveur");
    expect(serverMessage).not.toBeInTheDocument();
  });
});
