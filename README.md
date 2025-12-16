# Roman Numeral Converter

`cr-numeral` is a lightweight and versatile npm package designed to effortlessly convert numbers to Roman numerals and vice versa. Whether you're building educational tools, historical applications, or need Roman numeral functionality in your project, `cr-numeral` provides a simple and efficient solution.

## Installing

### Package manager

Using npm:

```bash
$ npm install cr-numeral
```

Using bower:

```bash
$ bower install cr-numeral
```

Using yarn:

```bash
$ yarn add cr-numeral
```

Using pnpm:

```bash
$ pnpm add cr-numeral
```

Using bun:

```bash
$ bun add cr-numeral
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import { convertRomanToNumber, convertNumberToRoman, numeralValidation } from 'cr-numeral';
```

### CDN

Using jsDelivr CDN (ES5 UMD browser module):

```html
<script src="https://cdn.jsdelivr.net/npm/cr-numeral@1.2.7/dist/app.min.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/cr-numeral@1.2.7/dist/app.min.js"></script>
```

## Usage

> [!NOTE]
> THis package is CAse-INsenSITIVe

#### Browser

```javascript

// Convert Number to Roman Numeral
String.convertNumberToRoman(2025);
"MMXXV"

// Convert Roman Numeral to Number
String.convertRomanToNumber("MMXXI");
"2021"

// Validate Roman Numeral
const validator = String.numeralValidation("MMX3X2cV8b");
validator.isStrictValid // false
validator.isLooseValid // true
validator.isValid // true
```

#### Quick use

```js
const {
  convertNumberToRoman: cnr,
  convertRomanToNumber: crn,
  numeralValidation: nvl,
} = require("cr-numeral");
// OR
const cnr = require("cr-numeral").convertNumberToRoman;
const crn = require("cr-numeral").convertRomanToNumber;
const nvl = require("cr-numeral").numeralValidation;

const number = 2021;
const numeral = "MMMXXV"; // Case-insensitive

const toRoman = cnr(number);
const toNumber = crn(numeral);
const validateNumeral = nvl(numeral)

console.log(toRoman, toNumber, validateNumeral);
```

## Features

- Convert a Number to a Roman Numeral `convertNumberToRoman(number)`
- Convert a Roman Numeral to a Number `convertRomanToNumber("Numeral")`
- Validate a Roman Numeral input `numeralValidation("Numeral")`

### NodeJS

#### Converting a Number to Roman Numeral

Converting a number to a Roman numeral involves mapping numbers to specific Roman symbols (e.g., I, V, X, L, C, D, M).

```javascript
> const { convertNumberToRoman } = require('cr-numeral');
// OR
> const convertNumberToRoman = require('cr-numeral').convertNumberToRoman;

> convertNumberToRoman(2021);
"MMXXI"

> convertNumberToRoman(-2021); // Can not convert a negative number or zero
"Can not convert Zero or negative numbers!!!"

> convertNumberToRoman("na256m");
"You must provide only valid numbers!!!"

> convertNumberToRoman(false);
"Cannot use Boolean values!!!"

> convertNumberToRoman(true);
"Cannot use Boolean values!!!"
```

#### Converting Roman Numeral to a Number

Converting a Roman numeral to a number involves translating each Roman symbol (I, V, X, L, C, D, M) to its numeric value and summing them.

```javascript
> const { convertRomanToNumber } = require('cr-numeral');
// OR
> const convertRomanToNumber = require('cr-numeral').convertRomanToNumber;

> convertRomanToNumber("MMXXI");
"2021"

> convertRomanToNumber("na256m");
"Provide a valid roman character!!!"
"Cause these are invalid roman numerals : [ N,A,2,5,6 ]"

> convertRomanToNumber(6355);
"You must provide only valid strings!!!"

> convertRomanToNumber(false);
"Cannot use Boolean values!!!"

> convertRomanToNumber(true);
"Cannot use Boolean values!!!"
```

#### Validating Roman numeral string

Validating a Roman numeral string ensures it follows the correct rules for Roman numerals.

- Check if the string contains only valid symbols.
- Verify no invalid characters or digits are included.
- Confirm symbols are and can be processed.

```javascript
> const { numeralValidation } = require('cr-numeral');
// OR
> const { numeralValidation } = require('cr-numeral');

> const {  isInputEmpty,
  inputCount,
  isStrictValid,
  isLooseValid,
  hasInvalidNumerals,
  hasDigits,
  isValid,
  invalidNumeralCount,
  digitsCount,
  invalidInputsCount,
  invalidDigits,
  invalidNumeralStrings,
  validNumeralValues
} = numeralValidation("MMX3X2xcV8b");

// Only valid if there are no invalid inputs and at least one valid numeral
console.log(isStrictValid) // false

// Valid if there is at least one valid numeral
console.log(isLooseValid) // true

// Overall validity and if input can be processed
console.log(isValid) // true
```

### More Validators

- `isInputEmpty` - Checks if the input is empty

- `inputCount` - How many input characters were provided

- `hasInvalidNumerals`  - Checks if there are any invalid characters

- `hasDigits` - Checks if there are any digits

- `invalidNumeralCount` - How many invalid characters were found in total

- `digitsCount` - How many digits were found in total

- `invalidInputsCount` - How many invalid inputs were found in total

- `invalidDigits` - Lists of invalid digits

- `invalidNumeralStrings` - Lists of invalid numeral strings

- `validNumeralValues` - Lists of valid numeral values

## [Changelog](/CHANGELOG.md)

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm run test
```

# Contact :rocket:

**Email**

- If you are looking to get ahold of me, you can send me an [Email : Naphtali Duniya](mailto:naphtaliduniya2@gmail.com)

**Social Media**

- [Instagram : Naphtali Duniya](https://www.instagram.com/kouqhar)

* Via [Twitter : Naphtali Duniya](https://twitter.com/kouqhar)

**Telephone**

- Call +44 (0)787 100 2267

## Donate

I maintain this project in my free time, if it helped you please support my work via [Revolut](https://revolut.me/kouqhar?currency=GBP&amount=2000&note=I%20maintain%20this%20project%20during%20my%20free%20time.%20I%27d%20appreciate%20it), thanks a lot!

## License

Copyright (c) 2021 Duniya Naphtali
Licensed under the MIT license.
