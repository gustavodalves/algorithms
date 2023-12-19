import { knackspackBruteForce } from "./brute";
import { knapsack } from "./dynamic";

const capacity = 10;
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];

const expected = 13

describe("knackspack", () => {
    it('should be able resolve algorithm in dynamic programmig solution', () => {
        const result = knapsack(capacity, weights, values)
        expect(result).toBe(expected);
    });

    it('should be able resolve algorithm in force brute solution', () => {
        const result = knackspackBruteForce(capacity, weights, values)
        expect(result).toBe(expected);
    });
})
