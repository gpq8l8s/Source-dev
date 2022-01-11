'use strict';

// let(added in ES6) - mutable datatype

let globalName = 'global name';
{
  let name = 'me!';
  console.log(name);
  name = 'hello'
  console.log(name);
  console.log(globalName);
}

console.log(name);
console.log(globalName)


// var (used before let added in ES6)
//Var Hoisting(Able to console before declair)
console.log(age);
var age = 4;

//Cannot access uninitialized variables
//console.log(age);
//let age = 4;

//No block Scrop
{
  age = 4;
  var age;
}

console.log(age)

console.clear();
//constants(const); 1. security 2.thread safety 3.reduce mistakes
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2);

let text = 'hello';
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7'+5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8'/'5';
console.log(`value : ${text}, type : ${typeof text}`);

const me = {name : 'me', age : 20};
console.log(me);
me.age = 21;
console.log(me);
