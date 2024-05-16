import { describe, expect, it } from "vitest";
import { bruteForce, hashmap } from "./twoSum";

describe("twoSum - bruteForce", () => {
  it("Should return the numbers that sum to the target.", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = bruteForce(nums, target);
    expect(result).toEqual([2, 7]);
  });

  it("Must deal with negative numbers.", () => {
    const nums = [-1, 5, 10, -3];
    const target = 7;
    const result = bruteForce(nums, target);
    expect(result).toEqual([10, -3]);
  });

  it("Should return undefined if no pair is found.", () => {
    const nums = [1, 2, 3, 4];
    const target = 10;
    const result = bruteForce(nums, target);
    expect(result).toEqual([]);
  });
});

describe("twoSum - hashMap", () => {
  it("Should return the numbers that sum to the target.", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = hashmap(nums, target);
    expect(result).toEqual([2, 7]);
  });

  it("Must deal with negative numbers.", () => {
    const nums = [-1, 5, 10, -3];
    const target = 7;
    const result = hashmap(nums, target);
    expect(result).toEqual([10, -3]);
  });

  it("Should return undefined if no pair is found.", () => {
    const nums = [1, 2, 3, 4];
    const target = 10;
    const result = hashmap(nums, target);
    expect(result).toEqual([]);
  });
});
