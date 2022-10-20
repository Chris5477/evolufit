import { fireEvent, render, screen } from "@testing-library/react";
import Timer from "./Timer";

describe("Tabs componant", () => {
  beforeEach(() => render(<Timer />));

  test("Should display a timer", () => {
    const time = screen.getByText(30);
    expect(time).toBeTruthy();
  });

  test("Should incremente or decremente the timer", async () => {
    const btnIncremente = screen.getByText("+");
    const btnDecremente = screen.getByText("-");

    fireEvent.click(btnIncremente);

    let duration = await screen.findByText("45");
    expect(duration).toBeTruthy();

    fireEvent.click(btnDecremente);
    fireEvent.click(btnDecremente);

    duration = await screen.findByText("15");
    expect(duration).toBeTruthy();
  });
});
