export function linearSearch(array: number[], target: number): number | null {
    for (let i = 0; i < array.length; i++) {
    const currentItem = array[i]

      if (currentItem === target) {
        return i;
      }
    }

    return null;
}