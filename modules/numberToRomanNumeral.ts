import { roman, numbers } from "./algorithm/algorithm";

const parseInternationalNumber = (num: number | boolean | string): number | null => {
  if (typeof num === "boolean") return null;

  if (typeof num === "number") {
    return Number.isInteger(num) ? num : null;
  }

  if (typeof num !== "string") return null;

  const trimmedValue = num.trim();
  if (!trimmedValue) return null;

  const normalizedValue = trimmedValue.replace(/\s/g, "");

  // 1,234,567 (international) / 12,34,567 (Indian)
  const commaGroupedPattern = /^(\d{1,3})(,\d{2,3})+$/;
  const europeanPattern = /^\d{1,3}(\.\d{3})+(,\d+)?$/;

  let digitsOnly = normalizedValue;

  if (commaGroupedPattern.test(normalizedValue)) {
    digitsOnly = normalizedValue.replace(/,/g, "");
  } else if (europeanPattern.test(normalizedValue)) {
    digitsOnly = normalizedValue.replace(/\./g, "").split(",")[0];
  } else if (/^\d+$/.test(normalizedValue)) {
    digitsOnly = normalizedValue;
  } else {
    return null;
  }

  if (!/^\d+$/.test(digitsOnly)) return null;

  const parsed = Number(digitsOnly);
  if (!Number.isSafeInteger(parsed)) return null;

  return parsed;
};

const convertNumberToRoman = (num: number | boolean | string): string => {
  let romanNumeral = "";

  if (typeof num === "boolean") return "Cannot use Boolean values!!!";

  const parsedNumber = parseInternationalNumber(num);
  if (parsedNumber === null) return "You must provide only valid numbers!!!";

  if (parsedNumber > 0) {
    let remainingNum = parsedNumber;
    while (remainingNum !== 0) {
      const index = numbers.findIndex((number: number) => remainingNum >= number);
      romanNumeral += roman[index];
      remainingNum -= numbers[index];
    }
  } else {
    romanNumeral = "Cannot convert Zero or negative numbers!!!";
  }

  return romanNumeral;
};

export { convertNumberToRoman };
