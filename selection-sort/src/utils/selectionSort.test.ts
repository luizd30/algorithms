import { describe, expect, it } from "vitest";
import { selectionSort } from "./selectionSort";

describe("selectionSort", () => {
  it("Should sort an array of positive numbers.", () => {
    const input = [64, 34, 25, 12, 22, 11, 90];
    const expected = [11, 12, 22, 25, 34, 64, 90];
    expect(selectionSort(input)).toEqual(expected);
  });

  it("Should handle an empty array.", () => {
    const input: number[] = [];
    const expected: number[] = [];
    expect(selectionSort(input)).toEqual(expected);
  });

  it("Should handle an array with one element.", () => {
    const input = [1];
    const expected = [1];
    expect(selectionSort(input)).toEqual(expected);
  });

  it("Should handle an array with already sorted elements.", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(selectionSort(input)).toEqual(expected);
  });

  it("Should handle an array with all elements the same.", () => {
    const input = [7, 7, 7, 7, 7];
    const expected = [7, 7, 7, 7, 7];
    expect(selectionSort(input)).toEqual(expected);
  });

  it("Should sort an array with negative numbers.", () => {
    const input = [3, -1, 4, 1, -5, 9, -2];
    const expected = [-5, -2, -1, 1, 3, 4, 9];
    expect(selectionSort(input)).toEqual(expected);
  });

  it("Should sort an array with mixed positive and negative numbers.", () => {
    const input = [3, -1, 4, 1, -5, 9, -2];
    const expected = [-5, -2, -1, 1, 3, 4, 9];
    expect(selectionSort(input)).toEqual(expected);
  });
});
