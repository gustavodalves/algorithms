export function knapsack(capacity: number, weights: number[], values: number[]): number {
    const n = weights.length;
    const table: number[][] = [];

    for (let i = 0; i <= n; i++) {
        table[i] = new Array(capacity + 1).fill(0);
    }

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                table[i][w] = Math.max(values[i - 1] + table[i - 1][w - weights[i - 1]], table[i - 1][w]);
            } else {
                table[i][w] = table[i - 1][w];
            }
        }
    }

    return table[n][capacity];
}
