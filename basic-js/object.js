const obj1 = {}; //object syntax
const obj2 = new Object(); //object constructor


//object literal syntax
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name :'ellie', age : 4 };
print(ellie);

ellie.hasjob = true;
console.log(ellie.hasjob);

delete ellie.hasjob;
console.log(ellie.hasjob);

//Computed properties
console.log(ellie.name);
console.log(ellie ['name']);

ellie['hasjob'] = true;
console.log(ellie.hasjob);
function printValue(obj, key){
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

//property value shorthand
const person1 = makePerson('bob', 2);
const person2 = makePerson('steve', 3);
const person3 = makePerson('dave', 5);
const person4 = makePerson('ellie', 20);
console.log(person1);
function makePerson(name, age){
  return{
    name,
    age
  };
}

//constructor function
const person5 = new Person('me', 4);
const person6 = new Person('you', 40);
console.log(person5)
console.log(person6)
function Person(name, age){
    this.name = name;
    this.age = age;
}

//in operator : checking existence of property
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);


//for in
//for (key in ellie){
//  console.log(key);
//}
//
//for (value of array){
//  console.log(value);
//}

//cloning
const user = {name : 'ellie', age : '20'};
const user2 = user;
console.log(user);

const user3 = {};
for (key in user){
  user3[key] = user[key];
}
console.log(user3);
user3.name = 'coder';
console.log(user3);
console.log(user);
console.log(user2);

const user4 = Object.assign({}, user);
console.log(user4);

user4.name = 'coder';
console.log(user4);
console.log(user);

// ++
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const fruit3 = {color : 'white', size : 'small'};
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed);
