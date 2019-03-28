/*
function cloneShallow (souce) {
  var target = {};
  for (var key in souce) {
    if (Object.prototype.hasOwnProperty.call(souce, key)) {
      target[key] = souce[key];
    }
  }
  return target;
}

// 测试用例
var a = {
  name: "muyiy",
  book: {
      title: "You Don't Know JS",
      price: "45"
  },
  a1: undefined,
  a2: null,
  a3: 123
}

var b = cloneShallow(a);
a.name = 'i am s';
a.book.price = 1000;
console.log('b', b);
*/

/*
function isObject (obj) {
  return typeof obj === 'object' && obj !== null;
}

function cloneDeep1 (source) {
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === 'object') {
        target[key] = cloneDeep1(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

// 测试用例
var a = {
  name: "muyiy",
  book: {
      title: "You Don't Know JS",
      price: "45"
  },
  a1: undefined,
  a2: null,
  a3: 123
}
var b = cloneDeep1(a);
a.name = 'i am s';
a.book.price = 1000;
console.log('b', b);
*/


function isObject (obj) {
  return typeof obj === 'object' && obj !== null;
}

function cloneDeep2 (source) {
  if (!isObject(source)) {
    return source;
  }
  var target = Array.isArray(source) ? [] : {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeep2(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

// 测试用例
var a = {
  name: "muyiy",
  book: {
      title: "You Don't Know JS",
      price: "45"
  },
  a1: undefined,
  a2: null,
  a3: 123
}
var arr = [
  {
    a: 123,
    c: {v: 1}
  },
  {
    a: 456,
    c: {v: 2}
  },
];
var b = cloneDeep2(a);
var d = cloneDeep2(arr);
a.name = 'i am s';
a.book.price = 1000;
console.log('b', b);
console.log('d', d);

