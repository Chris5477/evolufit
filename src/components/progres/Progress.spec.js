import { render, screen } from "@testing-library/react";
import Progress, { getEvolutionWeight, sumData } from "./Progress";

describe("Progress Componant", () => {
  test("Should render the componant", () => {
    render(<Progress label="poids" unity="kg" data={[]} initialWeight={98} />);

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
      distance: 12,
      calories: 100,
    },
    {
      distance: 14,
      calories: 110,
    },
  ];


  test("Should return the sum about the data that interests us", () => {

    const totalDistance = sumData(data, "distance");
    const totalCalories = sumData(data, "calories");
    expect(totalDistance).toBe(26);
    expect(totalCalories).toBe(210);
  });
});
