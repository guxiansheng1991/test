define(function(require, exports, module) {
  'use strict';
  console.log('m1');
  var add = function (x, y) {
    console.log(x, y);
    return x + y;
  }
  module.exports = {
    add: add
  }
});
