import { fibonacci, fibonacciDynamic } from "./fibonacci"

describe("fibonacci", () => {
    it("should be able calculate fibonacci", () => {
        const value = fibonacci(10)

        expect(value).toBe(55)
    })

    it("should be able calculate fibonacci", () => {
        const value = fibonacciDynamic(10)

        expect(value).toBe(55)
    })
})
