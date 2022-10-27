import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Context from "../../components/Context";
import { mockContext } from "../../mock/mockContext";
import Login from "./Login";

describe("Login Page", () => {
  let form : HTMLFormElement;
  let btn : HTMLButtonElement;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ToastContainer />
        <Context.Provider value={mockContext}>
          <Login setCtx={() => mockContext} />
        </Context.Provider>
      </BrowserRouter>
    );
    form = screen.getByTestId("loginpage");
    btn = document.querySelector("input[type='submit']")!;
  });

  test("Should render the component", () => {
    expect(form).toBeInTheDocument();
  });

  test("Should return an error message if the totality of inputs are not filled", async () => {
    fireEvent.click(btn);
    const toast = await screen.findByText("Veuillez remplir tous les champs !");
    expect(toast).toBeInTheDocument();
  });

  test("Should return an error message if the id's of user doesn't exist", async () => {
    const [pseudo, password] = Array.from(document.querySelectorAll("input")) as HTMLInputElement[];
    fireEvent.change(pseudo, { target: { value: "pseudo" } });
    fireEvent.change(password, { target: { value: "password" } });
    fireEvent.click(btn);
    const toast = await screen.findByText("Identifiants incorrects");
    expect(toast).toBeInTheDocument();
  });
  test("Should return a success message if the user populates form with good id's", async () => {
    const [pseudo, password] = Array.from(document.querySelectorAll("input")) as HTMLInputElement[];
    fireEvent.change(pseudo, { target: { value: "admin" } });
    fireEvent.change(password, { target: { value: "12345" } });
    fireEvent.click(btn);
    const toast = await screen.findByText("Connexion en cours...");
    expect(toast).toBeInTheDocument();
  });
});
