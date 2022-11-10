import { render, screen } from "@testing-library/react";
import App from "./App";
import Context from "./components/Context";
import { mockContext } from "./mock/mockContext";

describe("App", () => {
  beforeAll(() => localStorage.setItem("data", '{"data" : "ok"}'));
  afterAll(() => localStorage.clear());

  test("Should render App component", () => {
    render(
      <Context.Provider value={mockContext}>
        <App />
      </Context.Provider>
    );

    const app = screen.getByTestId("app");
    expect(app).toBeInTheDocument();
  });
});

describe("localStorage", () => {
  test("Should not display the tabs with nodata in localstorage", () => {
    render(
      <Context.Provider value={mockContext}>
        <App />
      </Context.Provider>
    );

    const data = localStorage.getItem("token");

    expect(data).toBeNull();
    expect(document.querySelector("nav")).toBeNull();
  });
});
