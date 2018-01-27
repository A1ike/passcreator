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
  toUpperCase: false,
}) {

  let result = '';
  let passwordLenght = length;

  if (typeof (length) !== 'number') {
    throw new TypeError('The parameter that takes the length of the password must be a number');
    return;
  }

  if (typeof (options) !== 'object' && options !== 'null') {
    throw new TypeError('The parameter that takes options must be an object');
    return;
  }

  if (length < (options.minAmountOfLowerChars + options.minAmountOfUpperChars + options.minAmountOfNums + options.minAmountOfSymbs)) {
    throw new SyntaxError('The amount of elements you entered can not be less than the length of the password');
    return;
  }

  if (typeof (options.toLowerCase) !== 'boolean' || typeof (options.toUpperCase) !== 'boolean') {
    throw new TypeError('Parameters "toLowerCase" / "toUpperCase" must be a true or false');
    return;
  }

  for (let i = 0; i < passwordLenght; i++) {
    let currentRandom = Math.random();

    if (currentRandom > 0.66) {
      result += randomChar();
    } else if (currentRandom < 0.65 && currentRandom > 0.33) {
      result += randomNum();
    } else {
      let currentSymb = randomSymb();
      if (currentSymb === "'") {
        currentSymb = "\'";
      }
      result += currentSymb;
    }
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
    if (Math.random() > 0.5) {
      return String.fromCharCode(randomInteger(33, 46));
    } else {
      return String.fromCharCode(randomInteger(58, 64));
    }
  }

  return result;
}

export default passCreator;
