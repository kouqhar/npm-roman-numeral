const { convertNumberToRoman } = require("../app");
const number = 2021;

describe("Roman Numeral Conversion", () => {
  it("should return a valid Roman Numeral", () => {
    const romanNumeral = convertNumberToRoman(number);
    const result = "MMXXI";
    expect(romanNumeral).toBe(result);
  });
  it("should return a false message", () => {
    const romanNumeral = convertNumberToRoman(2025);
    const result = "MMXXI";
    expect(romanNumeral).not.toBe(result);
  });
  it("should return the length", () => {
    const romanNumeral = convertNumberToRoman(number);
    const result = "MMXXI";
    expect(romanNumeral.length).toEqual(result.length);
  });
  it("should not be null", () => {
    const romanNumeral = convertNumberToRoman(number);
    expect(romanNumeral).not.toBeNull();
  });
  it("should return strings", () => {
    const romanNumeral = convertNumberToRoman(number);
    const resultType = typeof romanNumeral;
    expect(resultType).toBe("string");
  });
});
