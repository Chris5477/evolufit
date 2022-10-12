import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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
});
