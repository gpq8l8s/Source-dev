'use strict'

//Javascript is synchronous
//Execute the code block by order after hoisting

//hoisting : execute 1, 3 first then 2
//why?: basically js runs up to down side, js send the data to browser when there's function then get the result and run
console.log('1');
setTimeout(() => {
  console.log('2');
}, 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asychronous
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);