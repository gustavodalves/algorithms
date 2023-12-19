import { linearSearch } from "./linear-search";

describe('Linear Search', () => {
  it('should return the correct index when the element is found', () => {
    const array = [1, 5, 9, 12, 7, 3];
    const target = 7;

    const result = linearSearch(array, target);

    expect(result).toBe(4);
  });

  it('should return null when the element is not found', () => {
    const array = [1, 5, 9, 12, 7, 3];
    const target = 10;

    const result = linearSearch(array, target);

    expect(result).toBeNull();
  });
});