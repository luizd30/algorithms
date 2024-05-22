import { describe, expect, it } from "vitest";
import { removeDuplicates } from "./removeDuplicates";

describe("Remove Duplicates from Sorted Array", () => {
  it("Should remove duplicates from sorted array in place.", () => {
    const nums = [1, 1, 2, 2, 3, 4, 4, 5];
    const newLength = removeDuplicates(nums);
    expect(newLength).toBe(5);
    expect(nums.slice(0, newLength)).toEqual([1, 2, 3, 4, 5]);
  });

  it("Should handle empty array.", () => {
    const nums: number[] = [];
    const newLength = removeDuplicates(nums);
    expect(newLength).toBe(0);
    expect(nums).toEqual([]);
  });

  it("Should handle array with no duplicates.", () => {
    const nums = [1, 2, 3, 4, 5];
    const newLength = removeDuplicates(nums);
    expect(newLength).toBe(5);
    expect(nums).toEqual([1, 2, 3, 4, 5]);
  });

  it("Should handle single-element array.", () => {
    const nums = [1];
    const newLength = removeDuplicates(nums);
    expect(newLength).toBe(1);
    expect(nums).toEqual([1]);
  });
});
