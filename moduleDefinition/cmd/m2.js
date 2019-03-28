define(function(require, exports, module) {
  'use strict';
  var m1 = require('./m1');
  console.log('m2');
  var add2 = function (x, y) {
    console.log(x, y, x, y);
    m1.add(x, y);
    return x + y + x;
  }
  module.exports = {
    add2: add2
  }
});