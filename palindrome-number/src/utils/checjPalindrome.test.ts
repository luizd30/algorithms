import { describe, expect, it } from "vitest";
import { isPalindrome1, isPalindrome2 } from "./checkPalindrome";

describe("isPalindrome2", () => {
  it("Should return true if it is palindrome.", () => {
    const value = 121;
    const result = isPalindrome2(value);
    expect(result).toEqual(true);
  });

  it("Should return false if the value is not a palindrome.", () => {
    const value = 123;
    const result = isPalindrome2(value);
    expect(result).toEqual(false);
  });

  it("Should return false if the value ends in 0.", () => {
    const value = 20;
    const result = isPalindrome2(value);
    expect(result).toEqual(false);
  });

  it("Should return false if the value is negative.", () => {
    const value = -121;
    const result = isPalindrome2(value);
    expect(result).toEqual(false);
  });
});

describe("isPalindrome1", () => {
    it("Should return true if it is palindrome.", () => {
      const value = 121;
      const result = isPalindrome1(value);
      expect(result).toEqual(true);
    });
  
    it("Should return false if the value is not a palindrome.", () => {
      const value = 123;
      const result = isPalindrome1(value);
      expect(result).toEqual(false);
    });
  
    it("Should return false if the value ends in 0.", () => {
      const value = 20;
      const result = isPalindrome1(value);
      expect(result).toEqual(false);
    });
  
    it("Should return false if the value is negative.", () => {
      const value = -121;
      const result = isPalindrome1(value);
      expect(result).toEqual(false);
    });
  });
