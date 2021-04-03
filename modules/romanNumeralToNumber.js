const { roman, numbers } = require("./algorithm/algorithm");

const convertRomanToNumber = (numeral) => {
  const regExp = /(CM|CD|XC|XL|IX|IV|[A-Z])/gi;
  const validNumber = [];
  const invalidNumber = [];

  if (typeof numeral === "boolean") return "Cannot use Boolean values!!!";
  else if (typeof numeral !== "string")
    return "You must provide only valid strings!!!";

  const expression = numeral.toUpperCase().match(regExp);

  expression.forEach((elem) => {
    if (roman.includes(elem)) {
      const romanIndex = roman.indexOf(elem);
      validNumber.push(numbers[romanIndex]);
    } else invalidNumber.push(elem);
  });

  if (invalidNumber.length > 0) {
    let pluralChar = invalidNumber.length > 1 ? "s" : "";
    const pluralForm = invalidNumber.length > 1 ? "these are" : "this is an";
    return `Provide a valid roman character!!!\nCause ${pluralForm} invalid roman numeral${pluralChar} : [ ${invalidNumber} ]`;
  } else return validNumber.reduce((acc, cur) => acc + cur);
};

module.exports = { convertRomanToNumber };
