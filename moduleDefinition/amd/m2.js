/*
define('m2', ['m1'], function(m1) {
  'use strict';
  console.log('m2 is running');
  var add2 = function (x, y) {
    console.log(x, y, x, y);
    return m1.add(x, y) + m1.add(x, y);
  }
  return {
    add2: add2
  }
});
*/

define(function (require, exports, module) {
  var m1 = require('./m1');
  var add2 = function (x, y) {
    console.log(x, y, x, y);
    return m1.add(x, y) + m1.add(x, y);
  }
  exports.add2 = add2;
});