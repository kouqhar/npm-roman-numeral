import { convertNumberToRoman } from "../app.ts";

const testNumber: number = 2021;

describe("Roman Numeral Conversion", () => {
  it("should return a valid Roman Numeral", () => {
    const romanNumeral: string = convertNumberToRoman(testNumber);
    const result: string = "MMXXI";
    expect(romanNumeral).toBe(result);
  });

  it("should return a false message", () => {
    const romanNumeral: string = convertNumberToRoman(2025);
    const result: string = "MMXXI";
    expect(romanNumeral).not.toBe(result);
  });

  it("should return the length", () => {
    const romanNumeral: string = convertNumberToRoman(testNumber);
    const result: string = "MMXXI";
    expect(romanNumeral.length).toEqual(result.length);
  });

  it("should not be null", () => {
    const romanNumeral: string = convertNumberToRoman(testNumber);
    expect(romanNumeral).not.toBeNull();
  });

  it("should return strings", () => {
    const romanNumeral: string = convertNumberToRoman(testNumber);
    const resultType: string = typeof romanNumeral;
    expect(resultType).toBe("string");
  });
});
