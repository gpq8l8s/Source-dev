'use strict';

const numbers = [-2, 0, 2, 3];

// old way
// let sum = 0;
// for (let n of numbers) sum += n;

// console.log(sum);

//reduce(accumulator, currentValue)
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
//   //👇 0 = initialValue
// }, 0);

// console.log(sum);

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);

let arr = [1, 2, 3, 4, 5];

// let result = 0;
// arr.forEach(num => {
//   result += num;
// });
// console.log(result);
//const result = arr.reduce((prev, cur) => prev + cur);

// const result = arr.reduce((prev, cur) => {
//   return prev + cur;
// }, 50);
// console.log(result);

let userList = [
  {name: 'Mike', age: 30},
  {name: 'Tom', age: 10},
  {name: 'Jane', age: 27},
  {name: 'Sue', age: 23},
  {name: 'Harry', age: 42},
  {name: 'Steve', age: 40},
];
let result = userList.reduce((prev, cur) => {
  //get a result of only adults
  // if (cur.age > 18) {
  //   prev.push(cur.name);
  // }
  // return prev;

  //get a result : sum of age
  //return (prev += cur.age);

  if (cur.name.length === 3) {
    prev.push(cur.name);
  }
  return prev;
}, []);
console.log(result);
