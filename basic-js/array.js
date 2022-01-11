//declaration
const arr1 =  new Array();
const arr2 = [1, 2]; //used more often than 1st

//index position
const fruits = ['🍎', '🍏'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);
//looping over an array
//for
for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

//for of
for(let fruit of fruits){
  console.log(fruit);
}

//forEach
fruits.forEach((fruit) => console.log(fruit));

//addition : push, deletion: pop, copy
fruits.push('🍒', '🥭');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift('🍌', '🫐');
console.log(fruits);

fruits.shift();
console.log(fruits);

//splice
fruits.splice(1, 2, '🍐');
console.log(fruits);

//combine two arrays
const fruits2 = ['🍍', '🥝'];
const newFruits = fruits2.concat(fruits);
console.log(newFruits);

//Searching: find the index
console.log(fruits.indexOf ('🍒'));
console.log(fruits.includes ('🍒'));
console.log(fruits.includes ('🥝'));

fruits.push('🫐', '🍐');
console.log(fruits);

console.log(fruits. indexOf ('🍐'));
console.log(fruits. indexOf ('🫐'));
console.log(fruits. lastIndexOf ('🍐'));
console.log(fruits. lastIndexOf ('🫐'));
