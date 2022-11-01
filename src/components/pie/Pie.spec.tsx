import { render, screen } from "@testing-library/react";
import { mockContext } from "../../mock/mockContext";
import Context from "../Context";
import NoData from "../nodata/NoData";
import Piechart from "./PieGraph";

describe("PieChart component", () => {
  test("Should render the pie chart", () => {
    render(
      <Context.Provider value={mockContext}>
        <Piechart title='Hello world' info='Des informations' />
      </Context.Provider>
    );
    const pie = screen.getByTestId("pie");
    expect(pie).toBeInTheDocument();

    const text = screen.getByText("Hello world");
    const info = screen.getByText("Des informations");

    expect(text).toBeTruthy();
    expect(info).toBeTruthy();
  });

  test("Should render NoData component", () => {
    render(
      <Context.Provider value={[]}>
        <Piechart title='Hello world' info='Des informations' />
      </Context.Provider>
    );

    const noDataComponent = screen.getByTestId("no-data")
    expect(noDataComponent).toBeInTheDocument()
  })
});
