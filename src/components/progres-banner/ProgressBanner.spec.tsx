import { fireEvent, render, screen } from "@testing-library/react";
import ProgressBanner from "./ProgressBanner";
import { getEvolutionWeight, sumData } from "./variables.js";

describe("Progress Componant", () => {
  test("Should render the componant", () => {
    render(<ProgressBanner label='poids' unity='kg' data={[{ weight: 59 }, { weight: 77 }]} initialWeight={98} />);

    const componant = screen.getByTestId("progress");
    expect(componant).toBeInTheDocument();
  });
});

describe("getEvolutionWeight", () => {
  let initialWeight = 85;

  test("Should return the sum between initial weight and actual weight", () => {
    const result = getEvolutionWeight(88, initialWeight);
    expect(result).toBe(`+ 3 kg 🔺`);
  });
  test("Should return the difference between initial weight and actual weight", () => {
    const result = getEvolutionWeight(82, initialWeight);
    expect(result).toBe(`-3 kg 🔻`);
  });
  test("Should return the actual weight if initial weight and weight are equal", () => {
    const result = getEvolutionWeight(85, initialWeight);
    expect(result).toBe(85);
  });
});

describe("sumData", () => {
  const data = [
    {
      distance: 144.2,
      calories: 100,
    },
    {
      distance: 202.7,
      calories: 110,
    },
  ];

  test("Should return the sum about the data that interests us", () => {
    const totalDistance = sumData(data, "distance");
    const totalCalories = sumData(data, "calories");
    expect(Number(totalDistance)).toBe(3.47);
    expect(totalCalories).toBe(210);
  });

  describe("Modal componant", () => {
    test("Should open and close the modal on the click of user", () => {
      render(<ProgressBanner label='poids' unity='kg' data={[{ weight: 59 }, { weight: 77 }]} initialWeight={98} />);

      const BtnOpenModal = document.querySelector(".open-btn")!;
      fireEvent.click(BtnOpenModal);

      const modal = screen.getByTestId("modal");
      expect(modal).toBeInTheDocument();

      const closeBtn = document.querySelector(".close-modal")!;
      fireEvent.click(closeBtn);
      expect(modal).not.toBeInTheDocument();
    });
  });
});
