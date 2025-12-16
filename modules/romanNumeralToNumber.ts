import { roman, numbers } from "./algorithm/algorithm";

const convertRomanToNumber = (numeral: string | boolean): string | number => {
  const regExp = /(CM|CD|XC|XL|IX|IV|[A-Z])/gi;
  const validNumerals: number[] = [];
  const invalidNumbers: string[] = [];

  if (typeof numeral === "boolean")
    return "Cannot use Boolean values!";
  if (typeof numeral !== "string")
    return "You must provide only valid strings!";

  const expression = numeral.toUpperCase().match(regExp);
  if (!expression)
    return "Invalid Roman numeral format!";

  expression.forEach((elem) => {
    const romanIndex = roman.indexOf(elem);
    if (romanIndex !== -1) {
      validNumerals.push(numbers[romanIndex]);
    } else {
      invalidNumbers.push(elem);
    }
  });

  if (invalidNumbers.length > 0) {
    const pluralChar = invalidNumbers.length > 1 ? "s" : "";
    const pluralForm = invalidNumbers.length > 1 ? "these are" : "this is an";
    return `Provide a valid Roman character!\nCause ${pluralForm} invalid Roman numeral${pluralChar}: [ ${invalidNumbers.join(", ")} ]`;
  }

  return validNumerals.reduce((acc, cur) => acc + cur, 0);
};

export { convertRomanToNumber };
