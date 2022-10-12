import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { users } from "../../mock/users.js";
import Profil from "./Profil";

describe("Profil Page", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <Profil />
      </BrowserRouter>
    )
  );

  test("Should render the componant", () => {
    const profilpage = screen.getByTestId("profil-page");
    expect(profilpage).toBeInTheDocument();
  });

  test("Should display the name of user", () => {
    const { firstName } = users[0];
    const titleh2 = document.querySelector(".greet-user").textContent;

    expect(titleh2).toBe(`Bonjour ${firstName}`);
  });
});
