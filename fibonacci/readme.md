# Fibonacci Algorithm

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. It is a classic mathematical sequence with various applications in computer science.

## Problem Statement

Given an integer `n`, determine the nth Fibonacci number in the sequence.

## Complexity Analysis

The Fibonacci algorithm exhibits different time complexities for its solutions:

- **Brute Force (Naive):**
  - Time Complexity: O(2^n)
  - The naive approach involves redundant calculations, resulting in exponential time complexity.

- **Dynamic Programming:**
  - Time Complexity: O(n)
  - The dynamic programming approach optimally builds a table, reducing the time complexity to a linear function of the input size.
