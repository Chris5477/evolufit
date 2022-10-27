import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Context from "../../components/Context";
import { mockContext } from "../../mock/mockContext";
import Signin from "./Signin";

describe("Signin Page", () => {
  let inputFirstname: HTMLInputElement;
  let inputLastName: HTMLInputElement;
  let inputYear: HTMLInputElement;
  let inputEmail: HTMLInputElement;
  let inputSize: HTMLInputElement;
  let inputWeight: HTMLInputElement;
  let inputPassword: HTMLInputElement;
  let submitBtn: HTMLInputElement;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <ToastContainer />
          <Signin />
        </Context.Provider>
      </BrowserRouter>
    );

    inputFirstname = document.querySelector("input[name='firstName']") as HTMLInputElement;
    inputLastName = document.querySelector("input[name='lastName']") as HTMLInputElement;
    inputYear = document.querySelector("input[name='yearsOld']") as HTMLInputElement;
    inputEmail = document.querySelector("input[name='email']") as HTMLInputElement;
    inputSize = document.querySelector("input[name='size']") as HTMLInputElement;
    inputWeight = document.querySelector("input[name='weight']") as HTMLInputElement;
    inputPassword = document.querySelector("input[name='password']") as HTMLInputElement;
    submitBtn = document.querySelector("input[type='submit']") as HTMLInputElement;
  });

  test("Should render the component", () => {
    const signin = screen.getByTestId("signin");
    expect(signin).toBeInTheDocument();
  });

  describe("Testing validation form", () => {
    test("Should change value of radio input", () => {
      const man = document.getElementById("homme") as HTMLInputElement;
      const woman = document.getElementById("femme") as HTMLInputElement;

      expect(man.value).toBe("homme");
      fireEvent.click(woman);
      expect(woman.value).toBe("femme");
    });
    test("Should return an error message if any field is empty", async () => {
      fireEvent.submit(submitBtn);

      const isValid = await screen.findByText("Veuillez remplir tous les champs !");
      expect(isValid).toBeInTheDocument();
    });
    test("Should return a success message if the form is valid", async () => {
      fireEvent.change(inputFirstname, { target: { value: "firstname" } });
      fireEvent.change(inputLastName, { target: { value: "lastname" } });
      fireEvent.change(inputYear, { target: { value: "2022-10-10" } });
      fireEvent.change(inputEmail, { target: { value: "test@gmail.com" } });
      fireEvent.change(inputSize, { target: { value: "170" } });
      fireEvent.change(inputWeight, { target: { value: "49" } });
      fireEvent.change(inputPassword, { target: { value: "password" } });

      fireEvent.submit(submitBtn);

      const toast = await screen.findByText("Compte crée avec succès !");
      expect(toast).toBeInTheDocument();

      expect(localStorage.getItem("data")).not.toBeNull();
    });
  });
});
