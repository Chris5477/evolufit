import { render, screen } from "@testing-library/react"
import Progress from "./Progress"

describe("Progress Componant", () => {
    test("Should render the componant", () => {
        render(<Progress />)

        const componant = screen.getByTestId("progress")
        expect(componant).toBeInTheDocument() 
    })
})