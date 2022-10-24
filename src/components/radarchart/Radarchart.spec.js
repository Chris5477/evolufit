import { fireEvent, render, screen } from "@testing-library/react";
import { ToastContainer } from "react-toastify";
import SpiderChart from "./Radarchart";

describe("Radarchart Component", () => {
  test("Should render the graphic", () => {
    render(<SpiderChart />);

    const radar = screen.getByTestId("radarchart");
    expect(radar).toBeInTheDocument();
  });

  test("Should return a feedback", async () => {
    render(
      <>
        <ToastContainer />
        <SpiderChart />
      </>
    );

    const radar = document.querySelector(".radar button");
    fireEvent.click(radar);
    const toast = await screen.findByText("Fonctionnalité bientôt disponible")
    expect(toast).toBeInTheDocument();
  });
});
