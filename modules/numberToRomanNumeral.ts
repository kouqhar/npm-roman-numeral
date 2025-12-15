import { roman, numbers } from "./algorithm/algorithm";

const convertNumberToRoman = (num: number | boolean | string): string => {
  let romanNumeral = "";

  if (typeof num === "boolean")
    return "Cannot use Boolean values!!!";
  if (typeof num !== "number")
    return "You must provide only valid numbers!!!";

  if (num > 0) {
    let remainingNum = num;
    while (remainingNum !== 0) {
      const index = numbers.findIndex((num: number) => remainingNum >= num);
      romanNumeral += roman[index];
      remainingNum -= numbers[index];
    }
  } else
    romanNumeral = "Cannot convert Zero or negative numbers!!!";

  return romanNumeral;
};

export { convertNumberToRoman };
