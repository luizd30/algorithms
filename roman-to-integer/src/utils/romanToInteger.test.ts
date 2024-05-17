import { describe, expect, it } from "vitest";
import { romanToInteger } from "./romanToInteger";

describe("romanToInteger", () => {
  it("Must return an integer based on the Roman numeral.", () => {
    const roman = "III";
    const result = romanToInteger(roman);
    expect(result).toEqual(3);
  });
});
