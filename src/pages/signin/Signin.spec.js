import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Context from "../../components/Context";
import { mockContext } from "../../mock/mockContext";
import Signin from "./Signin";

describe("Signin Page", () => {
  let inputFirstname,
    inputLastName,
    inputYear,
    inputEmail,
    inputSize,
    inputWeight,
    inputPseudo,
    inputPassword,
    submitBtn;
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Signin />
        </Context.Provider>
      </BrowserRouter>
    );

    inputFirstname = document.querySelector("input[name='firstName']");
    inputLastName = document.querySelector("input[name='lastName']");
    inputYear = document.querySelector("input[name='yearsOld']");
    inputEmail = document.querySelector("input[name='email']");
    inputSize = document.querySelector("input[name='size']");
    inputWeight = document.querySelector("input[name='weight']");
    inputPseudo = document.querySelector("input[name='pseudo']");
    inputPassword = document.querySelector("input[name='password']");
    submitBtn = document.querySelector("input[type='submit']");
  });

  test("Should render the component", () => {
    const signin = screen.getByTestId("signin");
    expect(signin).toBeInTheDocument();
  });

  describe("Testing validation form", () => {
    test("Should change value of radio input", () => {
      const man = document.getElementById("homme");
      const woman = document.getElementById("femme");

      expect(man.value).toBe("homme");
      fireEvent.click(woman);
      expect(woman.value).toBe("femme");
    });
  });
});
