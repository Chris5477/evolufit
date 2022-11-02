import { fireEvent, render, screen } from "@testing-library/react";
import { ToastContainer } from "react-toastify";
import { mockContext } from "../../mock/mockContext";
import Context from "../Context";
import UserProgress from "./UserProgress";

describe("UserProgress", () => {
  const mockData = [{ weight: 50, date: "29 octobre 2020" }];

  test("Should render the componant", () => {
    render(
      <Context.Provider value={mockContext}>
        <UserProgress title='title' data={mockData} />
      </Context.Provider>
    );

    const container = screen.getByTestId("user-progres");
    expect(container).toBeInTheDocument();
  });
});
