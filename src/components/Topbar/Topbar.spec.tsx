import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockContext } from "../../mock/mockContext";
import Context from "../Context";
import Topbar from "./TopBar";

describe("Topbar", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Topbar setCtx={() => null} />
        </Context.Provider>
      </BrowserRouter>
    );

    localStorage.setItem("data", "ok");
  });

  afterAll(() => localStorage.clear());

  test("Should render the componant", () => {
    const div = screen.getByTestId("topbar");
    expect(div).toBeInTheDocument();
  });

  test("Should open or close modal on the click of button", () => {
    const openTimer = document.querySelector(".timer-picture")!;

    fireEvent.click(openTimer);
    const timer = screen.getByTestId("timer");
    expect(timer).toBeInTheDocument();

    const closeModal = document.querySelector(".close-modal")!;
    fireEvent.click(closeModal);
    expect(timer).not.toBeInTheDocument();
  });
  test("Should remove datas in localStorage", () => {
    const disconnetBtn = document.querySelector(".timer img")!;
    fireEvent.click(disconnetBtn);
    const data = localStorage.getItem("data");

    expect(data).toBeNull();
  });
});
