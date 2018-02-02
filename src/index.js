/*!
 * pass-creator <https://github.com/a1ike/pass-creator>
 *
 * Copyright (c) 2018, Dmitry Katyushin.
 * Released under the MIT License.
 */

/**
 * special: '~!@#$%^&()_+-={}[];\',.'
 */

/**
 * Description
 *
 * @param {Number} `param` Bla bla bla.
 * @param {Object} `param` Bla bla bla.
 * @return {String}
 * @api public
 */

/* function passCreator(length = 8, options = {
  minAmountOfLowerChars: 1,
  minAmountOfUpperChars: 1,
  minAmountOfNums: 1,
  minAmountOfSymbs: 0,
  toLowerCase: false,
  toUpperCase: false
}) { */

function passCreator(length = 8, {
  minAmountOfLowerChars = 1,
  minAmountOfUpperChars = 1,
  minAmountOfNums = 1,
  minAmountOfSymbs = 0,
  toLowerCase = false,
  toUpperCase = false
}) {

  if (!isNotNegativeInteger(length)) {
    throw new TypeError('The parameter that takes the length of the password must be a positive integer');
  }

  if (!isNotNegativeInteger(minAmountOfLowerChars) || !isNotNegativeInteger(minAmountOfUpperChars) || !isNotNegativeInteger(minAmountOfNums) || !isNotNegativeInteger(minAmountOfSymbs)) {
    throw new TypeError('Parameters that take the number of characters must be a positive integer');
  }

  if (typeof toLowerCase !== 'boolean' || typeof toUpperCase !== 'boolean') {
    throw new TypeError('Parameters "toLowerCase" / "toUpperCase" must be a true or false');
  }

  if ((toLowerCase && toUpperCase) || (!toLowerCase && !toUpperCase)) {
    throw new TypeError('Parameters "toLowerCase" and "toUpperCase" can not simultaneously have the same values');
  }

  if (length < (minAmountOfLowerChars + minAmountOfUpperChars + minAmountOfNums + minAmountOfSymbs)) {
    throw new SyntaxError('The amount of elements you entered can not be less than the length of the password');
  }

  let result = '';
  let passwordLenght = length;
  let currentPasswordPosition = 0;

  let randomCase = [];

  if (minAmountOfLowerChars > 0) {
    randomCase.push(randomLowerChar);
    for (let i = 0; i < minAmountOfLowerChars; i++) {
      result += randomLowerChar();
      currentPasswordPosition++;
    }
  }

  if (minAmountOfUpperChars > 0) {
    randomCase.push(randomUpperChar);
    for (let i = 0; i < minAmountOfUpperChars; i++) {
      result += randomUpperChar();
      currentPasswordPosition++;
    }
  }

  if (minAmountOfNums > 0) {
    randomCase.push(randomNum);
    for (let i = 0; i < minAmountOfNums; i++) {
      result += randomNum();
      currentPasswordPosition++;
    }
  }

  if (minAmountOfSymbs > 0) {
    randomCase.push(randomSymb);
    for (let i = 0; i < minAmountOfSymbs; i++) {
      result += randomSymb();
      currentPasswordPosition++;
    }
  }

  for (let i = currentPasswordPosition; i < passwordLenght; i++) {
    result += randomCase[randomInteger(0, (randomCase.length - 1))]();
  }

  if (toLowerCase == true) {
    result = result.toLowerCase();
  }

  if (toUpperCase == true) {
    result = result.toUpperCase();
  }

  result = shuffleString(result);

  function shuffleString(str) {
    if (typeof str !== 'string') {
      throw new TypeError('The parameter must be a string');
    }
    return str.split('').sort(function () { return 0.5 - Math.random() }).join('');
  }

  function isNotNegativeInteger(number) {
    if (typeof number !== 'number') {
      throw new TypeError('The parameter must be a number');
    }
    return Number.isInteger(number) && number >= 0;
  }

  function randomInteger(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
      throw new TypeError('The parameters must be numbers');
    }
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }

  function randomChar() {
    if (Math.random() > 0.49) {
      return String.fromCharCode(randomInteger(65, 90));
    } else {
      return String.fromCharCode(randomInteger(97, 122));
    }
  }

  function randomLowerChar() {
    return String.fromCharCode(randomInteger(97, 122));
  }

  function randomUpperChar() {
    return String.fromCharCode(randomInteger(65, 90));
  }

  function randomNum() {
    return String.fromCharCode(randomInteger(48, 57));
  }

  function randomSymb() {
    if (Math.random() > 0.49) {
      let currentSymb = String.fromCharCode(randomInteger(33, 46));
      if (currentSymb === "'") {
        currentSymb = "\'";
      }
      return currentSymb;
    } else {
      return String.fromCharCode(randomInteger(58, 64));
    }
  }

  return result;
}

/* export default passCreator; */
