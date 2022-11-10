import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Context from "../../components/Context";
import { mockContext } from "../../mock/mockContext";
import Planning from "./Planning";

describe("Planning Page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ToastContainer />
        <Context.Provider value={mockContext}>
          <Planning />
        </Context.Provider>
      </BrowserRouter>
    );
  });

  test("Should render the component", () => {
    const planning = screen.getByTestId("planning");
    expect(planning).toBeInTheDocument();
  });
});
