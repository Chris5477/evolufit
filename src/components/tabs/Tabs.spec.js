import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Tabs from "./Tabs";

describe("Tabs componant", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <Tabs />
      </BrowserRouter>
    )
  );
  test("Should render the componant", () => {
    const tabs = screen.getByTestId("tabs");

    expect(tabs).toBeInTheDocument();
  });

  test("Should attribute the active-tab class if user click on a tab", () => {
    const [tab1, tab2, tab3] = [...document.querySelectorAll("li")];

    fireEvent.click(tab1);
    expect(tab1).toHaveClass(" tab flex-center active-tab");
    expect(tab2).toHaveClass(" tab flex-center false");
    expect(tab3).toHaveClass(" tab flex-center false");
    fireEvent.click(tab2);
    expect(tab1).toHaveClass(" tab flex-center false");
    expect(tab2).toHaveClass(" tab flex-center active-tab");
    expect(tab3).toHaveClass(" tab flex-center false");
    fireEvent.click(tab3);
    expect(tab1).toHaveClass(" tab flex-center false");
    expect(tab2).toHaveClass(" tab flex-center false");
    expect(tab3).toHaveClass(" tab flex-center active-tab");
  });
});
