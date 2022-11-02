import { render } from "@testing-library/react";
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

  test("Should display the name of user", () => {
    const { firstName } = users;
    const titleh2 = (document.querySelector(".greet-user") as HTMLHeadingElement).textContent;
    expect(titleh2).toBe(`Bonjour ${firstName}`);
  });
});
