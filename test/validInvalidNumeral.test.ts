import { numeralValidation } from "../app";
import { NumeralValidationResult } from "../modules/types";

const testNumber: string = "MMX3X2cV8b";

describe("Roman Numeral Validation", () => {
    // Only valid if there are no invalid inputs and at least one valid numeral
    it("should return false if there are no invalid inputs and at least one valid numeral", () => {
        const validator: string | NumeralValidationResult = numeralValidation(testNumber);
        if (typeof validator !== 'string') {
            const result = validator.isStrictValid;
            expect(result).toBe(false);
        } else {
            fail("Expected validator to at most be strictly invalid");
        }
    });

    // Valid if there is at least one valid numeral
    it("should return true if there is at least one valid numeral", () => {
        const validator: string | NumeralValidationResult = numeralValidation(testNumber);
        if (typeof validator !== 'string') {
            const result = validator.isLooseValid;
            expect(result).toBe(true);
        } else {
            fail("Expected validator to be at least loosely valid");
        }
    });

    // Overall validity and if input can be processed
    it("should return true if input can be processed to a numeral", () => {
        const validator: string | NumeralValidationResult = numeralValidation(testNumber);
        if (typeof validator !== 'string') {
            const result = validator.isValid;
            expect(result).toBe(true);
        } else {
            fail("Expected validator to be valid");
        }
    });

    // Checks if the input is empty
    it("should return true if the input is empty", () => {
        const testString: string = "";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.isInputEmpty;
            expect(result).toBe(true);
        } else {
            expect(testString).toBe(false);
            fail("Expected validator to not be empty string");
        }
    });

    // Test to check or validate input is not a string
    it("should return false if the input is not a string", () => {
        const testString: any = 123;
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.isValid;
            expect(result).toBe(false);
        } else {
            expect(testString).toBe(true);
            fail("Expected validator to be of type string");
        }
    });

    // How many input characters were provided
    it("should return equal number of inputted characters", () => {
        const testString: string = "MMX3X2cV8b";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.inputCount;
            expect(result).toEqual(testString.length);
        } else {
            fail("Expected validator to be of equal length");
        }
    });

    // Invalid number of input characters were provided
    it("should return equal number of inputted characters", () => {
        const testString: string = "MMX3X2";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.inputCount;
            expect(result).not.toEqual(testString.length + 1);
        } else {
            fail("Expected validator to not be of equal length");
        }
    });

    // Checks if there are any invalid characters
    it("should return true if there are any invalid characters", () => {
        const testString: string = "MMX3X2cV8b";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.hasInvalidNumerals;
            expect(result).toBe(true);
        } else {
            fail("Expected validator to have invalid characters");
        }
    });

    // Checks if there are no invalid characters
    it("should return true if there are no invalid characters", () => {
        const testString: string = "MMX";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.hasInvalidNumerals;
            expect(result).toBe(false);
        } else {
            fail("Expected validator to not have invalid characters");
        }
    });

    // Checks if there are any digits
    it("should return true if there are any digits", () => {
        const testString: string = "MMX3X2cV8b";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.hasDigits;
            expect(result).toBe(true);
        } else {
            fail("Expected validator to have digits");
        }
    });

    // Checks if there are no digits
    it("should return true if there are no digits", () => {
        const testString: string = "MMXXcVb";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.hasDigits;
            expect(result).toBe(false);
        } else {
            fail("Expected validator to not have digits");
        }
    });

    // How many invalid characters were found in total
    it("should return number of invalid characters found in total", () => {
        const testString: string = "MMX3X2cV8b";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.invalidNumeralCount;
            expect(result).toEqual(1);
        } else {
            fail("Expected validator to count invalid characters");
        }
    });

    // How many invalid characters were found in total(if none)
    it("should return number, of invalid characters if none is found", () => {
        const testString: string = "MMX3X2cV8";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.invalidNumeralCount;
            expect(result).toEqual(0);
        } else {
            fail("Expected validator to count invalid characters(if none)");
        }
    });

    // How many digits were found in total
    it("should return number, of digits found in total", () => {
        const testString: string = "MMX3X2cV8b";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.digitsCount;
            expect(result).toEqual(3);
        } else {
            fail("Expected validator to be of equal digits length");
        }
    });

    // How many digits were found in total (not equal case)
    it("should return number, not equal case of digits found", () => {
        const testString: string = "MMX3X2";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.digitsCount;
            expect(result).not.toEqual(3);
        } else {
            fail("Expected validator to not be of equal digits length");
        }
    });

    // How many invalid inputs were found (string and digit) in total
    it("should return number, of invalid input(string and digit) found", () => {
        const testString: string = "MMX3X2cV8b";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.invalidInputsCount;
            expect(result).toEqual(4);
        } else {
            fail("Expected validator to be of equal input length");
        }
    });

    // How many invalid inputs were found in total (not equal case)
    it("should return number, not equal case of invalid input(string and digit) found", () => {
        const testString: string = "MMX3X2b";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.invalidInputsCount;
            expect(result).not.toEqual(2);
        } else {
            fail("Expected validator to not be of equal input length");
        }
    });

    // Lists of invalid digits
    it("should return array, of invalid digits", () => {
        const testString: string = "MMX3X2xcV8b";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.invalidDigits;
            expect(result?.length).toEqual(3);
        } else {
            fail("Expected validator to be of equal digit length");
        }
    });

    // Lists of invalid numeral strings
    it("should return array, of invalid numeral strings", () => {
        const testString: string = "MMX3X2xcV8b";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.invalidNumeralStrings;
            expect(result?.length).toEqual(1);
        } else {
            fail("Expected validator to be of equal invalid numeral length");
        }
    });

    // Lists of valid numeral values
    it("should return array, of valid numeral strings", () => {
        const testString: string = "MMX3X2xcV8b";
        const validator: string | NumeralValidationResult = numeralValidation(testString);
        if (typeof validator !== 'string') {
            const result = validator.validNumeralValues;
            expect(result?.length).toEqual(6);
        } else {
            fail("Expected validator to be of equal valid numeral length");
        }
    });

});
