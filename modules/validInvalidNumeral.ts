import { roman, numbers } from "./algorithm/algorithm";

// Types
import { NumeralValidationResult } from "./types";

/**
 * Validates a Roman numeral string.
 *  
 *
 * @return {Object} An object containing validation results.
 *
 * @param {Boolean} isInputEmpty - Checks if the input is empty
 * @param {Number} inputCount - How many input characters were provided
 * @param {Boolean} isStrictValid - Only valid if there are no invalid inputs and at least one valid numeral
 * @param {Boolean} isLooseValid - Valid if there is at least one valid numeral
 * @param {Boolean} hasInvalidNumerals - Checks if there are any invalid characters
 * @param {Boolean} hasDigits - Checks if there are any digits
 * @param {Boolean} isValid - Overall validity and if input can be processed
 * @param {Boolean} invalidNumeralCount - How many invalid characters were found in total
 * @param {Number} digitsCount - How many digits were found in total
 * @param {Number} invalidInputsCount - How many invalid inputs were found in total
 * @param {Array} invalidDigits - Lists of invalid digits
 * @param {Array} invalidNumeralStrings - Lists of invalid numeral strings
 * @param {Array} validNumeralValues - Lists of valid numeral values
 * @param {String} message - A message summarizing the validation results
 */

// Validates a Roman numeral string
const numeralValidation = (numeral: string): string | NumeralValidationResult => {
    const regExpIsValid = /(CM|CD|XC|XL|IX|IV|[A-Z])/gi;
    const regExpIsDigit = /\d/gi;
    const validNumerals: string[] = [];
    const invalidNumeralStrings: string[] = [];


    if (typeof numeral !== "string")
        return {
            isValid: false,
            message: "Input is not a string!",
        }

    if (numeral.trim() === "")
        return {
            isInputEmpty: true,
            message: "Input is empty!",
        }

    const expStrings = numeral.toUpperCase().match(regExpIsValid);
    const digits: string[] = numeral.match(regExpIsDigit) || [];

    if (!expStrings)
        return "Invalid Roman numeral format!";

    expStrings.forEach((elem) => {
        const romanIndex = roman.indexOf(elem);
        if (romanIndex !== -1) {
            validNumerals.push(roman[romanIndex]);
        } else {
            invalidNumeralStrings.push(elem);
        }
    });

    const invalidInputs = digits.concat(invalidNumeralStrings)

    return {
        // Only valid if there are no invalid inputs and at least one valid numeral
        isStrictValid: invalidInputs.length === 0 && validNumerals.length > 0,

        // Valid if there is at least one valid numeral
        isLooseValid: validNumerals.length > 0,

        // Overall validity and if input can be processed
        isValid: validNumerals.length > 1,

        // Checks if the input is empty
        isInputEmpty: numeral.length === 0,

        // How many input characters were provided
        inputCount: numeral.length,

        // Checks if there are any invalid characters
        hasInvalidNumerals: invalidNumeralStrings.length > 0,

        // Checks if there are any digits
        hasDigits: digits.length > 0,

        // How many invalid characters were found in total
        invalidNumeralCount: invalidNumeralStrings.length,

        // How many digits were found in total
        digitsCount: digits.length,

        // How many invalid inputs were found in total
        invalidInputsCount: invalidInputs.length,

        // Lists of invalid digits
        invalidDigits: digits,

        // Lists of invalid numeral strings
        invalidNumeralStrings,

        // Lists of valid numeral values
        validNumeralValues: validNumerals,

        // Create a message summarizing the validation results
        message: `Validation Results: You input value ${validNumerals.length > 0 ? "can" : "cannot"} be processed as a Roman Numeral.${invalidNumeralStrings.length > 0 ? ` Invalid characters found: ${invalidNumeralStrings.join(", ")}.` : ""}${digits.length > 0 ? ` Digits found: ${digits.join(", ")}.` : ""}`,
    }
};

export default numeralValidation;
