function ClassName () {
  this.x = 1;
  this.y = 2;
  // this.sayHello = function () {
  //   console.log('hello');
  // }
}
ClassName.prototype.sayHello = function () {
  console.log('hello');
}
var className = new ClassName();
className.sayHello();

function Parent () {
  this.x = 1;
  this.y = 2;
}

function Child () {
  this.z = 3;
}

Child.prototype = new Parent();

var parent = new Parent();
var child = new Child();

console.log('Child.__proto__ === Parent', Child.__proto__ === Parent);
console.log('Child.__proto__ === Parent', child.__proto__ === Child.prototype);
console.log('parent.__proto__ === Parent.prototype', parent.__proto__ === Parent.prototype);
console.log('Child.prototype.__proto__ === parent.prototype', Child.prototype.__proto__ === Parent.prototype);
console.log('Child.prototype.__proto__ === parent.__proto__', Child.prototype.__proto__ === parent.__proto__);
