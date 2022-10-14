import { render, screen } from "@testing-library/react";
import Dataline from "./Dataline";

describe("Dataline Component", () => {

    test("Should render the componant", () => {
        render(<Dataline />)

        const graphic = screen.getByTestId("dataline")
        expect(graphic).toBeInTheDocument()
    })
});

