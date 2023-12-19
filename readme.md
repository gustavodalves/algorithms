# Classic Algorithms Repository

Welcome to the Classic Algorithms Repository! This repository aims to provide implementations of classical algorithms in computer science. Whether you are a beginner looking to understand fundamental algorithms or an experienced developer seeking reference implementations, you'll find a variety of algorithms implemented here.

## Purpose

The main purpose of this repository is to serve as a resource for learning and exploring classic algorithms. Each algorithm is implemented in TypeScript, providing a clear and readable reference for developers of all skill levels.

## Importance of Big O Notation

Understanding the efficiency of algorithms is crucial in computer science. One common way to express and compare the efficiency of algorithms is through Big O notation. Big O notation describes the upper bound on the growth rate of an algorithm's time complexity in relation to its input size.

### What is Big O Notation?

Big O notation is a mathematical notation used to analyze the efficiency and performance of algorithms. It provides a high-level abstraction of an algorithm's behavior, focusing on how the algorithm's runtime or space requirements grow relative to the input size.

For example:
- O(1): Constant time complexity. The algorithm's runtime is constant, regardless of the input size.
- O(log n): Logarithmic time complexity. The algorithm's runtime grows logarithmically as the input size increases.
- O(n): Linear time complexity. The runtime grows linearly with the input size.
- O(n^2): Quadratic time complexity. The runtime grows quadratically with the input size.
- O(2^n): Exponential time complexity. The runtime grows exponentially with the input size, typical of brute-force algorithms that consider all subsets.

By analyzing the Big O notation of an algorithm, developers can make informed decisions about algorithm selection based on the specific requirements and constraints of a given problem.

## Running Unit Tests

To test the algorithms, you can run the following command:

```bash
npm run dev