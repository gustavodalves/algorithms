# Linear Search Algorithm

Linear search, also known as sequential search, is a straightforward algorithm for finding a target value within a list. It involves checking each element in the list one by one until the target value is found or the entire list is searched.

## Algorithm

The linear search algorithm follows these steps:

1. Initialize an index to traverse the list.
2. While the index is not at the end of the list and the target value is not found:
   - Check if the element at the current index is equal to the target value.
   - If equal, the value was found; terminate the search.
   - If not equal, move to the next element by incrementing the index.
3. If the index reaches the end of the list and the target value is not found, consider that the value is not present in the list.

## Complexity Analysis

The time complexity of the linear search algorithm is O(n), where "n" is the size of the list.
