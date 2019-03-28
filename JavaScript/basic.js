/**
 * 验证问题:
 * JavaScript中if语句的计算是使用eval计算的,eval只接受原始字符串作为参数,如果不是,将不错改变,直接返回
 */
var x = 1;
if (function f() {}) {
  x += typeof f;
}
console.log('x', x);

var k = 1;
if (1) {
    eval(function foo(){ return '123' });
    k += typeof foo;
}
console.log('k', k); 

/**
 * 闭包问题
 */
var a = 10;
function bibao() {
  var b = 20;
  return function () {
    return b +=10;
  }
}
var bibaoInstance = bibao();
console.log(bibaoInstance);
console.log(bibaoInstance());
console.log(bibaoInstance());
console.log(bibaoInstance());

/**
 * 链式调用实现
 * 将一个对象转换为原始值的时候,先查看是否有valueOf方法,如果有且返回值是一个原始值就返回一个原始值,否则调用toString方法
 */
function mul (x) {
  var count = x;
  var _b = function (num) {
    count = count * num;
    return _b;
  }
  _b.valueOf = function () {
    return count;
  }
  _b.toString = function () {
    return count;
  }
  return _b;
}
var d = mul(2)(3)(4)(5);
console.log(d);

/**
 * 判断对象是不是数组
 */
function isArray1 (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
function isArray2 (obj) {
  return obj.__proto__ === Array.prototype;
}

var output = (function(x){
  delete x;
  return x;
})(0);
console.log('output', output);

/**
 * 创建对象
 */
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
const she = Object.create(person);
console.log(me === she);

/**
 * new和Object.create的区别
 */
var Base = function () {
  this.a = 2;
};
Base.prototype.a = 3;
var o1 = new Base();
var o2 = Object.create(Base);
console.log('o1', o1);
console.log('o2', o2);

/**
 * prototype和__proto__的区别
 * 1. 每一个js对象都有__proto__对象(值就是它所对应的原型对象, 因此可以将__proto__对象称作原型对象), 并从原型对象继承属性和方法
 * 2. 只有函数才会有prototype对象,且使用new声明对象, 对象实例的__proto__(原型对象)对应于函数的prototype对象,并以此实现继承
 */

var one = {x: 1};
var two = new Object();
console.log(one.__proto__ === Object.prototype);
console.log(two.__proto__ === Object.prototype);
console.log(one.toString === one.__proto__.toString);
console.log('one.prototype', one.prototype);  // undefined

function testPrototype () {
  this.a = 100;
}
testPrototype.prototype.b = 200;
var testPrototypeInstance = new testPrototype();
console.log('testPrototype.prototype', testPrototype.prototype);
console.log('testPrototypeInstance', testPrototypeInstance);
console.log(testPrototypeInstance.__proto__ === testPrototype.prototype);
console.log('testPrototypeInstance.b', testPrototypeInstance.b);

console.log('Object instanceof Function', Object instanceof Function);
console.log('Function instanceof Object', Function instanceof Object);
console.log('Object.prototype', Object.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Function.__proto__ === Object.__proto__);
console.log(Object.__proto__ === Object.prototype);
console.log(Function.__proto__ === Function.prototype);

console.log('------------------------------ 继承体系 ----------------------------------------');
console.log('Function.prototype.__proto__ === Object.prototype', Function.prototype.__proto__ === Object.prototype);
console.log('Object.__proto__ === Function.prototype', Object.__proto__ === Function.prototype);
console.log('Function.__proto__ === Function.prototype', Function.__proto__ === Function.prototype);
console.log('Array.__proto__ === Function.prototype', Array.__proto__ === Function.prototype);
console.log('String.__proto__ === Function.prototype', String.__proto__ === Function.prototype);
console.log('Number.__proto__ === Function.prototype', Number.__proto__ === Function.prototype);
console.log('Boolean.__proto__ === Function.prototype', Boolean.__proto__ === Function.prototype);