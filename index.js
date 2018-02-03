'use strict';

/*!
 * pass-creator <https://github.com/a1ike/pass-creator>
 *
 * Copyright (c) 2018, Dmitry Katyushin.
 * Released under the MIT License.
 */

/**
 * Description
 *
 * @param {Number} `length` The parameter that takes the length of the password.
 * @param {Object} `options` Optional parameters.
 * @return {String}
 * @api public
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

function passwordNinja() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var _ref = arguments[1];
  var _ref$minAmountOfLower = _ref.minAmountOfLowerChars,
    minAmountOfLowerChars = _ref$minAmountOfLower === undefined ? 1 : _ref$minAmountOfLower,
    _ref$minAmountOfUpper = _ref.minAmountOfUpperChars,
    minAmountOfUpperChars = _ref$minAmountOfUpper === undefined ? 1 : _ref$minAmountOfUpper,
    _ref$minAmountOfNums = _ref.minAmountOfNums,
    minAmountOfNums = _ref$minAmountOfNums === undefined ? 1 : _ref$minAmountOfNums,
    _ref$minAmountOfSymbs = _ref.minAmountOfSymbs,
    minAmountOfSymbs = _ref$minAmountOfSymbs === undefined ? 0 : _ref$minAmountOfSymbs,
    _ref$toLowerCase = _ref.toLowerCase,
    toLowerCase = _ref$toLowerCase === undefined ? false : _ref$toLowerCase,
    _ref$toUpperCase = _ref.toUpperCase,
    toUpperCase = _ref$toUpperCase === undefined ? false : _ref$toUpperCase;


  /**
   * Exception throwing if the parameters are incorrect
   */

  if (!isNotNegativeInteger(length)) {
    throw new TypeError('The parameter that takes the length of the password must be a positive integer');
  }

  if (!isNotNegativeInteger(minAmountOfLowerChars) || !isNotNegativeInteger(minAmountOfUpperChars) || !isNotNegativeInteger(minAmountOfNums) || !isNotNegativeInteger(minAmountOfSymbs)) {
    throw new TypeError('Parameters that take the number of characters must be a positive integer');
  }

  if (typeof toLowerCase !== 'boolean' || typeof toUpperCase !== 'boolean') {
    throw new TypeError('Parameters "toLowerCase" / "toUpperCase" must be a true or false');
  }

  if (toLowerCase && toUpperCase || !toLowerCase && !toUpperCase) {
    throw new TypeError('Parameters "toLowerCase" and "toUpperCase" can not simultaneously have the same values');
  }

  if (length < minAmountOfLowerChars + minAmountOfUpperChars + minAmountOfNums + minAmountOfSymbs) {
    throw new SyntaxError('The amount of elements you entered can not be less than the length of the password');
  }

  var result = '';
  var passwordLenght = length;
  var currentPasswordPosition = 0;

  var randomCase = []; // Array for random function calls

  /**
   * Filling the result with minimum values
   */

  if (minAmountOfLowerChars > 0) {
    randomCase.push(randomLowerChar);
    for (var i = 0; i < minAmountOfLowerChars; i++) {
      result += randomLowerChar();
      currentPasswordPosition++;
    }
  }

  if (minAmountOfUpperChars > 0) {
    randomCase.push(randomUpperChar);
    for (var _i = 0; _i < minAmountOfUpperChars; _i++) {
      result += randomUpperChar();
      currentPasswordPosition++;
    }
  }

  if (minAmountOfNums > 0) {
    randomCase.push(randomNum);
    for (var _i2 = 0; _i2 < minAmountOfNums; _i2++) {
      result += randomNum();
      currentPasswordPosition++;
    }
  }

  if (minAmountOfSymbs > 0) {
    randomCase.push(randomSymb);
    for (var _i3 = 0; _i3 < minAmountOfSymbs; _i3++) {
      result += randomSymb();
      currentPasswordPosition++;
    }
  }

  /**
   * "Heart" of the generator, random filling of the result
   */

  for (var _i4 = currentPasswordPosition; _i4 < passwordLenght; _i4++) {
    result += randomCase[randomInteger(0, randomCase.length - 1)]();
  }

  if (toLowerCase == true) {
    result = result.toLowerCase();
  }

  if (toUpperCase == true) {
    result = result.toUpperCase();
  }

  /**
   * Shuffle the generated string
   */

  result = shuffleString(result);

  /**
   * Main functions
   */

  function shuffleString(str) {
    if (typeof str !== 'string') {
      throw new TypeError('The parameter must be a string');
    }
    return str.split('').sort(function () {
      return 0.5 - Math.random();
    }).join('');
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
    if (Math.random() >= 0.5) {
      var currentSymb = String.fromCharCode(randomInteger(33, 46));
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

exports.default = passwordNinja;