import { fireEvent, render, screen } from "@testing-library/react";
import Timer from "./Timer";

describe("Tabs componant", () => {
  beforeEach(() => render(<Timer setModal={() => false} />));

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

  test("Should start and stop the timer", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    jest.spyOn(global, "clearTimeout");
    const startBtn = document.querySelector("button:nth-child(3)")!;
    const stopBtn = document.querySelector("button:nth-child(4)")!;

    fireEvent.click(startBtn);

    expect(setTimeout).toHaveBeenCalledTimes(1);

    fireEvent.click(stopBtn);

    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });
  test("Should display a reset button", async () => {
    const btnIncremente = screen.getByText("+");
    fireEvent.click(btnIncremente);
    const resetButton = document.querySelector("button:nth-child(4)")!;
    fireEvent.click(resetButton);
    let duration = await screen.findByText("30");
    expect(duration).toBeTruthy();
  });
});
