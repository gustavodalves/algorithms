import { fibonacci, fibonacciDynamic } from "./fibonacci"

describe("fibonacci", () => {
    it("should be able calculate fibonacci", () => {
        const value = fibonacci(10)

        expect(value).toBe(55)
    })

    it("should be able calculate fibonacci input value equal 1", () => {
        const value = fibonacci(1)

        expect(value).toBe(1)
    })

    it("should be able calculate fibonacci", () => {
        const value = fibonacciDynamic(10)

        expect(value).toBe(55)
    })

    it("should be able calculate fibonacci dynamic input value equal 1", () => {
        const value = fibonacciDynamic(1)

        expect(value).toBe(1)
    })
})
