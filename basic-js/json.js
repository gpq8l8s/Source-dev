'use strict'

// 1. object to JSON
// stringify
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name : 'tori',
  color: 'white',
  size : null,
  birthDate : new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);


json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to object
// parse
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
