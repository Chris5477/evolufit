import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Login Page", () => {
  let form = null;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    form = screen.getByTestId("loginpage");
  });

  test("Should render the component", () => {
    expect(form).toBeInTheDocument();
  });

  describe("test login function", () => {
    test("Should display an error message if fields aren't filled or wrong input", async () => {
      fireEvent.submit(form);

      const errorTxt = await screen.findAllByText("Veuillez remplir tous les champs");
      expect(errorTxt).toBeTruthy();
    });

    test("Should display a success message then redirect user on his profil page", async () => {
      const [pseudo, password] = [...document.querySelectorAll("input")];
      fireEvent.change(pseudo, { target: { value: "admin" } });
      fireEvent.change(password, { target: { value: "12345" } });
      fireEvent.submit(form);

      const successTxt = await screen.findAllByText("Connexion en cours...");
      expect(successTxt).toBeTruthy();
    });
    test("Should display a error message about wrong ids", async () => {
      const [pseudo, password] = [...document.querySelectorAll("input")];
      fireEvent.change(pseudo, { target: { value: "pseudo" } });
      fireEvent.change(password, { target: { value: "password" } });
      fireEvent.submit(form);

      const successTxt = await screen.findAllByText("Identifiants incorrects");
      expect(successTxt).toBeTruthy();
    });
  });
});
