import { render, screen } from "@testing-library/react"
import Article from "./Article"

describe("Slide Component", () => {

    beforeEach(() => render(<Article />))

    test("Should render The componant", () => {
        const slide = screen.getByTestId("slide")

        expect(slide).toBeInTheDocument()
    })
})