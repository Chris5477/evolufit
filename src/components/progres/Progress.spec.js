import { render, screen } from "@testing-library/react";
import Progress, { getEvolutionWeight } from "./Progress";

describe("Progress Componant", () => {
  test("Should render the componant", () => {
    render(<Progress />);

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
