import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Context from "../../components/Context";
import { disconnect } from "../../components/Topbar/variables";
import { mockContext } from "../../mock/mockContext";
import User from "./User";

describe("User page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <User setCtx={() => null} />
        </Context.Provider>
      </BrowserRouter>
    );
  });

  test("Should render the training page", () => {
    const userSettings = screen.getByTestId("settings-user");
    expect(userSettings).toBeInTheDocument();
  });

  test("Should ask a confirmation to delete the account", () => {
    jest.spyOn(global, "confirm");
    const deleteBtn = document.querySelector("button") as HTMLButtonElement;
    fireEvent.click(deleteBtn);

    expect(confirm).toHaveBeenCalledTimes(1);
    expect(confirm).toHaveBeenCalledWith("Êtes-vous sur de vouloir supprimer votre compte ?");
  });

  test("Should delete the account of user", () => {
    jest.spyOn(global, "confirm");
    const deleteBtn = document.querySelector("button") as HTMLButtonElement;
    const result = fireEvent.click(deleteBtn);

    expect(localStorage.getItem("data")).toBeNull();
  });

  test("Should change the picture", () => {
    const mockFile = [new File(["test"], "test.jpg", { type: "img/jpg" })];

    const fileInput = document.getElementById("picture") as HTMLInputElement;

    fireEvent.change(fileInput, { target: { files: mockFile } });

    expect(fileInput.files![0].name).toBe("test.jpg");
  });
});
