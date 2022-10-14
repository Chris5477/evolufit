import { fireEvent, render, screen } from "@testing-library/react";
import Progress from "../progres/Progress";
import Modal from "./Modal";

describe("Modal componant", () => {
  beforeEach(() => {
    render(
      <>
        <Progress label='poids' unity='kg' initialWeight={85} data={[]} />
        <Modal modal={true} />
      </>
    );
  });

  test("Should render the modal on the click of user", () => {
    const modal = screen.getByTestId("modal");
    const btnModal = document.querySelector(".progress img");

    fireEvent.click(btnModal);

    expect(modal).toBeInTheDocument();
  });
});
