# Roman Numeral Converter

This is an application that helps convert numbers to Roman numerals or vice versa. Find Roman numerals or Numbers.

```js
const {
  convertNumberToRoman: cnr,
  convertRomanToNumber: crn,
} = require("cr-numeral");
// OR
const cnr = require("cr-numeral").convertNumberToRoman;
const crn = require("cr-numeral").convertRomanToNumber;

const number = 2021;
const numeral = "MMMXXV"; // Case-insensitive

const toRoman = cnr(number);
const toNumber = cnr(numeral);

console.log(toRoman, toNumber);
```

# Contact Me :rocket:

**Email**

- If you are looking to get ahold of me, you can send me an [Email : Naphtali Duniya](mailto:naphtaliduniya2@gmail.com)

**Social Media**

- [Instagram : Naphtali Duniya](https://www.instagram.com/_kouqhar)

* Via [Twitter : Naphtali Duniya](https://twitter.com/kouqhar)

**Telephone**

- Call +234 (0)81 664 661 73

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install cr-numeral
```

## Features

- Convert a Number to a Roman Numeral => convertNumberToRoman(number)
- Convert a Roman Numeral to a Number => convertRomanToNumber("Numeral")

## Usage

```javascript
// Browser
// Convert Number to Roman Numeral
String.convertNumberToRoman(2025));
"MMXXV"

// Convert Roman Numeral to Number
// Case-insensitive
String.convertRomanToNumber("MMXXI"));
"2021"
```

#### Converting a Number to Roman Numeral

```javascript
// NodeJS
> const { convertNumberToRoman } = require('cr-numeral');
// OR
> const convertNumberToRoman = require('cr-numeral').convertNumberToRoman;

> convertNumberToRoman(2021));
"MMXXI"

> convertNumberToRoman(-2021)); // Can not convert a negative number or zero
"Can not convert Zero or negative numbers!!!"

> convertNumberToRoman("na256m"));
"You must provide only valid numbers!!!"

> convertNumberToRoman(false));
"Cannot use Boolean values!!!"

> convertNumberToRoman(true));
"Cannot use Boolean values!!!"
```

#### Converting Roman Numeral to a Number

```javascript
// NodeJS
> const { convertRomanToNumber } = require('cr-numeral');
// OR
> const convertRomanToNumber = require('cr-numeral').convertRomanToNumber;

> convertRomanToNumber("MMXXI"));
"2021"

> convertRomanToNumber("na256m"));
"Provide a valid roman character!!!
Cause these are invalid roman numerals : [ N,A,2,5,6 ]"

> convertRomanToNumber(6355));
"You must provide only valid strings!!!"

> convertRomanToNumber(false));
"Cannot use Boolean values!!!"

> convertRomanToNumber(true));
"Cannot use Boolean values!!!"
```

## [Changelog](/CHANGELOG.md)

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## Donate

I maintain this project in my free time, if it helped you please support my work via [blockchain](https://blockchain.com/btc/payment_request?address=1DkZt2quV7DtmbZtMycASBmo136MnyvZ3&amount=0.00210943&message=Support%20my%20works%20and%20boost%20my%20content%20creation.%20It's%20a%20minimum%20of%20100usd.) or **Coinbase - 1C7QofCMbDm7XfzaxWGVvQ91DrjPQqzTQx**
, thanks a lot!

## License

Copyright (c) 2021 Duniya Naphtali
Licensed under the MIT license.
