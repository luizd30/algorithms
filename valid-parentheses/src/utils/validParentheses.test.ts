import { describe, expect, it } from "vitest";
import { validParentheses } from "./validParentheses";

describe("validParenteses", () => {
  it("Should return true for valid parentheses.", () => {
    expect(validParentheses("()")).toBe(true);
    expect(validParentheses("()[]{}")).toBe(true);
    expect(validParentheses("{[]}")).toBe(true);
  });

  it("Should return false for invalid parentheses.", () => {
    expect(validParentheses("(]")).toBe(false);
    expect(validParentheses("([)]")).toBe(false);
    expect(validParentheses("{[}")).toBe(false);
  });

  it("Should return false for unbalanced parentheses.", () => {
    expect(validParentheses("(")).toBe(false);
    expect(validParentheses("]")).toBe(false);
    expect(validParentheses("{")).toBe(false);
  });
});
