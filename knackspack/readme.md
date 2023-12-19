# Knapsack Problem

The knapsack problem is a classic optimization problem where the goal is to select a subset of items with maximum total value, subject to a constraint on the total weight. This problem is commonly known as the 0/1 Knapsack problem, where each item can either be included or excluded from the knapsack.

## Problem Statement

Given a knapsack with a maximum weight capacity `W` and `n` items, each having a weight `wi` and a value `vi`, determine the maximum value that can be obtained by filling the knapsack.

## Complexity Analysis

The knapsack problem exhibits different time complexities for its solutions:

- **Brute Force (Naive):**
  - Time Complexity: O(2^n)
  - The naive approach considers all possible subsets of items, resulting in exponential time complexity.

- **Dynamic Programming:**
  - Time Complexity: O(n * W)
  - The dynamic programming approach optimally builds a table, reducing the time complexity to a polynomial function of the input size.

## Implementations

### Brute Force

The brute force solution exhaustively explores all possible combinations of items to find the subset with the maximum value while adhering to the weight constraint. The `bruteforce` function is implemented recursively.


### Dinamic

The dynamic programming solution uses a table to store intermediate results and avoid redundant calculations. The knapsack function employs a bottom-up approach to iteratively build the optimal solution.