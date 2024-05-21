import { describe, expect, it } from "vitest";
import { longestPrefix1, longestPrefix2 } from "./longestPrefix";

describe("longestPrefix1", () => {
  it("Must return the common prefix.", () => {
    const array = ["flower", "flow", "flight"];
    const result = longestPrefix1(array);
    expect(result).toEqual("fl");
  });

  it("Must return an empty string if it has no prefix in common.", () => {
    const array = ["dog", "racecar", "car"];
    const result = longestPrefix1(array);
    expect(result).toEqual("");
  });
});

describe("longestPrefix2", () => {
    it("Must return the common prefix.", () => {
      const array = ["flower", "flow", "flight"];
      const result = longestPrefix2(array);
      expect(result).toEqual("fl");
    });
  
    it("Must return an empty string if it has no prefix in common.", () => {
      const array = ["dog", "racecar", "car"];
      const result = longestPrefix2(array);
      expect(result).toEqual("");
    });
  });
