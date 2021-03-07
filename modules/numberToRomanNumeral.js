const { roman, numbers } = require("./algorithm/algorithm");

const convertNumberToRoman = (num) => {
  let romanNumeral = "";

  if (typeof num === "boolean") return "Cannot use Boolean values!!!";
  else if (typeof num !== "number")
    return "You must provide only valid numbers!!!";

  if (num > 0) {
    while (num !== 0) {
      const index = numbers.findIndex((nums) => num >= nums);
      romanNumeral += roman[index];
      num -= numbers[index];
    }
  } else {
    romanNumeral = "Can not convert Zero or negative numbers!!!";
  }

  return romanNumeral;
};

module.exports = { convertNumberToRoman };
