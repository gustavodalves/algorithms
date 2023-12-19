import { binarySearch } from './binary-search';

describe('Binary Search', () => {
  it('should return the index of the target element in a sorted array', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const targetValue = 7;

    const result = binarySearch(sortedArray, targetValue);

    expect(result).toBe(6);
  });

  it('should return null for a target element not present in the array', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const targetValue = 11;

    const result = binarySearch(sortedArray, targetValue);

    expect(result).toBeNull();
  });

  it('should return the index of the target element in an array with one element', () => {
    const sortedArray = [42];
    const targetValue = 42;

    const result = binarySearch(sortedArray, targetValue);

    expect(result).toBe(0);
  });
});