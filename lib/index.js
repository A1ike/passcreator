"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

function passCreator(length, options) {

  var result = '';
  var passwordLenght = length;

  for (var i = 0; i < passwordLenght; i++) {
    var currentRandom = Math.random();

    if (currentRandom > 0.66) {
      result += randomChar();
    } else if (currentRandom < 0.65 && currentRandom > 0.33) {
      result += randomNum();
    } else {
      var currentSymb = randomSymb();
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
    if (Math.random() > 0.5) {
      return String.fromCharCode(randomInteger(65, 90));
    } else {
      return String.fromCharCode(randomInteger(97, 122));
    }
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

exports.default = passCreator;