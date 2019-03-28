var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
console.log(trees);

class ClassName {
  x = 1;
  y = 2;
  constructor () {}
  sayHello () {
    console.log('hello');
  }
  static sayAge () {
    console.log(123);
  }
}
let className = new ClassName();
console.log(ClassName.prototype);

// ES6

class Parent {
  height = 20;
  static width = 30;
  constructor(name) {
    this.name = name;
  }

  static sayHello() {
    console.log('hello');
  }

  sayName() {
    console.log('my name is ' + this.name);
    return this.name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  sayAge() {
    console.log('my age is ' + this.age);
    return this.age;
  }
}

let parent = new Parent('Parent');
let child = new Child('Child', 18);

console.log('parent', parent);
console.log('child', child);

console.log('Child.__proto__ === Parent', Child.__proto__ === Parent);
console.log('Parent.__proto__ === Function.prototype', Parent.__proto__ === Function.prototype);
console.log('Function.prototype.__proto__ === Object.prototype', Function.prototype.__proto__ === Object.prototype);
console.log('Parent.__proto__ === Function.prototype', Object.prototype.__proto__ === null);

console.log('child.__proto__ === Child.prototype', child.__proto__ === Child.prototype);
console.log('Array.prototype.__proto__ === Object.prototype', Child.prototype.__proto__ === Parent.prototype);
console.log('Array.prototype.__proto__ === Object.prototype', Parent.prototype.__proto__ === Object.prototype);
console.log('Array.prototype.__proto__ === Object.prototype', Object.prototype.__proto__ === null);
