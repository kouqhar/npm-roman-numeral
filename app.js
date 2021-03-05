const convertRomanNumeral = (num) => {
  let romanNumeral = "";

  if (num > 0) {
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
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

module.exports = { convertRomanNumeral };
