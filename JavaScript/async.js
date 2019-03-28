// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }

// 每隔一秒打出一个数字 0,1,2,3,4

// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   })(i);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }

// let i;
// for (i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
}

// 超时调用的代码都是在全局作用域中执行的，因此函数中this的值在非严格模式下指向window对象，在严格模式下是undefined
/*
var obj = {
  a: 123,
  add: function () {
    setTimeout(function() {
      console.log(this);  // window
    }, 1000);
  },
  ddd: function () {
    setTimeout(() => {
      console.log(this);  // obj
    }, 1000);
  }
};

obj.add();
obj.ddd();
var add2 = obj.add;
add2();
*/

// var i;
// for ( i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   })(i);
// }


// var obj = {
//   add: function () {
//     console.log(123);
//   }
// }
// console.log(obj.add.prototype);
// console.log(obj.add.__proto__);

// 闭包实验,当引用的外部变量变了,内部使用的变了是否随之改变