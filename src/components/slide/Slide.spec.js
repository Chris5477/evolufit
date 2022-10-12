import { render, screen } from "@testing-library/react"
import Slide from "./Slide"

describe("Slide Component", () => {

    beforeEach(() => render(<Slide />))

    test("Should render The componant", () => {
        const slide = screen.getByTestId("slide")

        expect(slide).toBeInTheDocument()
    })
})