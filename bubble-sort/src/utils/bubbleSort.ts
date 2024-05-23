/**
 * Sorts an array of numbers in ascending order using the Bubble Sort algorithm.
 *
 * This function repeatedly steps through the list, compares adjacent elements,
 * and swaps them if they are in the wrong order. The process is repeated until
 * the list is sorted. With each pass through the list, the next largest element
 * is placed in its correct position.
 *
 * @param number - The array of numbers to be sorted.
 * @returns The sorted array.
 *
 * Time Complexity: O(n^2)
 * - In the worst case, the array is in reverse order, requiring n-1 passes
 *   and each pass requires a comparison of each of the remaining n-i elements,
 *   resulting in O(n*(n-1)/2) = O(n^2).
 * - In the best case, when the array is already sorted, it still requires n-1
 *   passes with each pass involving n-i comparisons, resulting in O(n^2).
 */
export const bubbleSort = (number: number[]): number[] => {
  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length - 1 - i; j++) {
      if (number[j] > number[j + 1]) {
        // Swap elements
        [number[j], number[j + 1]] = [number[j + 1], number[j]];
      }
    }
  }

  return number;
};
