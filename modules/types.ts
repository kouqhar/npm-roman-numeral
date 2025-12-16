export type NumeralValidationResult = {
  isStrictValid?: boolean;
  isLooseValid?: boolean;
  isValid?: boolean;
  isInputEmpty?: boolean;
  inputCount?: number;
  hasInvalidNumerals?: boolean;
  hasDigits?: boolean;
  invalidNumeralCount?: number;
  digitsCount?: number;
  invalidInputsCount?: number;
  invalidDigits?: string[],
  invalidNumeralStrings?: string[],
  validNumeralValues?: string[],
  message?: string;
};