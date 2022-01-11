// function : performs a task or calculates a value
function printHello(){
  console.log('hello');
}
printHello();

//Parameters
function changeName(obj){
  obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);

//Default Parameters
function showMessage(message, from = 'Unknown'){
  console.log(`${message} from ${from}`);
}
showMessage('HI');

//Rest Parameters(Added in ES6)
function printAll(...args){
  for(let i = 0; i < args.length; i++){
    console.log(args[i]);
  }
}
printAll('ellie', 'dream', 'coder');

function printAll(...args){
  for(const arg of args){
    console.log(arg);
  }
}
printAll('A', 'B', 'C');

function printAll(...args){
  args.forEach((arg) => console.log(arg));
}
printAll('D', 'F', 'G');

//Local Scope : it can function to the variables out of {}
let globalMessage = 'global'
function printMessage(){
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
}
printMessage();

function printMessage(){
  let message = 'HELLO';
  console.log(message);
  console.log(globalMessage);
  function printAnother(){
    console.log(message);
    let childMessage = 'HeLoù'
  }
  //XX console.log(childMessage);
}

//Return a value
function sum(a, b){
  return a + b;
}
const result = sum(1 + 2);
console.log(`sum = sum ${1 + 2}`);

const print = function(){
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 4));

//Callback
function randomQuiz(answer, peintYes, printNo){
  if (answer === 'love you'){
    printYes();
  } else{
    printNo();
  }
}
const printYes = function(){
  console.log('yes');
};
const printNo = function print(){
console.log('no');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow Function


const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
simplePrint();

const simpleMultiply = (a, b) => {
  return a * b;
};
const calc = sum(2, 2)
console.log(`sum : ${2 * 2}`);


//IIFE : immediately invoked function expression
(function hello(){
  console.log('IIFE');
})();

//Quiz
//function calculate (command, a, b)
//command: add, substract, devide, multiply, remainder