export function binarySearch(arr: number[], target: number): number | null {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return mid;
      }
  
      if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  
    return null;
  }