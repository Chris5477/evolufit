import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App", () => {
    test("Should render App component", () => {
        render(<App />)

        const app = screen.getByTestId("app")

        expect(app).toBeInTheDocument()
    })
})