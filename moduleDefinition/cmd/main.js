define(function(require, exports, module) {
  var m1 = require('./m1');
  var m2 = require('./m2');
  m1.add(3, 4);
  m1.add(6, 9);
  console.log('main.js is running');
});

/**
 * CMD
 * sea.js 就近加载, 比较好用
 */