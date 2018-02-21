# password-ninja

password-ninja is designed to quickly generate passwords

[Site](https://example.com/) |
[Docs](https://github.com/a1ike/password-ninja)

## Installation

Using npm:
```shell
$ npm install --save password-ninja
```

## Usage

```js
var generatePassword = require('password-ninja');
```

## API

```js
generatePassword(length, options);
```

* `length` **{Number}**: (optional) The parameter that takes the length of the password
* `options` **{Object}**: (optional) Optional parameters

### length

> the length of the string to generate `The default value is "8"`

* `generatePassword(12)` will generate something like this `02amNJa49oqC`
* `generatePassword(32)` will generate something like this `IEa5V8X2S27pLIwAKF6KiH41kCm089Qw`

### options

> the object that gets parameters

**minAmountOfLowerChars**

> parameter that is responsible for the minimum number of lower characters `The default value is "1"`

* `generatePassword(12, {minAmountOfLowerChars: 8})` will generate something like this `YcxyC2Tnwtmd`
* `generatePassword(12, {minAmountOfLowerChars: 0})` will generate something like this `ZXY05Q9654SU`
* `generatePassword(12, {minAmountOfLowerChars: 1})` will generate something like this `K3sHYJNp836N`

**minAmountOfUpperChars**

> parameter that is responsible for the minimum number of upper characters `The default value is "1"`

* `generatePassword(12, {minAmountOfUpperChars: 8})` will generate something like this `SLHA0BHTyF6a`
* `generatePassword(12, {minAmountOfUpperChars: 0})` will generate something like this `58m634m3qys9`
* `generatePassword(12, {minAmountOfUpperChars: 1})` will generate something like this `1rg5I5A0u2Xc`

**minAmountOfNums**

> parameter that is responsible for the minimum number of numbers `The default value is "1"`

* `generatePassword(12, {minAmountOfNums: 8})` will generate something like this `98107V706Rr8`
* `generatePassword(12, {minAmountOfNums: 0})` will generate something like this `WqlKlwfEOvHB`
* `generatePassword(12, {minAmountOfNums: 1})` will generate something like this `88eupL0KpLWD`

**minAmountOfSymbs**

> parameter that is responsible for the minimum number of symbols `The default value is "0"`

* `generatePassword(12, {minAmountOfSymbs: 8})` will generate something like this `);3'@wW>?'.2`
* `generatePassword(12, {minAmountOfSymbs: 0})` will generate something like this `70T0d5Tp6vjV`
* `generatePassword(12, {minAmountOfSymbs: 1})` will generate something like this `dBI55':Kt17>`

**toLowerCase**

> parameter that is used to switch characters to lower case `The default value is "false"`

* `generatePassword(12, {toLowerCase: true})` will generate something like this `e1kgpsk2vqrc`
* `generatePassword(12, {toLowerCase: false})` will generate something like this `2Dp37GXW4rdF`

**toUpperCase**

> parameter that is used to switch characters to upper case `The default value is "false"`

* `generatePassword(12, {toUpperCase: true})` will generate something like this `T4284NI6NE4Z`
* `generatePassword(12, {toUpperCase: false})` will generate something like this `6Oa7tS9v5Ei0`

## Usage Examples

* `generatePassword(6, {minAmountOfNums: 0, toUpperCase: true})` will generate something like this `EHSCQI`
* `generatePassword(20, {minAmountOfLowerChars: 10, minAmountOfUpperChars: 10, minAmountOfNums: 0})` will generate something like this `nQJCYbnYbzqVuvDIqcCE`
* `generatePassword(12, {minAmountOfSymbs: 1, toLowerCase: true})` will generate something like this `d6=#0'89uf,e`

### License

Copyright © 2018, [Dmitry Katyushin](https://github.com/a1ike).
Released under the [MIT License](LICENSE).