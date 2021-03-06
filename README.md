# Roman Numeral Converter

This is an application that helps convert numbers to Roman numerals. Find Roman numerals.

```js
const { convertRomanNumeral } = require("cr-numeral");
// OR
const crn = require("cr-numeral").convertRomanNumeral;

const number = 2021;
const romanNumeral = convertRomanNumeral(number);
console.log(romanNumeral);
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

## Usage

```javascript
// Browser
String.convertRomanNumeral(2025));
"MMXXV"
```

```javascript
// NodeJS
> const { ConertRomanNumeral } = require('cr-numeral');

> convertRomanNumeral(2021));
"MMXXI"

> convertRomanNumeral(20000));
"MMMMMMMMMMMMMMMMMMMM"

> convertRomanNumeral("name"));
"Can not convert Zero or negative numbers"

> convertRomanNumeral("na256m"));
"Can not convert Zero or negative numbers"

> convertRomanNumeral("rotate"));
"Can not convert Zero or negative numbers"

> convertRomanNumeral(false));
"Can not convert Zero or negative numbers"

> convertRomanNumeral(true));
"I" // true evaluates to 1 and 1 equals I
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
