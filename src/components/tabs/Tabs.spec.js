import { render, screen } from "@testing-library/react"
import Tabs from "./Tabs"

describe("Tabs componant", () => {

    beforeEach(() => render(<Tabs />))
    test("Should render the componant", () => {

        const tabs = screen.getByTestId("tabs")

        expect(tabs).toBeInTheDocument()
    })
})