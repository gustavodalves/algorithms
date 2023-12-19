export function knackspackBruteForce(capacity: number, weights: number[], values: number[]): number {
    function recursiveBruteforce(i: number, remainingCapacity: number): number {
        if (i === 0 || remainingCapacity === 0) {
            return 0;
        }

        if (weights[i - 1] > remainingCapacity) {
            return recursiveBruteforce(i - 1, remainingCapacity);
        } else {
            const includeItem = values[i - 1] + recursiveBruteforce(i - 1, remainingCapacity - weights[i - 1]);
            const excludeItem = recursiveBruteforce(i - 1, remainingCapacity);
            return Math.max(includeItem, excludeItem);
        }
    }

    return recursiveBruteforce(weights.length, capacity);
}