// operator
console.log('my' + ' ' + 'cat');
console.log('1' + 2);
console.log(`string literals: 
'' ''
1+2 = ${1 + 2}`);
console.log(`1+5 = ${1 + 5}`);

console.log("Hyebin's Book");
console.log("Hyebin's \nBook");
console.log("Hyebin's \tBook");

console.log(2 ** 3);

let counter = 2;
const preIncrelent = ++counter;
const postDecrement = counter--;

let x = 3;
let y = 6;
console.log((x += y));
console.log((x -= y));
console.log((x /= y));
console.log((x %= y));
console.log((x *= y));

//Comparaison Operator
console.log(10 < 5);
console.log(10 <= 5);
console.log(10 > 6);
console.log(10 >= 6);

// Logical Operator
// ||(or), finds the first truthy value
const value1 = false;
const value2 = 4 < 2;

console.log(`or : ${value1 || value2 || check()}`);
function check() {
  for (let i = 0; i < 10; i++) {
    console.log('^^');
  }
  return true;
}

console.log(`and : ${value1 && value2 && check()}`);
function check() {
  for (let i = 0; i < 10; i++) {
    console.log('^^');
  }
  return true;
}

console.log(!value1);
//

const stringFive = '5';
const numberFive = 5;
console.log(stringFive == numberFive);
console.log(stringFive === numberFive);

const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// Condition Operator
const name = 'Hyebin';
if (name === 'Hyebin') {
  console.log('Welcome!');
} else if (name === 'Kim') {
  console.log('Hello');
} else {
  console.log('unknown');
}

console.log(name === 'Hyebin' ? 'yes' : 'no');

//Switch Statement
const browser = 'safari';
switch (browser) {
  case 'window':
    console.log('Still??');
    break;
  case 'safari':
    console.log('🍎');
    break;
  case 'chrome':
    console.log('up');
    break;
  default:
    console.log('whatever..');
    break;
}

//Loops
let i = 4;
while (i > 0) {
  console.log(`while : ${i}`);
  i--;
}

do {
  console.log(`do while : ${i}`);
  i--;
} while (i > 0);

for (i = 4; i > 0; i--) {
  console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i--) {
  console.log(`for : ${i}`);
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i : ${i}, j : ${j}`);
  }
}

//iterate from 0 to 10 and print only even numbers
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`i : ${i}`);
  }
}

//iterate from 0 to 10 and print numbers until reaching 8(break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2 : ${i}`);
}
