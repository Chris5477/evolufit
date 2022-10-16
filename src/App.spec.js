import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeAll(() => localStorage.setItem("token", "ok"));
  afterAll(() => localStorage.clear());

  test("Should render App component", () => {
    render(<App />);

    const app = screen.getByTestId("app");
    expect(app).toBeInTheDocument();

    const nav = document.querySelector("nav");
    expect(nav).toBeInTheDocument();
  });
});

describe("localStorage", () => {
  test("Should not display the tabs with nodata in localstorage", () => {
    render(<App />);

    const nav = document.querySelector("nav");
    expect(nav).toBeNull();
  });
});
