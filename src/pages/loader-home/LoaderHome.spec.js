import { render, screen } from "@testing-library/react"
import LoaderHome from "./LoaderHome"

describe("LoaderHome page",() => {
    test("Should redner the page", () => {
        render(<LoaderHome />)

        const loader = screen.getByTestId("loader-home")

        expect(loader).toBeInTheDocument()
    })
})