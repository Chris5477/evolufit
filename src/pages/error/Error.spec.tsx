import { findByText, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Context from "../../components/Context";
import { mockContext } from "../../mock/mockContext";
import Error from "./Error";

const wait = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(null);
    }, 2600)
  );

describe("Error page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Error />
        </Context.Provider>
      </BrowserRouter>
    );
  });

  test("Should render an error page", async () => {
    const error = screen.getByTestId("error-page");
    expect(error).toBeInTheDocument();

    await wait();
    const message = await screen.findByText("Désolé. Suivez moi!");
    expect(message).toBeTruthy();
  });
});
