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

function passCreator(length = 8, options = {
  minAmountOfLowerChars: 1,
  minAmountOfUpperChars: 1,
  minAmountOfNums: 1,
  minAmountOfSymbs: 0,
  toLowerCase: false,
  toUpperCase: false
}) {

  if (typeof length !== 'number') {
    throw new TypeError('The parameter that takes the length of the password must be a number');
  }

  if (typeof options !== 'object' && typeof options !== 'null') {
    throw new TypeError('The parameter that takes options must be an object');
  }

  if (length < (options.minAmountOfLowerChars + options.minAmountOfUpperChars + options.minAmountOfNums + options.minAmountOfSymbs)) {
    throw new SyntaxError('The amount of elements you entered can not be less than the length of the password');
  }

  if (typeof options.toLowerCase !== 'boolean' || typeof options.toUpperCase !== 'boolean') {
    throw new TypeError('Parameters "toLowerCase" / "toUpperCase" must be a true or false');
  }

  let result = '';
  let passwordLenght = length;
  let currentPasswordPosition = 0;

  let randomCase = [];

  if (options.minAmountOfLowerChars > 0) {
    randomCase.push(randomLowerChar);
    for (let i = 0; i < options.minAmountOfLowerChars; i++) {
      result += randomLowerChar();
      currentPasswordPosition++;
    }
  }

  if (options.minAmountOfUpperChars > 0) {
    randomCase.push(randomUpperChar);
    for (let i = 0; i < options.minAmountOfUpperChars; i++) {
      result += randomUpperChar();
      currentPasswordPosition++;
    }
  }

  if (options.minAmountOfNums > 0) {
    randomCase.push(randomNum);
    for (let i = 0; i < options.minAmountOfNums; i++) {
      result += randomNum();
      currentPasswordPosition++;
    }
  }

  if (options.minAmountOfSymbs > 0) {
    randomCase.push(randomSymb);
    for (let i = 0; i < options.minAmountOfSymbs; i++) {
      result += randomSymb();
      currentPasswordPosition++;
    }
  }

  for (let i = currentPasswordPosition; i < passwordLenght; i++) {
    result += randomCase[randomInteger(0, (randomCase.length - 1))]();
  }

  if (options.toLowerCase == true) {
    result = result.toLowerCase();
  }

  if (options.toUpperCase == true) {
    result = result.toUpperCase();
  }

  result = shuffleString(result);

  function shuffleString(str) {
    return str.split('').sort(function(){return 0.5 - Math.random()}).join('');
  }

  function randomInteger(min, max) {
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

export default passCreator;
