/*
define('m1', function() {
  'use strict';
  console.log('m1 is running');
  var add = function (x, y) {
    console.log(x, y);
    return x + y;
  }
  return {
    add: add
  }
});
*/

define(function (require, exports, module) {
  var add = function (x, y) {
    console.log(x, y);
    return x + y;
  }
  exports.add = add;
});