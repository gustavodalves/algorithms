export function fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

export function fibonacciDynamic(n: number): number {
    if (n <= 1) {
      return n;
    }
  
    const fib: number[] = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib[n];
}
