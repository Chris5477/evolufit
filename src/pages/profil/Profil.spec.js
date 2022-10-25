import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Context from "../../components/Context.js";
import { mockContext } from "../../mock/mockContext.js";
import { users } from "../../mock/users.js";
import Profil from "./Profil";

describe("Profil Page", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <Context.Provider value={mockContext}>
          <Profil />
        </Context.Provider>
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
