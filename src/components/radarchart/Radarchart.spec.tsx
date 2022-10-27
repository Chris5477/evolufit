import { fireEvent, render, screen } from "@testing-library/react";
import { ToastContainer } from "react-toastify";
import SpiderChart from "./Radarchart";

describe("Radarchart Component", () => {
  const mockData = [
    {
      subject: "Développé couché",
      performance: 65,
      fullMark: 120,
    },
    {
      subject: "Butterfly",
      performance: 100,
      fullMark: 120,
    },
  ];

  test("Should render the graphic", () => {
    render(<SpiderChart title='title' data={mockData} />);

    const radar = screen.getByTestId("radarchart");
    expect(radar).toBeInTheDocument();
  });

  test("Should return a feedback", async () => {
    render(
      <>
        <ToastContainer />
        <SpiderChart title='title' data={mockData} />
      </>
    );

    const radar = document.querySelector(".radar button")!;
    fireEvent.click(radar);
    const toast = await screen.findByText("Fonctionnalité bientôt disponible");
    expect(toast).toBeInTheDocument();
  });
});
